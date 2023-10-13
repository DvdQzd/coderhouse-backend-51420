import express from 'express';
import cors from 'cors';
import paymentRouter from './routes/payments.router.js';


const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/payments', paymentRouter);
app.listen(8080, () => console.log('Server running on port 8080'));