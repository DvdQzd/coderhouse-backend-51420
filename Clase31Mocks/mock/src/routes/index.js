const { Router } = require('express');

const router = Router();

router.use('/users', require('./usersRouter'));

module.exports = router;
