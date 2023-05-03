const objetoEjemplo = {
    nombre: "David",
    apellido: "Quezada",
    pais: "Chile",
    edad: 34
}

const nuevoUsuario = {
    id: 1,
    ...objetoEjemplo
};

console.log({objetoEjemplo})
console.log({nuevoUsuario})

// const numeros = [1, 2, 3, 4, 5];
// const mayor = Math.max(...numeros)
// console.log(mayor)

const { nombre, apellido, ...edadPorPais } = objetoEjemplo;

console.log({ nombre })
console.log({ apellido })
console.log({ edadPorPais })

const arrayX = [ "Ignacio", "Peralta", 37, 89 ];

const [ nuevoNombre, nuevoAPellido, ...resto ] = arrayX;

console.log({ nuevoNombre })
console.log({ nuevoAPellido })
console.log({ resto })