import { Router } from 'express';

const router = Router();

const pets = [];

router.post('/', (req, res) => {
    const pet = req.body;
    pets.push(pet);
    res.send({ pet });
});

router.get('/:pet([A-Za-z%20]+)', (req, res) => {
    const pet = pets.find(pet => pet.name === req.pet);
    res.send({ pet });
});

router.put('/:pet([A-Za-z%20]+)', (req, res) => {
    const pet = pets.find(pet => pet.name === req.pet);
    pet.adopted = true;
    res.send({ pet });
});

router.param('pet', (req, res, next, pet) => {
    req.pet = pet;
    next();
});

export default router;