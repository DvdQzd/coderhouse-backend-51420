import { Router } from 'express';
import { getOrders, getOrderById, createOrder, resolveOrder } from '../controllers/orders.controller.js';

const router = Router();

router.get('/', getOrders);
router.get('/:id', getOrderById);
router.post('/', createOrder);
router.post('/:id/resolve', resolveOrder);

export default router;