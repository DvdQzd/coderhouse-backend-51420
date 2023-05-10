const fs = require('fs');
const contenido = fs.readFileSync('./hola.txt', 'utf8');
console.log(contenido)

// fs.mkdirSync('./despedidas')
fs.writeFileSync('./despedidas/adios.txt', 'sayonara coderhouse')

fs.appendFileSync('./hola.txt', '\nnuevo texto')

fs.unlinkSync('./despedidas/adios.txt')

console.log(fs.existsSync('./hola.txt'));



