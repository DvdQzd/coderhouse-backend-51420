import express from 'express';
import nodemailer from 'nodemailer';
import config from './config/config.js';

const app = express();
const PORT = config.port;

const mailConfig = {
    service: config.mailing.service,
    port: config.mailing.port,
    auth: {
        user: config.mailing.auth.user,
        pass: config.mailing.auth.pass,
    },
}

const transport = nodemailer.createTransport(mailConfig);

app.get('/mail-simple', async (req, res) => {
    const destination = req.query.destination;
    try {
        await transport.sendMail({
            from: `Coder test <${config.mailing.auth.user}>`,
            to: destination,
            subject: 'Test mail',
            html: '<h1>Test mail</h1>',
        });
        res.send('Mail sent');
    } catch (e) {
        res.json({ error: e });
    }
});

app.get('/mail-with-image', async (req, res) => {
    const destination = req.query.destination;

    try{
        await transport.sendMail({
            from: `Coder test <${config.mailing.auth.user}>`,
            to: destination,
            subject: 'Test mail with image',
            html: '<h1>Test mail</h1>',
            attachments: [{
                filename: 'image.jpg',
                path: 'https://i.pinimg.com/originals/a3/76/c3/a376c3e6ca7dd5784a57c6983b55143b.jpg',
                cid: 'image',
            }],
        });
        res.send('Mail sent');
    } catch (e) {
        res.json({ error: e });
    }
    
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});