const express = require('express');

const router = express.Router();
const uploadImage = require('../middlewares/uploadImage.js');

const {
  testUpload,
  createProduct,
  deleteProduct,
} = require('../controllers/product.js');

router.post('/', uploadImage.single('image'), createProduct);
router.post('/test', uploadImage.single('image'), testUpload);
router.delete('/:id', deleteProduct);

module.exports = router;
