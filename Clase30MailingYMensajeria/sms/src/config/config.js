import dotenv from 'dotenv';

dotenv.config()

export default {
    port: process.env.PORT,
    messaging: {
        twilio: {
            accountSid: process.env.TWILIO_ACCOUNT_SID,
            authToken: process.env.TWILIO_AUTH_TOKEN,
            number: process.env.TWILIO_NUMBER,
        },
    }
}
