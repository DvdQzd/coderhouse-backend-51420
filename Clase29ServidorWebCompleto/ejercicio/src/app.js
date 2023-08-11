import express from 'express';
import config from './config/config.js';
import userRouter from './routes/user.router.js';
import businessRouter from './routes/business.router.js';
import ordersRouter from './routes/orders.router.js';

const app = express();
const PORT = config.port;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/user', userRouter);
app.use('/api/business', businessRouter);
app.use('/api/order', ordersRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
