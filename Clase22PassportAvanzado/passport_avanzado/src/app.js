import express from 'express';
import passport from 'passport';
import initializePassport from './config/passport.config.js';
import cookieParser from 'cookie-parser';
import { authorization, passportCall } from './utils.js';

const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use(cookieParser());
initializePassport();
app.use(passport.initialize());

app.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.send(req.user);
});

app.get('/current2', passportCall('jwt'), authorization('user'), (req, res) => {
    res.send(req.user);
});

app.listen(8080, () => console.log('Listening on 8080'));