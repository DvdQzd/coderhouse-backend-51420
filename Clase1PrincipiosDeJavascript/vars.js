// let i = 0;
// function foo(){
//     i = 1;
//     let j = 2;
//     if(true){
//         console.log('i', i);
//         console.log('j', j);
//     }
// }
// console.log('i', i);

// foo();

const i = [1, 2, 3, 4];

// console.log({i});

i.push('banana');

// console.log({i});

const p = { id: 1, nombre: "David" }
// console.log({p});

p.nombre = "Juan";

// console.log({p});

// const x = [1, 2, 3, 4];

// x = "pato";

console.log({i, p})


const arrayDeNumeros = [1, 2, 3, 4, 3, 4, 5, 6, 7, 8.567];

arrayDeNumeros[0] = 'apio';
arrayDeNumeros[arrayDeNumeros.length - 1] = 'burro';

console.log({arrayDeNumeros})