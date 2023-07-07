import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import FileStore from 'session-file-store';

const app = express();

const filestore = new FileStore(session);

app.use(cookieParser('coderhouse'));
app.use(session({
    secret: 'coderhouse',
    resave: true,
    saveUninitialized: true,
    store: new filestore({ path: './sessions', ttl: 100, retries: 0 }),
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