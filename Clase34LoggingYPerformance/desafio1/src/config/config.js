import dotenv from 'dotenv';

dotenv.config()

export default {
    port: process.env.PORT,
    environment: process.env.NODE_ENV,
}
