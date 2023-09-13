import dotenv from 'dotenv';

dotenv.config()

export default {
    port: process.env.PORT,
    mailing: {
        service: process.env.MAIL_SERVICE,
        port: process.env.MAIL_PORT,
        auth: {
            user: process.env.MAIL_AUTH_USER,
            pass: process.env.MAIL_AUTH_PASS,
        },
    },
    baseUrl: 'localhost'
}
