const fs = require('fs')

// fs.readFile('./hola.txt', 'utf8', (error, contenido) => {
//     if(error){
//         console.log('hubo un error')
//         console.log(error.message)
//     } else {
//         console.log('lectura correcta!')
//         console.log(contenido)
//     }
// })

// fs.writeFile('./test_async.txt', 'texto de prueba async', error => {
//     if(error) {
//         console.log('hubo un error al escribir archivo')
//         console.log(error.message)
//     } else {
//         console.log('escritura correcta!')
//     }
// })

// console.log('cuando deberia ejecutar esta linea?')

fs.writeFile('./prueba_anidacion.txt', 'hola!!!!', error => {
    if(error) {
        console.log('hubo un error al escribir archivo')
        console.log(error.message)
    } else {
        console.log('escritura correcta!')
        fs.readFile('./prueba_anidacion.txt', 'utf8', (error, contenido) => {
            if(error){
                console.log('hubo un error de lectura')
                console.log(error.message)
            } else {
                console.log('lectura correcta!')
                console.log(contenido)
            }
        })
    }
})