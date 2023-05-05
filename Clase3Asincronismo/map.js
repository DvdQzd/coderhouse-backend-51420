const numeros = [1, 2, 3, 4, 5];

// resultado esperado [2, 4, 6, 8, 10]

// sin map

const output = [];

for(let i = 0; i < numeros.length; i++){
    output[i] = numeros[i] * 2;
}

console.log({ outputSinMap: output })

// con map

console.log({ outputConMap: numeros.map(numero => numero * 2) });

function funcionDefinida (numero) {
    return numero * 2;
}

console.log({ outputConMapYFuncionDefinida: numeros.map(funcionDefinida) });