import Router from "./router.js";

export default class UsersRouter extends Router {
    init() {
        this.get('/', ['PUBLIC'], (req, res) => {
            res.sendSuccess('Hola, Coders!');
        })

        this.get('/currentUser', ['USER', 'USER_PREMIUM', 'USER_ADMIN'], (req, res) => {
            res.sendSuccess(req.user);
        });
    }
}