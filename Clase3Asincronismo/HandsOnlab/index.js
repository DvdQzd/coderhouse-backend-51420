const suma = (numero1, numero2) => {
    return new Promise((resolve, reject) => {
        if (numero1 === 0 || numero2 === 0) reject('Operación innecesaria')

        const suma = numero1 + numero2;
        if (suma < 0) reject('La calculadora sólo debe devolver valores positivos')

        resolve(suma);
    })
}

const resta = (numero1, numero2) => {
    return new Promise((resolve, reject) => {
        if (numero1 === 0 || numero2 === 0) reject('Operación inválida');

        const resta = numero1 - numero2;
        if (resta < 0) reject('La calculadora sólo debe devolver valores positivos');
        resolve(resta);
    })
}

const multiplicacion = (numero1, numero2) => {
    return new Promise((resolve, reject) => {
        if (numero1 < 0 || numero2 < 0) reject('La calculadora sólo debe tener valores positivos');
        resolve(numero1 * numero2);
    })
}

const division = (numero1, numero2) => {
    return new Promise((resolve, reject) => {
        if (numero2 === 0) reject('No se puede dividir entre 0');
        resolve(numero1 / numero2);
    })
}

const calculos = async () => {
    try {
        let numero1 = 5;
        let numero2 = 3;
        let resultSuma = await suma(numero1, numero2);
        console.log(resultSuma);
        let resultResta = await resta(numero1, numero2);
        console.log(resultResta);
        let resultMultiplicacion = await multiplicacion(numero1, numero2);
        console.log(resultMultiplicacion);
        let resultDivision = await division(numero1, numero2);
        console.log(resultDivision);
    } catch (error) {
        console.log(error);
    }
}
calculos();

const calculosMejorado = async (numero1, numero2, operacion) => {
    const operaciones = {
        'suma': suma,
        'resta': resta,
        'multi': multiplicacion,
        'div': division
    };

    try{
        console.log(await operaciones[operacion](numero1, numero2));
    } catch (error) {
        console.log(error)
    }
}

calculosMejorado(5, 0, 'div')