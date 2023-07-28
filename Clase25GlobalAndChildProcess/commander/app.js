import { Command } from 'commander';

const program = new Command();

program
    .option('-p <port>', 'Puerto de la app', 8080)
    .option('--port <port>', 'puerto', 8080)
    .option('-d <database>', 'database a usar', 'MONGO')
    .requiredOption('-u <user>', 'usuario', 'no se ha declarado usuario')
    .option('--role <role>', 'rol del usuario', 'USER')

program.parse();

console.log(program.opts());
console.log('restantes: ', program.args)