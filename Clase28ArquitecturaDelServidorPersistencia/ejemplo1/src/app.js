import express from 'express';
import contactsRouter from './routers/contacts.router.js';
import mongoose from 'mongoose';

const app = express();

mongoose.connect('mongodb://localhost:27017/ecommerce', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/contacts', contactsRouter);

app.listen(8080, () => {
    console.log('Servidor escuchando en http://localhost:8080');
});