import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';

const app = express();

app.engine('hbs', handlebars.engine());
app.set('views', `${__dirname}/views`);
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('index', { name: 'David', title: 'Coderhouse' });
});

app.listen(8080, () => console.log('Server started on port 8080'));