const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    preview: String, // Changed from 'image' to 'preview' to match frontend usage
    photos: [String], // Array of images
    isAccessory: Boolean,
    category: String,
    brand: String,
    size: [Number]
});

module.exports = mongoose.model('Product', ProductSchema);
