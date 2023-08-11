import express from 'express';
import config from './config/config.js';
import userRouter from './routes/user.router.js';
import businessRouter from './routes/business.router.js';
import ordersRouter from './routes/orders.router.js';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const PORT = config.port;
const DB_HOST = config.dbHost;
const DB_USER = config.dbUser;
const DB_PASS = config.dbPass;

app.use(cors({
    origin: 'http://127.0.0.1:5500',
    methods: ['GET', 'POST', 'PUT'],
}))

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/?retryWrites=true&w=majority`);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/user', userRouter);
app.use('/api/business', businessRouter);
app.use('/api/order', ordersRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
