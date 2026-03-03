import { Router } from 'express';

import { DeliveryLogsController } from '@/controllers/delivery-logs-controller';

import { ensureAuthenticated } from '@/middlewares/ensure-authenticated';

import { verifyUserAuth } from '@/middlewares/verifyUserAuth';

const deliveriesLogsRoutes = Router();
const deliveriesLogsController = new DeliveryLogsController();

deliveriesLogsRoutes.post(
  '/',
  ensureAuthenticated,
  verifyUserAuth(['sale']),
  deliveriesLogsController.create
);

export { deliveriesLogsRoutes };
