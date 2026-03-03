import { Request, Response } from 'express';
import { z } from 'zod';
import { prisma } from '@/database/prisma';
import { AppError } from '@/utils/AppError';

class DeliveryLogsController {
  async create(req: Request, res: Response) {
    const bodySchema = z.object({
      delivery_id: z.string().uuid(),
      description: z.string(),
    });

    const { delivery_id, description } = bodySchema.parse(req.body);

    const delivery = await prisma.delivery.findUnique({
      where: { id: delivery_id },
    });

    if (!delivery) {
      throw new AppError('Delivery not found', 404);
    }

    if (delivery.status === 'processing') {
      throw new AppError('Change status to shipped', 400);
    }

    await prisma.deliverylog.create({
      data: {
        deliveryId: delivery_id,
        description,
      },
    });

    return res
      .status(201)
      .json({ message: 'Delivery log created successfully' });
  }
}

export { DeliveryLogsController };
