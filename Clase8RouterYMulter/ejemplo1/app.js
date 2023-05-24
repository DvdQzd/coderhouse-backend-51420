const express = require('express');

const app = express();

app.use('/static', express.static(__dirname + '/public'));


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use((req, res, next) => {
    console.log('Middleware 1');
    next();
});

app.get('/hola', (req, res) => {
    res.send('Hello!');
});

function mid1(req, res, next) {
    console.log('mid 1');
    next();
}

function mid2(req, res, next) {
    console.log('mid 2');
}

function mid3(req, res, next) {
    console.log('mid 3');
    next();
}

app.get('/chau', mid1, mid3, (req, res) => {
    res.send('Chau!');
});

app.listen(8080, () => console.log(__dirname + '/public'));