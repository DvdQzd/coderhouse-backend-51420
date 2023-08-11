import dotenv from 'dotenv';

dotenv.config()

export default {
    port: process.env.PORT,
    dbHost: process.env.DB_HOST,
    dbUser: process.env.DB_USER,
    dbPass: process.env.DB_PASS,
}