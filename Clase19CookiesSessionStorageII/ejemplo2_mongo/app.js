import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import MongoStore from 'connect-mongo';

const app = express();

app.use(cookieParser('coderhouse'));
app.use(session({
    secret: 'coderhouse',
    resave: true,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: 'mongodb+srv://sessions_user:zDCGw0blunHKGxqV@cluster0.giykqux.mongodb.net/?retryWrites=true&w=majority',
        mongoOptions: { useNewUrlParser: true, useUnifiedTopology: true }
    }),
}));

app.get('/session', (req, res) => {
    if (!req.session.count) {
        req.session.count = 1;
        res.send('Bienvenido a la pagina');
        return;
    }

    req.session.count++;
    res.send(`Usted ha visitado la pagina ${req.session.count} veces`);
});

app.listen(8080, () => console.log('Servidor corriendo en el puerto 8080'));