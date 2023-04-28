
// tipos primitivos

let a = 1; // number
let b = "texto"; // string

let a_copia = a; // la copia es por valor
let b_copia = b;

a_copia = 2;
b_copia = "hola";

console.log('a_copia', a_copia);
console.log('a', a);

console.log('b_copia', b_copia);
console.log('b', b);

// tipos objeto

let c = { nombre: "pepe" }; // object
let d = [1, 2, 3]; // array

let c_referencia = c; // la copia es por referencia
let d_referencia = d;

c_referencia.nombre = "juan";
d_referencia.push(4);

console.log('c_referencia', c_referencia);
console.log('c', c);

console.log('d_referencia', d_referencia);
console.log('d', d);

/*********************/


let nombre = "pepe";
let edad = 20;
let precio = 10.5;
let series = ["serie1", "serie2"];
let peliculas = ["pelicula1", "pelicula2"];

console.log('nombre', nombre);
console.log('edad', edad);
console.log('precio', precio);
console.log('series', series);
console.log('peliculas', peliculas);

edad++;

series.push("serie3");

console.log('nombre', nombre);
console.log('edad', edad);
console.log('precio', precio);
console.log('series', series);
console.log('peliculas', peliculas);

