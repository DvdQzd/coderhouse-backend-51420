import { Router } from 'express';
import { getAllToys, getToyById, createToy, updateToy, deleteToy } from '../controllers/toys.controller.js';

const router = Router();

router.get('/', getAllToys);
router.get('/:id', getToyById);
router.post('/', createToy);
router.put('/:id', updateToy);
router.delete('/:id', deleteToy);

export default router;