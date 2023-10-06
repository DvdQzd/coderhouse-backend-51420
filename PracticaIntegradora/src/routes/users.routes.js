import { Router } from 'express';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import { UsersController } from '../controllers/users.controller.js';
import { validarToken } from '../utils/utils.js';
import setLastConnection from '../middlewares/setLastConnection.js';
import uploader from '../utils/multer.js';

const router = Router();

router.use(cookieParser());

const usersController = new UsersController();

router.post(
    '/login',
    passport.authenticate('login', { session: false }),
    setLastConnection,
    (req, res) => {
        res.cookie('coderCookieToken', req.user, { httpOnly: true }).send({ status: "success", message: "cookie set" })
});

router.get('/logout', setLastConnection, (req, res) => {
    res.clearCookie('coderCookieToken').send({ status: "success", message: "cookie deleted" })
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

router.get('/premium/:uid', async (req, res) => {
    try {
        const { uid } = req.params;
        const user = await usersController.updateUserRole(uid);
        res.send({ message: 'User premium updated!', user });
    } catch (e) {
        res.json({ error: e.message });
    }
});

router.post('/:uid/documents', uploader('documents').array('documents'), async (req, res) => {
    try {
        const { uid } = req.params;
        const user = await usersController.updateUserDocuments(uid, req.files);
        res.send({ message: 'User documents updated!', user });
    } catch (e) {
        res.json({ error: e.message });
    }
});

export default router;