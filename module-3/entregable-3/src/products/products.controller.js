const db = require('../utils/database');
const ProductsModel = require('../models/products.model');
const { faker } = require('@faker-js/faker');

// Function.prototype.callme(amount = 1, ...params) {

// }

function generateProducts(length = 1) {
    for (let i = 0; i < length; i++) {
        ProductsModel.create({
            id: faker.datatype.uuid(),
            name: faker.commerce.productName(),
            category: faker.commerce.product(),
            price: parseInt(faker.commerce.price(10, 52000)),
            isAvailable: faker.datatype.boolean()
        })
            .then(() => { })
            .catch(console.error);
    }
}

// console.log('Creating products');
// generateProducts(55);

async function getAllProducts() {
    return ProductsModel.findAll();
}

async function createNewProduct(data) {
    return ProductsModel.create({
        id: faker.datatype.uuid(),
        ...data
    });
}

async function getProductById(id) {
    return ProductsModel.findByPk(id);
}

async function deleteProductById(id) {
    return ProductsModel.destroy({ where: { id } });
}

async function modifyProductById(id, data) {
    return ProductsModel.update(data, {
        where: { id }
    });
}

module.exports = {
    getAllProducts,
    createNewProduct,
    getProductById,
    deleteProductById,
    modifyProductById
};
