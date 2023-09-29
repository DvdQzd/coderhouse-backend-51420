import chai from 'chai';
import supertest from 'supertest';
import mongoose from 'mongoose';

const expect = chai.expect;
const requester = supertest('http://localhost:8080');

mongoose.connect(`mongodb+srv://david:aduuIf3UmBGcI3fe@cluster0.giykqux.mongodb.net/?retryWrites=true&w=majority`)

describe('Testing Avanzado', () => {
    let cookie;

    before(async () => {
        mongoose.connection.collections.users.drop();
    });

    it('Se debe registrar correctamente un usuario', async function () {

        const mockUser = {
            first_name: 'David',
            last_name: 'Gonzalez',
            email: 'dgonzalez@gmail.com',
            password: '12345678',
        };

        const { _body } = await requester.post('/api/sessions/register').send(mockUser);

        expect(_body.payload).to.be.ok;
    });

    it('Debe loguear correctamente al usuario y devolver una cookie', async function () {
        const mockUser = {
            email: 'dgonzalez@gmail.com',
            password: '12345678',
        };

        const result = await requester.post('/api/sessions/login').send(mockUser);
        const cookieResult = result.headers['set-cookie'][0];

        cookie = {
            name: cookieResult.split('=')[0],
            value: cookieResult.split('=')[1],
        };
        expect(cookie.name).to.be.ok.and.eql('coderCookie');
        expect(cookie.value).to.be.ok.and.not.eql('');

        // done();
    });

    after(async () => {
        mongoose.connection.collections.users.drop();
    });

});