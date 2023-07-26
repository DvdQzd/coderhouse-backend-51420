import { Router } from 'express';
import passport from 'passport';
import cookieParser from 'cookie-parser';

const router = Router();

router.use(cookieParser());

router.post('/login', passport.authenticate('login', { session: false }), (req, res) => {
    res.cookie('coderCookieToken', req.user, { httpOnly: true }).send({ status: "success", message: "cookie set" })
});

router.post('/register', passport.authenticate('register', { session: false }), (req, res) => {
    res.send(req.user);
});

router.get('/current', passport.authenticate('current', { session: false }), (req, res) => {
    res.send(req.user.user);
});

export default router;