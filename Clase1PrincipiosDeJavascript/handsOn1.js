// ¿Cómo lo hacemos? Definiremos la función “mostrarLista”, la cual recibirá un arreglo con elementos como parámetro.

// Si la lista está vacía, devolver un mensaje indicando “Lista vacía”.
// Si la lista cuenta con elementos, mostrarlos 1 por 1 en consola. Finalizar el
//  proceso devolviendo la longitud de la lista (Utilizar template strings)
// Invocar la función con los casos de prueba.

// Se espera una duración de 10 minutos.


const mostrarLista = (elementos = []) => {
    if(elementos.length === 0) return "Lista Vacia";

    elementos.forEach(elemento => console.log(elemento));

    return `El largo del array es ${elementos.length}`;
}

console.log(mostrarLista([]))

console.log(mostrarLista([1, 2, 3]))

console.log(mostrarLista([2, 3, 4, 5,6, 3, 6 ]))

console.log(mostrarLista())
