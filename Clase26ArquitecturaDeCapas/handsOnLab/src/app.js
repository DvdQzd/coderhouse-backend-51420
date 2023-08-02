import express from 'express';
import env from './config/environment.js';
import toysRouter from './routes/toys.router.js';

const app = express();
const PORT = env.port;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/toys', toysRouter);

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`);
});