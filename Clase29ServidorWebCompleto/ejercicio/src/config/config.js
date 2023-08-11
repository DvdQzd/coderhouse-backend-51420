import dotenv from 'dotenv';

dotenv.config()

export default {
    port: process.env.PORT,
    dbHost: process.env.DB_HOST,
    dbPass: process.env.DB_PASS,
}