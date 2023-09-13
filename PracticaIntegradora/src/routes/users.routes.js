import { Router } from 'express';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import { UsersController } from '../controllers/users.controller.js';
import { validarToken } from '../utils/utils.js';

const router = Router();

router.use(cookieParser());

const usersController = new UsersController();

router.post('/login', passport.authenticate('login', { session: false }), (req, res) => {
    res.cookie('coderCookieToken', req.user, { httpOnly: true }).send({ status: "success", message: "cookie set" })
});

router.post('/register', passport.authenticate('register', { session: false }), (req, res) => {
    res.send(req.user);
});

router.get('/current', passport.authenticate('current', { session: false }), (req, res) => {
    res.send(req.user.user);
});

router.get('/send-recover-mail/:email', async (req, res) => {
    await usersController.sendEmail(req.params.email);
    res.send({ message: 'Mail sent!' })
});

router.get('/restore-pass/:token', validarToken, (req, res) => {
    res.render('restore-pass', { token: req.params.token });
})

router.post('/pass-change/:token', validarToken, async (req, res) => {

    const { password } = req.body;
    const { email } = req;
    const hashedPassword = createHash(password);
    const user = { email, password: hashedPassword };
    await usersController.updateUser(user); // TODO: crear metodo en el controller
    res.send({ message: 'Password changed!' });
});

export default router;