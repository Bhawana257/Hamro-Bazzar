const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Product = require('../models/Product'); // Assuming Product model exists, though User model populates it.

// Middleware to get user
const getUser = async (req, res, next) => {
    const userId = req.headers['user-id'];
    if (!userId) return res.status(401).json({ message: 'Unauthorized' });
    try {
        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ message: 'User not found' });
        req.user = user;
        next();
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// GET Cart Items
router.get('/', getUser, async (req, res) => {
    try {
        // Populate productId in cart
        const user = await User.findById(req.user._id).populate('cart.productId');
        res.json(user.cart);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching cart' });
    }
});

// ADD Item to Cart
router.post('/add', getUser, async (req, res) => {
    const { productId } = req.body;
    if (!productId) {
        return res.status(400).json({ message: 'Product ID is required' });
    }
    try {
        const user = req.user;
        const cartItemIndex = user.cart.findIndex(item => item.productId && item.productId.toString() === productId);

        if (cartItemIndex > -1) {
            // Item exists, increment quantity
            user.cart[cartItemIndex].quantity += 1;
        } else {
            // Add new item
            user.cart.push({ productId, quantity: 1 });
        }
        await user.save();
        res.json(user.cart);
    } catch (err) {
        console.error("Add to cart error:", err);
        res.status(500).json({ message: 'Error adding to cart' });
    }
});

// REMOVE Item from Cart
router.delete('/remove/:productId', getUser, async (req, res) => {
    const { productId } = req.params;
    try {
        const user = req.user;
        user.cart = user.cart.filter(item => item.productId && item.productId.toString() !== productId);
        await user.save();
        res.json(user.cart);
    } catch (err) {
        res.status(500).json({ message: 'Error removing item' });
    }
});

// CLEAR Cart (Place Order)
router.delete('/', getUser, async (req, res) => {
    try {
        const user = req.user;
        user.cart = [];
        await user.save();
        res.json({ message: 'Cart cleared' });
    } catch (err) {
        res.status(500).json({ message: 'Error clearing cart' });
    }
});

module.exports = router;
