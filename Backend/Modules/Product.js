const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    sku: { type: String, required: true, unique: true },
    rating: { type: Number, required: true, min: 0, max: 5 },
    reviews: { type: Number, default: 0 },
    price: { type: Number, required: true },
    originalPrice: { type: Number },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
