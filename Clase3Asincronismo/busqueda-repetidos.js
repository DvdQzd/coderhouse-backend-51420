const elementos = [
    {
        code: 1,
        nombre: 'papa'
    },
    {
        code: 2,
        nombre: 'cebolla'
    }
];

const nuevoElemento = {
    code: 8,
    nombre: 'platano'
}

// validar que code 3 no exista

const a = elementos.find((e) => e.code === nuevoElemento.code);

if (a) {
    console.log('elemento ya existe')
} else {
    elementos.push(nuevoElemento);
    console.log('elemento agregado')
}