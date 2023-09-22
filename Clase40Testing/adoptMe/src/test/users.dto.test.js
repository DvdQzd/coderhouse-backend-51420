import chai from 'chai';
import UserDTO from '../dto/User.dto.js';

const expect = chai.expect;

describe('Probando UserDTO', () => {
    it('deberia devolver un user con nombre completo, rol e email', () => {
        const input = {
            first_name: 'David',
            last_name: 'Gonzalez',
            role: 'admin',
            email: 'email@mail.com',
        };

        const resultadoEsperado = {
            name: 'David Gonzalez',
            role: 'admin',
            email: 'email@mail.com',
        };

        const resultado = UserDTO.getUserTokenFrom(input);

        expect(resultado).to.be.deep.equal(resultadoEsperado);
    });
});