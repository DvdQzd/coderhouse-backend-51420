import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';

const app = express();
app.use(cookieParser('coderhouse'));
app.use(session({
    secret: 'coderhouse',
    resave: true,
    saveUninitialized: true
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


app.get('/setCookie', (req, res) => {
    res.cookie('coderCookie', 'esta es una cookie', { maxAge: 10000 }).send('Cookie seteada');
});

app.get('/setBanana', (req, res) => {
    res.cookie('signedBanana', 'esta es una banana', { signed: true }).send('Cookie seteada');
});

app.get('/setCookieInmortal', (req, res) => {
    res.cookie('inmortalCookie', 'esta es una cookie inmortal').send('Cookie inmortal seteada');
});

app.get('/getCookie', (req, res) => {
    res.send({ cookies: req.cookies, signedCookie: req.signedCookies });
});

app.get('/clearCookie', (req, res) => {
    res.clearCookie('inmortalCookie').send('Cookie borrada');
});

app.listen(8080, () => console.log('Servidor corriendo en el puerto 8080'));