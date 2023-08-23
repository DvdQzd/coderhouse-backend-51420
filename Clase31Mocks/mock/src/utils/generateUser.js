/* user : {
    name
    lastName
    sex
    birthDate
    phone
    products --> CARRITO
    image
    id
    email
}

*/

const generateProduct = require('./generateProduct');
const { faker } = require('@faker-js/faker/locale/es_MX');

const generateUser = () => {
    const numberOfProducts = faker.number.int({ min: 1, max: 10 });
    const products = [];

    for (let i = 0; i < numberOfProducts; i++) {
        products.push(generateProduct());
    }

    return {
        name: faker.person.firstName(),
        lastName: faker.person.lastName(),
        sex: faker.person.sex(),
        birthDate: faker.date.birthdate(),
        phone: faker.phone.number('+549-341-###-###'),
        image: faker.image.avatar(),
        id: faker.database.mongodbObjectId(),
        email: faker.internet.email(),
        role: faker.helpers.arrayElement(['cliente', 'vendedor']),
        premium: faker.datatype.boolean(),
        job: faker.person.jobTitle(),
        products,
    };
};

module.exports = generateUser;
