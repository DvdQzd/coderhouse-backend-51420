import Router from "./router.js";

export default class UsersRouter extends Router {
    init() {
        this.get('/', (req, res) => {
            res.sendTeapot('Hola, Coders!');
        })

        this.post('/', (req, res) => {
            res.sendSuccess('Hola, Coders!');
        })
    }
}