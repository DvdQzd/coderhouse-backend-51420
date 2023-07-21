import Router from "./router.js";
import jwt from 'jsonwebtoken';

export default class SessionsRouter extends Router {
    init() {
        this.post('/login', ["PUBLIC"], (req, res) => {
            const user = {
                email: req.body.email,
                role: 'user_admin'
            }
            const token = jwt.sign(user, 'secret');
            res.sendSuccess({ token });
        })
    }
}