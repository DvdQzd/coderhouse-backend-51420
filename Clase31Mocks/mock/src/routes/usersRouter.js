const { Router } = require('express');
const generateUser = require('../utils/generateUser');

const usersRouter = Router();

usersRouter.get('/', (req, res) => {
    const { limit = 10 } = req.query;

    const users = [];
    for (let i = 0; i < limit; i++) {
        users.push(generateUser());
    }

    res.status(200).json({ status: 'success', data: users });
});

module.exports = usersRouter;
