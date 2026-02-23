require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/product');
const cartRoutes = require('./routes/cart');
const orderRoutes = require('./routes/order');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Serve static files from current directory
app.use(express.static(__dirname));

// Database connection
const uri = process.env.MONGO_URI;
if (!uri || uri.includes('<cluster-url>')) {
  console.error('MONGO_URI is not set or invalid in .env file. Please check your .env file.');
} else {
  mongoose.connect(uri)
    .then(() => console.log('MongoDB connected!'))
    .catch(err => console.error('MongoDB connection error:', err));
}

// Routes
app.use('/auth', authRoutes);
app.use('/products', productRoutes);
app.use('/cart', cartRoutes);
app.use('/order', orderRoutes);

// Root route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
