import { NextFunction, Request, Response } from 'express';
import { AppError } from '@/utils/AppError';
import { request } from 'http';

function verifyUserAuth(role: string[]) {
  return (request: Request, response: Response, next: NextFunction) => {
    if (!request.user) {
      throw new AppError('Unauthorized', 401);
    }

    if (!role.includes(request.user.role)) {
      throw new AppError('Forbidden', 403);
    }

    return next();
  };
}

export { verifyUserAuth };
