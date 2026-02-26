import { Router } from 'express';

import { DeliveriesController } from '@/controllers/deliveries-controller';
import { DeliveriesStatusController } from '@/controllers/deliveries-status-controller';

import { ensureAuthenticated } from '@/middlewares/ensure-authenticated';

import { verifyUserAuth } from '@/middlewares/verifyUserAuth';

const deliveriesRoutes = Router();
const deliveriesController = new DeliveriesController();
const deliveriesStatusController = new DeliveriesStatusController();

deliveriesRoutes.use(ensureAuthenticated, verifyUserAuth(['sale']));
deliveriesRoutes.post('/', deliveriesController.create);
deliveriesRoutes.get('/', deliveriesController.index);

deliveriesRoutes.patch('/:id/status', deliveriesStatusController.update);

export { deliveriesRoutes };
