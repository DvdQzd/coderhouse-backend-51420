import express from 'express';
import { fork } from 'child_process';

const app = express();

let visitorsCount = 0;

app.get('/', (req, res) => {
    visitorsCount++;
    res.send(`Visitantes: ${visitorsCount}`)
});

app.get('/calculo-bloq', (req, res) => {
   let suma = 0;
    for(let i = 0; i < 5e9; i++){
        suma += i;
    } 
    res.send(`Suma: ${suma}`)
});

app.get('/calculo-no-bloq', (req, res) => {
    const child = fork('./calculo.js');
    child.send('inicia calculo!')
    child.on('message', (m) => {
        res.send({m})
    })
});