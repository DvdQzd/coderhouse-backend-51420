console.log('Carpeta en la cual estamos parados: ', process.cwd());
console.log('Sistema operativo: ', process.platform);
console.log('Process ID: ', process.pid);
console.log('Memory Usage: ', process.memoryUsage());
console.log('Version de Node: ', process.version);

console.log('Argumentos que se pasaron al ejecutar el archivo: ', process.argv);

console.log({ argumentos: process.argv.slice(2) })

const PORT = Number(process.argv.slice(2)[0]);

console.log({ PORT })