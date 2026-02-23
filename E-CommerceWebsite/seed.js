require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');

const products = require('./data/products_local');

const User = require('./models/User');

// ... existing products array ...

mongoose.connect(process.env.MONGO_URI)
    .then(async () => {
        console.log('Connected to DB');

        // Seed Products
        await Product.deleteMany({});
        console.log('Cleared Products');
        await Product.insertMany(products);
        console.log('Seeded Products');

        // Seed Users
        await User.deleteMany({});
        const adminUser = new User({
            username: 'admin123',
            password: 'admin123', // In a real app, hash this!
            email: 'admin@example.com'
        });
        await adminUser.save();
        console.log('Seeded Admin User (admin123/admin123)');

        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
