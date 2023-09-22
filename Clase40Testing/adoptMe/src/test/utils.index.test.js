import chai from 'chai';
import { createHash, passwordValidation } from '../utils/index.js';

const expect = chai.expect;

describe('Probando utils', () => {
    it('deberia crear un hash', async () => {
        const input = '123456';
        const resultadoEsperado = 'string';
        const resultado = await createHash(input);
        expect(typeof resultado).to.be.a(resultadoEsperado);
    });

    it('deberia validar un password', async () => {
        const input = '123456';
        const hash = await createHash(input);
        const resultadoEsperado = true;
        const resultado = await passwordValidation({ password: hash }, input);
        expect(resultado).to.be.equal(resultadoEsperado);
    });

    it('deberia fallar si el password es incorrecto', async () => {
        const input = '123456';
        const hash = await createHash(input);
        const resultadoEsperado = false;
        const resultado = await passwordValidation({ password: hash }, '1234567');
        expect(resultado).to.be.equal(resultadoEsperado);
    });
});