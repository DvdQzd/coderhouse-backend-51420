import { Router } from 'express';
import userModel from '../models/Users.model.js';
import { createHash } from '../utils.js';
import passport from 'passport';


const router = Router();

router.post('/register', passport.authenticate('register', { failureRedirect: '/failregister' }), async (req, res) => {
    res.send({ status: "success", message: "User registered" });
})

router.get('/failregister', (req, res) => {
    res.status(400).send({ status: "error", error: "Registry fail" });
});

router.post('/login', passport.authenticate('login', { failureRedirect: '/faillogin'}), async (req, res) => {
    if (!req.user) return res.status(400).send({ status: "error", error: "Incorrect credentials" });

    
    req.session.user = {
        name: `${req.user.first_name} ${req.user.last_name}`,
        email: req.user.email,
        age: req.user.age
    }
    res.send({ status: "success", payload: req.session.user, message: "¡Primer logueo realizado! :)" });
})

router.get('/faillogin', (req, res) => {
    res.status(400).send({ status: "error", error: "Login fail" });
});

router.put('/restartPassword', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send({
            status: "error",
            error: "Incomplete Values",
        });
    }
    
    const user = await userModel.findOne({ email });
    
    if (!user) return res.status(404).send({ status: "error", error: "Not user found" });
    
    const newHashedPassword = createHash(password);
    
    await userModel.updateOne({ _id: user._id }, { $set: { password: newHashedPassword } });
    
    res.send({ status: "success", message: "Contraseña restaurada" });
})

export default router;