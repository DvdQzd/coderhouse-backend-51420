import chai from 'chai';
import UsersDao from '../dao/Users.dao.js';
import mongoose from "mongoose";

mongoose.connect(`mongodb+srv://david:KoTXPjoY7GoWfZRf@cluster0.giykqux.mongodb.net/?retryWrites=true&w=majority`);

const expect = chai.expect;

describe('Prueba Users con Chai', () => {
    before(function () {
        this.usersDao = new UsersDao()
        this.mockUser = {
            first_name: "Usuario de prueba 1",
            last_name: "Apellido de prueba 1",
            email: "correodeprueba1@gmail.com",
            password: "123456"
        };
    })

    beforeEach(function () {
        this.timeout(5000);
        mongoose.connection.collections.users.drop();
    })

    it('El dao debe devolver los usuarios en formato arreglo // chai', async function () {
        const result = await this.usersDao.get(); 

        // assert.strictEqual(Array.isArray(result), isArray);
        expect(result).to.be.a('array');
        expect(result).to.deep.equal([]);

        // expect({name: 'David'}).to.haveOwnProperty('name');
        // expect({name: 'David'}).to.deep.equal({name: 'David'});

    })

    it('El dao debe devolver los usuarios en formato arreglo', async function () {
        // definiomos la logica del test
        // console.log(this.usersDao);
        // Given
        const emptyArray = [];

        // Then
        const result = await this.usersDao.get(); // []

        // Assert that
        expect(result).to.be.deep.equal(emptyArray)
        expect(Array.isArray(result)).to.be.ok;
        expect(Array.isArray(result)).to.be.equal(true);
        expect(result.length).to.be.deep.equal(emptyArray.length);

    })


    // test 02
    it('El dao debe agregar un usuario correctamente a la DB', async function () {
        // definiomos la logica del test
        // Given
        let mockUser = {
            first_name: "Usuario de prueba 1",
            last_name: "Apellido de prueba 1",
            email: "correodeprueba1@gmail.com",
            password: "123456"
        };

        // Then
        const result = await this.usersDao.save(mockUser);


        // Assert that
        expect(result._id).to.be.ok;

    })

    it('El dao debe editar un usuario correctamente a la DB', async function () {
        // definiomos la logica del test
        // Given
        const mockUser = {
            first_name: "Usuario de prueba 1",
            last_name: "Apellido de prueba 1",
            email: "correodeprueba1@gmail.com",
            password: "123456"
        };

        // Then
        const result = await this.usersDao.save(mockUser);

        const editedUser = {
            first_name: "Usuario de prueba 1",
            last_name: "Apellido de prueba Editado",
            email: "correodeprueba1@gmail.com",
            password: "123456"
        };

        await this.usersDao.update(result._id, editedUser);

        const usuarioDespuesDeEdicion = (await this.usersDao.get({_id: result._id}))[0];

        // console.log({usuarioDespuesDeEdicion})

        expect(usuarioDespuesDeEdicion).to.be.a('object')
        expect(usuarioDespuesDeEdicion.first_name).to.equal(editedUser.first_name);
        expect(usuarioDespuesDeEdicion.last_name).to.equal(editedUser.last_name);
        expect(usuarioDespuesDeEdicion.email).to.equal(editedUser.email);
        expect(usuarioDespuesDeEdicion._id).to.be.ok;

    });

    it('el dao debe eliminar un usuario correctamente a la DB', async function () {
        // definiomos la logica del test
        // Given
        const mockUser = {
            first_name: "Usuario de prueba 1",
            last_name: "Apellido de prueba 1",
            email: "correodeprueba1@gmail.com",
            password: "123456"
        };

        // Then
        const result = await this.usersDao.save(mockUser);

        await this.usersDao.delete(result._id);

        const deleteResult = await this.usersDao.get({_id: result._id});

        expect(deleteResult).to.be.a('array')
        expect(deleteResult.length).to.equal(0);

    });

    afterEach(function () {
        mongoose.connection.collections.users.drop();
    });
})