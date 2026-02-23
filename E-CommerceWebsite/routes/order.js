const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Order = require('../models/Order');

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

// CREATE Order
router.post('/place', getUser, async (req, res) => {
    try {
        const { address, paymentMethod, deliveryInstruction } = req.body;
        const user = await User.findById(req.user._id).populate('cart.productId');

        if (!user.cart || user.cart.length === 0) {
            return res.status(400).json({ message: 'Cart is empty' });
        }

        let totalAmount = 0;
        const orderProducts = user.cart.map(item => {
            if (!item.productId) return null; // Handle deleted products
            totalAmount += item.productId.price * item.quantity;
            return {
                productId: item.productId._id,
                quantity: item.quantity,
                price: item.productId.price,
                name: item.productId.name,
                preview: item.productId.preview
            };
        }).filter(item => item !== null);

        const newOrder = new Order({
            userId: user._id,
            products: orderProducts,
            amount: totalAmount,
            address,
            paymentMethod,
            deliveryInstruction
        });

        await newOrder.save();

        // Clear User Cart
        user.cart = [];
        await user.save();

        res.json({ message: 'Order Placed Successfully', orderId: newOrder._id });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error placing order' });
    }
});

// GET User Orders
router.get('/', getUser, async (req, res) => {
    try {
        const orders = await Order.find({ userId: req.user._id }).sort({ date: -1 });
        res.json(orders);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching orders' });
    }
});

module.exports = router;
