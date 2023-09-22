import Assert from 'assert';
import { factorial } from '../factorial.js';

const assert = Assert;

describe('Probando factorial', () => {
    it('deberia calcular factorial de un numero', () => {
        const inputNum = 5;
        const resultadoEsperado = 120;
        const resultado = factorial(inputNum);
        assert.equal(resultado, resultadoEsperado);
    });
})