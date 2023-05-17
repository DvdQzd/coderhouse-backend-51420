import express from 'express';
import { ProductManager } from './productManager';

const app = express();

app.get('/unparam/:nombre', (req, res) => {
    console.log(req.params.nombre)
    res.send(`Hola, ${req.params.nombre}`)
});

app.get('/dosparams/:nombre/:apellido', (req, res) => {
    console.log(req.params)
    res.send(`Hola, ${req.params.nombre} ${req.params.apellido}`)
});


app.get('/prueba_queries', (req, res) => {
    console.log(req.query)
    res.send(req.query);
});

app.listen(8080, () => {
    console.log('servidor escuchando en el puerto 8080')
})