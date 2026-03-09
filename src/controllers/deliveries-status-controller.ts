import { Request, Response } from 'express';
import { prisma } from '@/database/prisma';
import { z } from 'zod';
import { DeliveryStatus } from '@prisma/client';

class DeliveriesStatusController {
  async update(req: Request, res: Response) {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    });

    const bodySchema = z.object({
      status: z.enum(['pending', 'shipped', 'delivered']),
    });

    const { id } = paramsSchema.parse(req.params);
    const { status } = bodySchema.parse(req.body);

    await prisma.delivery.update({
      data: {
        status: status as DeliveryStatus,
      },
      where: {
        id,
      },
    });

    await prisma.deliverylog.create({
      data: {
        deliveryId: id,
        description: status,
      },
    });

    return res.json();
  }
}

export { DeliveriesStatusController };
