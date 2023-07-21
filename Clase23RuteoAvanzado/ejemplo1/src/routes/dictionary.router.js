import { Router } from 'express';

const router = Router();

// router.get('/:word([a-zA-Z]+)', (req, res) => {
//     const word = req.params.word;
//     res.send({ word });
// });

router.get('/:word([a-zA-Z]+)', (req, res) => {
    res.send({ word: req.word });
});

router.param('word', (req, res, next, word) => {
    req.word = word;
    next();
});

router.get('*', (req, res) => {
    res.status(404).send({ error: 'Cannot get the specified word' });
});

export default router;