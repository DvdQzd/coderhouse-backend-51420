import express from "express";
import UsersRouter from "./routes/users.router.js";

const app = express();

const usersRouter = new UsersRouter();
app.use('/api/users', usersRouter.getRouter());

app.listen(8080, () => {
    console.log('Servidor escuchando en http://localhost:8080');
});