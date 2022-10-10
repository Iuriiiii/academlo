const productsController = require('./products.controller');

async function getAllProducts(req, res) {
    const rows = await productsController.getAllProducts();

    res.status(200).json(rows);
}

async function postNewProduct(req, res) {
    const { name, price, category, isAvailable } = req.body;

    if (name && price && category && isAvailable) {
        const product = await productsController.createNewProduct(req.body);

        res.status(201).json({ status: true, message: 'product created', product });
    } else {
        res.status(400).json({ status: false, message: 'Invalid parameters' });
    }
}

function getProductById(req, res) {
    console.log(req.params.id);
    if (!req.params.id) {
        res.status(400).json({ status: false, message: 'Invalid id' });
    } else {
        productsController.getProductById(req.params.id)
            .then(product => res.status(200).json({ status: true, message: 'Product exists', product }))
            .catch(() => res.status(404).json({ status: false, message: 'Product does not exist' }));
    }
}

function patchProductById(req, res) {
    const { name, category, price, isAvailable } = req.body;
    const { id } = req.params;

    if (id && (name || category || price || isAvailable)) {
        productsController.modifyProductById(id, req.body)
            .then(numberOfRowsModified => res.status(200).json({ status: true, message: `Modified ${numberOfRowsModified} rows` }))
            .catch(() => res.status(404).json({ status: false, message: 'Product does not exist' }));
    } else {
        res.status(400).json({ status: false, message: 'Invalid params' });
    }
}

function deleteProductById(req, res) {
    if (!req.params.id) {
        res.status(400).json({ status: false, message: 'Invalid id' });
    } else {
        productsController.deleteProductById(req.params.id)
            .then(productsDeleted => res.status(200).json({ status: true, message: `Deleted ${productsDeleted} products` }))
            .catch(() => res.status(404).json({ status: false, message: 'Product does not exist' }));
    }
}

module.exports = {
    getAllProducts,
    postNewProduct,
    getProductById,
    patchProductById,
    deleteProductById
};