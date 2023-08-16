import express from 'express';
import twilio from 'twilio';
import config from './config/config.js';

const app = express();

const client = twilio(
    config.messaging.twilio.accountSid,
    config.messaging.twilio.authToken
);

app.get('/api/messages', async (req, res) => {
    await client.messages.create({
        from: config.messaging.twilio.number,
        to: '+999999999',
        body: 'Hello from Twilio!'
    });
    res.send('Message sent!');
});

app.get('/api/approval', async (req, res) => {
    await client.messages.create({
        from: config.messaging.twilio.number,
        to: req.query.number,
        body: `Gracias ${req.query.name}, tu solicitud del producto ${req.query.product} ha sido aprobada!`
    });
    res.send('Message sent!');
});

app.listen(config.port, () => {
    console.log(`Server started on port ${config.port}`);
});