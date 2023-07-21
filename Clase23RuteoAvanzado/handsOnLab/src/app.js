import express from "express";
import UsersRouter from "./routes/users.router.js";
import SessionsRouter from "./routes/session.router.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const usersRouter = new UsersRouter();
const sessionsRouter = new SessionsRouter();

app.use('/api/users', usersRouter.getRouter());
app.use('/api/sessions', sessionsRouter.getRouter());

app.listen(8080, () => {
    console.log('Servidor escuchando en http://localhost:8080');
});