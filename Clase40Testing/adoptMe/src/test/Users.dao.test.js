import mongoose from "mongoose";
import UsersDao from '../dao/Users.dao.js';
import Assert from 'assert';

mongoose.connect(`mongodb+srv://david:KoTXPjoY7GoWfZRf@cluster0.giykqux.mongodb.net/?retryWrites=true&w=majority`);

const assert = Assert.strict;

// Armamos el escenario
describe('Testing Users Dao', () => {

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


    // Los it son test puntuales del describe
    // test 01
    it('El dao debe devolver los usuarios en formato arreglo', async function () {
        // definiomos la logica del test
        // console.log(this.usersDao);
        // Given
        const isArray = true;

        // Then
        const result = await this.usersDao.get(); // [{}, {}]

        // console.log(`El resultado es un array ?: ${Array.isArray(result)}`);

        // Assert that
        assert.strictEqual(Array.isArray(result), isArray);

    })


    //test 02
    it('El dao debe agregar un usuario correctamente a la DB', async function () {
        // definiomos la logica del test

        // Then
        const result = await this.usersDao.save(this.mockUser);

        // Assert that
        assert.ok(result._id);

    })

    // Al agregar un nuevo usuario, éste debe crearse con un arreglo de mascotas vacío por defecto
    it('Nuevos usuarios deben tener pets = []', async function () {

        const result = await this.usersDao.save(this.mockUser);

        assert.ok(result.pets);
        assert.strictEqual(Array.isArray(result.pets), true);
        assert.strictEqual(result.pets.length, 0);
    });

    it('El Dao puede obtener  a un usuario por email', async function (){
        // setup

        await this.usersDao.save(this.mockUser);

        // execute
        const result = await this.usersDao.getBy({ email: this.mockUser.email });

        // assert
        assert.ok(result._id);
        assert.strictEqual(result.first_name, this.mockUser.first_name);
        assert.strictEqual(result.last_name, this.mockUser.last_name);
    })


    afterEach(function () {
        mongoose.connection.collections.users.drop();
    });
})
