import express from 'express';
import { addLogger } from './utils/logger.js';

const app = express();

app.use(addLogger);

app.get('/', (req, res) => {
    req.logger.warn('Alerta!')
    req.logger.error('Error!')
    req.logger.debug('Debug!')
    res.send({ message: 'Prueba de Logger!' });
});

app.listen(8080, () => {
    console.log('Servidor iniciado en el puerto 8080');
});