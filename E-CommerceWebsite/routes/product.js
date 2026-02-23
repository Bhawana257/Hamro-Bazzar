const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Get all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).send('Error fetching products');
    }
});

// Get single product
router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).send('Product not found');
        res.json(product);
    } catch (err) {
        res.status(500).send('Error fetching product');
    }
});

// Add product (Admin)
router.post('/add-item', async (req, res) => {
    try {
        const { name, description, price, preview, photos, isAccessory, brand, size } = req.body;
        const product = new Product({ name, description, price, preview, photos, isAccessory, brand, size });
        await product.save();
        res.status(201).json({ message: 'Product added!', productId: product._id });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error adding item');
    }
});

module.exports = router;
