import express from 'express';
import { fork } from 'child_process';

const app = express();

app.get('/suma', (req, res) => {
    const child = fork('./calculo.js');
    child.send('inicia calculo!')
    child.on('message', (m) => {
        res.send({m})
    })
})

// function operacionCompleja() {
//     let result = 0;
//     for(let i = 0; i < 5e9; i++){
//         result += i;
//     }
//     return result;
// }

app.listen(8080);