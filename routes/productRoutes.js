const express = require('express');
const { getPublicProducts, createProduct, updateProduct, deleteProduct } = require('../controllers/productController');
const validateApiKey = require('../middleware/validateApiKey');
const validateToken = require('../middleware/validateToken');
const router = express.Router();

router.get('/public', validateApiKey, getPublicProducts);
router.post('/private', validateToken, createProduct);
router.put('/private/:id', validateToken, updateProduct);
router.delete('/private/:id', validateToken, deleteProduct);

module.exports = router;