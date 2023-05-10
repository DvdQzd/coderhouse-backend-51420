// fs.writeFile('./prueba_anidacion.txt', 'hola!!!!', error => {
//     if(error) {
//         console.log('hubo un error al escribir archivo')
//         console.log(error.message)
//     } else {
//         console.log('escritura correcta!')
//         fs.readFile('./prueba_anidacion.txt', 'utf8', (error, contenido) => {
//             if(error){
//                 console.log('hubo un error de lectura')
//                 console.log(error.message)
//             } else {
//                 console.log('lectura correcta!')
//                 console.log(contenido)
//             }
//         })
//     }
// })

const fs = require('fs');

const operaciones = async () => {
    const ruta = './new_promesas.txt';
    // escribir
    try {
        await fs.promises.writeFile(ruta, 'texto hecho con promesas');
    } catch (e) {
        throw new Error('hubo un error de escritura')
    }
    
    // leer
    try {
        const contenido = await fs.promises.readFile(ruta, 'utf8')
        console.log(contenido)
    } catch (e){
        throw new Error('hubo un error de lectura')
    }

}

operaciones();