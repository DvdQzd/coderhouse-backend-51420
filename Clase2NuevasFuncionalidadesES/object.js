const objetoEjemplo = {
    id: 1,
    nombre: "David",
    apellido: "Quezada",
    pais: "Chile",
    89: "hola",
    objeto: { hello: "there" }
}

console.log(Object.keys(objetoEjemplo))
console.log(Object.values(objetoEjemplo))
console.log(Object.entries(objetoEjemplo))

const notas = {
    David: 10,
    Andres: 8,
    Carolina: 9,
    Pedro: 6
}

let suma = 0;

Object.keys(notas).forEach(alumno => {
    suma += notas[alumno]
})

const promedio = suma / Object.keys(notas).length;

console.log({promedio})

const promedioOtraVez = Object.values(notas).reduce((inicial, actual) => inicial + actual, 0) / Object.values(notas).length;

console.log({promedioOtraVez})