const suma = (...numeros) => {
    if (numeros.length == 0) return 0;
    if (!numeros.every((n) => typeof n == 'number')) return null;
    return numeros.reduce((acum, n) => acum + n);
};

let testPasados = 0;
const testTotales = 4;
// SI a o b no es un numero retorna null
console.log('Test 01: Si los parametros enviados no son numeros, debe retornar null');
const test01 = suma('a', 2);
if (test01 !== null) {
    console.error(`Resultado: "FAIL" ya que el tipo de dato de la salida fue ${typeof test01} y se buscaba null`);
} else {
    console.log('Resultado: "SUCCESS"');
    testPasados++;
}

//Si no se envian parametros la funcion devuelve 0
console.log('Test 02: Si no se envian parametros la funcion devuelve 0');
const test02 = suma();
if (test02 != 0) {
    console.error(`Resultado: "FAIL" ya que la salida fue ${test02} y se buscaba 0`);
} else {
    console.log('Resultado: "SUCCESS"');
    testPasados++;
}

//Si envio 2 numeros debe sumarlos bien
console.log('Test 03: Si envio 2 numeros debe sumarlos bien');
const test03 = suma(2, 3);
if (test03 != 5) {
    console.error(`Resultado: "FAIL" ya que la salida fue ${test03} y se buscaba 5`);
} else {
    console.log('Resultado: "SUCCESS"');
    testPasados++;
}

//La funcion debe poder sumar X cantidad de numeros
console.log('Test 04: La funcion debe poder sumar X cantidad de numeros');
const test04 = suma(2, 3, 4, 5, 6, 7, 8, 9, 10);
if (test04 != 54) {
    console.error(`Resultado: "FAIL" ya que la salida fue ${test04} y se buscaba 54`);
} else {
    console.log('Resultado: "SUCCESS"');
    testPasados++;
}

console.log('El total de tests pasados fue de: ' + testPasados + '/' + testTotales + ' tests');
