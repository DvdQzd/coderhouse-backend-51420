/*
 product = {
    title
    price
    department
    stock
    imagen
    id
 }
*/
const { faker } = require('@faker-js/faker/locale/es_MX');

const generateProduct = () => {
    return {
        title: faker.commerce.productName(),
        price: faker.commerce.price(),
        department: faker.commerce.department(),
        stock: faker.number.int({ min: 1, max: 120 }),
        imagen: faker.image.url(),
        id: faker.database.mongodbObjectId(),
        code: faker.string.alphanumeric(5),
        description: faker.commerce.productDescription(),
    };
};

module.exports = generateProduct;
