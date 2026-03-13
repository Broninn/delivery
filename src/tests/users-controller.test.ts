import request from 'supertest';
import { app } from '@/app';
import { prisma } from '@/database/prisma';

describe('UsersController', () => {
  let user_id: string;

  afterAll(async () => {
    await prisma.user.delete({
      where: { id: user_id },
    });
  });

  it('should create a new user successfully', async () => {
    const response = await request(app).post('/users').send({
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: 'password123',
    });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.name).toBe('John Doe');

    user_id = response.body.id;
  });

  it('should throw an error when trying to create a user with an existing email', async () => {
    const response = await request(app).post('/users').send({
      name: 'Duplicate User',
      email: 'jane.doe@example.com',
      password: 'password456',
    });

    expect(response.status).toBe(400);
    expect(response.body.message).toBe('Email is already in use.');
  });
});
