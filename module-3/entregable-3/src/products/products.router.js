const router = require('express').Router();
const productsServices = require('./products.services');

router.get('/', productsServices.getAllProducts);
router.post('/', productsServices.postNewProduct);

router.get('/:id', productsServices.getProductById);
router.patch('/:id', productsServices.patchProductById);
router.delete('/:id', productsServices.deleteProductById);

module.exports = router;