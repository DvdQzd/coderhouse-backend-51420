const login = (user, password) => {
    if (!user) return 'No se ha proporcionado un usuario';
    if (!password) return 'No se ha proporcionado un password';

    if (password != 123) return 'Contraseña incorrecta';
    if (user != 'coderUser') return 'Credenciales incorrectas';

    if (user == 'coderUser' && password == 123) {
        return 'logueado';
    }
};

let testPasados = 0;
const testTotales = 5;
// SI no se envia una password debe devolver "No se ha proporcionado un password"
console.log('Test 01: SI no se envia una password debe devolver "No se ha proporcionado un password"');
const test01 = login('pepe');
if (test01 !== 'No se ha proporcionado un password') {
    console.error(`Resultado: "FAIL" ya que la salida fue ${test01} y se buscaba "No se ha proporcionado un password"`);
} else {
    console.log('Resultado: "SUCCESS"');
    testPasados++;
}

//Si se pasa un usuario vacío, la función debe retornar  (“No se ha proporcionado un usuario”)
console.log('Test 02: Si se pasa un usuario vacío, la función debe retornar  (“No se ha proporcionado un usuario”)');
const test02 = login();
if (test02 !== 'No se ha proporcionado un usuario') {
    console.error(`Resultado: "FAIL" ya que la salida fue ${test02} y se buscaba "No se ha proporcionado un usuario"`);
} else {
    console.log('Resultado: "SUCCESS"');
    testPasados++;
}

//Si se pasa un password incorrecto, retornar (“Contraseña incorrecta”)
console.log('Test 03: Si se pasa un password incorrecto, retornar (“Contraseña incorrecta”)');
const test03 = login('coderUser', 12345);
if (test03 != 'Contraseña incorrecta') {
    console.error(`Resultado: "FAIL" ya que la salida fue ${test03} y se buscaba "Contraseña incorrecta`);
} else {
    console.log('Resultado: "SUCCESS"');
    testPasados++;
}

//Si se pasa un usuario incorrecto, retornar (“Credenciales incorrectas”)
console.log('Test 04: Si se pasa un usuario incorrecto, retornar (“Credenciales incorrectas”)');
const test04 = login('otraCosa', 123);
if (test04 != 'Credenciales incorrectas') {
    console.error(`Resultado: "FAIL" ya que la salida fue ${test04} y se buscaba "Credenciales incorrectas"`);
} else {
    console.log('Resultado: "SUCCESS"');
    testPasados++;
}

//Si se pasa un usuario incorrecto, retornar (“Credenciales incorrectas”)
console.log('Test 05: Si  el usuario y contraseña coinciden, consologuear (“logueado”)');
const test05 = login('coderUser', 123);
if (test05 != 'logueado') {
    console.error(`Resultado: "FAIL" ya que la salida fue ${test04} y se buscaba "logueado"`);
} else {
    console.log('Resultado: "SUCCESS"');
    testPasados++;
}

console.log('El total de tests pasados fue de: ' + testPasados + '/' + testTotales + ' tests');
