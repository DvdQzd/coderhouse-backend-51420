import express from 'express';
import { generateUserErrorInfo } from './info.js';
import CustomError from './CustomError.js';
import EErrors from './enum.js';
import errorHandler from './index.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const users = [];

app.get('/', (req, res) => {
    res.send({status: 'success', payload: users});
});

app.post('/', (req, res) => {
    const {first_name, last_name, email} = req.body;
    if(!first_name || !last_name || !email){
        console.log('error')
        CustomError.createError({
            name: 'user Creation Error',
            cause: generateUserErrorInfo({first_name, last_name, email}),
            code: EErrors.INVALID_TYPES_ERROR,
            message: 'Error trying to create a new user'
        });
    }

    // si todo sale bien, crear user y agregarlo al array
    const newUser = {first_name, last_name, email};
    users.push(newUser);
    res.send({status: 'success', payload: newUser});
});

app.listen(8080, () => console.log('server ok'));

app.use(errorHandler); // este middleware debe ir al final de todo, lol.