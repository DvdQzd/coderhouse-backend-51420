import { default as token } from 'jsonwebtoken';
import nodemailer from 'nodemailer';
import config from '../config/config.js';

const PRIVATE_KEY = "CoderKeyFeliz";

const mailConfig = {
    service: config.mailing.service,
    port: config.mailing.port,
    auth: {
        user: config.mailing.auth.user,
        pass: config.mailing.auth.pass,
    },
}

const transport = nodemailer.createTransport(mailConfig);

export class UsersController {
    async sendEmail(email){
        try {
            const jwt = this.createJwt(email)
            transport.sendMail({
                from: `Coder <${config.mailing.auth.user}>`,
                to: email,
                subject: 'Recuperar pass',
                html: `<h1>Para recuperar tu pass, haz click en el boton de abajo</h1>
                        <hr>
                        <a href="http://${config.baseUrl}:8080/api/session/restore-pass/${jwt}">CLICK AQUI</a>
                `,
            });
        } catch (e) {
            res.json({ error: e });
        }
    }

    createJwt(email){
        return token.sign({ email }, PRIVATE_KEY, { expiresIn: '1h' })
    }
}