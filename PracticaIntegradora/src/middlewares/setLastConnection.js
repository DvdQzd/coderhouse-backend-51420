import { UsersController } from '../controllers/users.controller.js';

const usersController = new UsersController();

const setLastConnection = async (req, res, next) => {
    try {
        const { email } = req.body;
        await usersController.setLastConnection(email);
        next();
    } catch (error) {
        console.log({ error })
        res.json({ error });
    }
};

export default setLastConnection;