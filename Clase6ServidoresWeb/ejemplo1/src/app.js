import express from 'express';

const app = express();

app.get('/saludo', (req, res) => {
    res.send('Hola mundo desde express!')
});

app.listen(8080, () => {
    console.log('servidor escuchando en el puerto 8080')
})