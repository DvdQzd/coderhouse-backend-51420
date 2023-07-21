import express from 'express';
import dictionaryRouter from './routes/dictionary.router.js';

const app = express();

// app.get('/api/dictionary/:word([a-zA-Z]+)', (req, res) => {
//     const word = req.params.word;
//     res.send({ word });
// });

app.use('/api/dictionary', dictionaryRouter);

app.listen(8080, () => {
    console.log('Servidor escuchando en http://localhost:8080');
});