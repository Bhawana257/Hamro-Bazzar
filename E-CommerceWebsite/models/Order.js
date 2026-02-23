const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    products: [
        {
            productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
            quantity: { type: Number, default: 1 },
            price: { type: Number, required: true }, // Store price at time of purchase
            name: String,
            preview: String
        }
    ],
    amount: { type: Number, required: true },
    address: {
        name: String,
        street: String,
        city: String,
        zip: String
    },
    deliveryInstruction: String,
    paymentMethod: { type: String, enum: ['Card', 'Cash', 'UPI'], default: 'Cash' },
    date: { type: Date, default: Date.now },
    status: { type: String, default: 'Placed' }
});

module.exports = mongoose.model('Order', OrderSchema);
