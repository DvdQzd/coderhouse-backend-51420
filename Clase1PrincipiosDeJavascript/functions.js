function sumar(a, b) {
    const resultado = a + b;
    return resultado;
}

console.log(sumar(2, 3));

// arrow functions

const sumarFlecha = (a, b) => a + b;

const suma = sumarFlecha(2, 5);

console.log(sumarFlecha(2, 7));

sumarFlecha(2, 3);

const imprimirAlgo = algo => console.log({algo});

imprimirAlgo('hello there')