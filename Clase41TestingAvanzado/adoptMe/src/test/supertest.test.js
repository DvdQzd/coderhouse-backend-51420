import chai from 'chai';
import supertest from 'supertest';

const expect = chai.expect;
const requester = supertest('http://localhost:8080');

describe('Testing de la API',() => {

    beforeEach(async () => {
        // Antes de cada test, borramos todos los usuarios
    });

    describe('Test de mascotas',() => {
        it('El endpoint POST /api/pets debe crear una mascota correctamente', async () => {
            const petMock = {
                name: 'Pepito',
                specie: 'perro',
                birthDate: '2020-01-01',
            };
            const { statusCode, ok, _body } = await requester.post('/api/pets').send(petMock);
            expect(statusCode).to.equal(201);
            expect(ok).to.equal(true);
            expect(_body.payload).to.have.property('_id');
        });

        it('El endpoint POST /api/pets debe crear una mascota con la propiedad adopted en false', async () => {
            const petMock = {
                name: 'Pepito',
                specie: 'perro',
                birthDate: '2020-01-01',
            };
            const { statusCode, ok, _body } = await requester.post('/api/pets').send(petMock);
            expect(statusCode).to.equal(201);
            expect(ok).to.equal(true);
            expect(_body.payload).to.have.property('adopted');
            expect(_body.payload.adopted).to.equal(false);
        });

        it('El endpoint POST /api/pets debe responder con un status 400 si no se envía el nombre', async () => {
            const petMock = {
                specie: 'perro',
                birthDate: '2020-01-01',
            };
            const { statusCode, ok } = await requester.post('/api/pets').send(petMock);
            expect(statusCode).to.equal(400);
            expect(ok).to.equal(false);
        });

        it('El endpoint GET /api/pets debe responder con un status 200 y un payload de tipo arreglo', async () => {
            const { statusCode, ok, _body } = await requester.get('/api/pets');
            expect(statusCode).to.equal(200);
            expect(ok).to.equal(true);
            expect(_body).to.have.property('payload');
            expect(_body.payload).to.be.an('array');
        });

        it('El endpoint PUT /api/pets/:pid debe actualizar una mascota correctamente', async () => {
            const petMock = {
                name: 'Pepito',
                specie: 'perro',
                birthDate: '2020-01-01',
            };
            const { _body } = await requester.post('/api/pets').send(petMock);
            const id = _body.payload._id;
            const { statusCode, ok } = await requester.put(`/api/pets/${id}`).send({ name: 'Pepito2' });
            expect(statusCode).to.equal(200);
            expect(ok).to.equal(true);
            const { _body: updatedPet } = await requester.get(`/api/pets/${id}`);
            expect(updatedPet.payload.name).to.equal('Pepito2');
        });

        it('El endpoint DELETE /api/pets/:pid debe borrar una mascota correctamente', async () => {
            const petMock = {
                name: 'Pepito',
                specie: 'perro',
                birthDate: '2020-01-01',
            };
            const { _body } = await requester.post('/api/pets').send(petMock);
            const id = _body.payload._id;
            const { statusCode, ok } = await requester.delete(`/api/pets/${id}`);
            expect(statusCode).to.equal(200);
            expect(ok).to.equal(true);
            const { _body: deletedPet } = await requester.get(`/api/pets/${id}`);
            expect(deletedPet.payload).to.equal(null);
        });

    });
});