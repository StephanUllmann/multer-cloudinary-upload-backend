const Product = require('../models/product.js');
const cloudinary = require('cloudinary').v2;

const createProduct = async (req, res) => {
  try {
    const { name, price, owner } = req.body;
    const { path, filename } = req.file;

    const product = await Product.create({
      name,
      price,
      owner,
      image: { url: path, publicId: filename },
    });

    res.status(201).json({ data: product });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const product = await Product.findByIdAndDelete(id);
    if (!product) return res.status(404).json({ error: 'Product not found' });

    const response = await cloudinary.uploader.destroy(product.image.publicId);
    if (response.result === 'ok')
      res.status(200).json({ msg: 'Successfully deleted image' });
    else res.status(500).json({ error: 'Image not deleted' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const testUpload = (req, res) => {
  console.log(req.body);
  console.log(req.file);
};

module.exports = { createProduct, testUpload, deleteProduct };
