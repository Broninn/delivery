import { Router } from 'express';

import { DeliveriesController } from '@/controllers/deliveries-controller';

import { ensureAuthenticated } from '@/middlewares/ensure-authenticated';

import { verifyUserAuth } from '@/middlewares/verifyUserAuth';

const deliveriesRoutes = Router();
const deliveriesController = new DeliveriesController();

deliveriesRoutes.use(ensureAuthenticated, verifyUserAuth(['sale']));
deliveriesRoutes.post('/', deliveriesController.create);

export { deliveriesRoutes };
