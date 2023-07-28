import { Command } from 'commander';
import express from 'express';
import dotenv from 'dotenv';

const program = new Command();

program
    .option('--mode <mode>', 'Modo', 'development')

program.parse();

const options = program.opts();

dotenv.config({
    path: options.mode === 'production' ? '.env.production' : '.env.development'
})

const app = express();

app.listen(process.env.PORT, () => {
    console.log(`Servidor inicializado en el puerto ${process.env.PORT}`)
});




