const { Schema, model } = require('mongoose');

const imageSchema = new Schema({
  url: { type: String, required: true },
  publicId: { type: String, required: true },
});

const productSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  image: { type: imageSchema },
  owner: { type: Schema.Types.ObjectId, ref: 'User' },
});

const Product = model('Product', productSchema);

module.exports = Product;
