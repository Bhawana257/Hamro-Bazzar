const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Register
router.post('/register', async (req, res) => {
    try {
        const { username, password, email } = req.body;
        if (!username || !password || !email) {
            return res.status(400).send('All fields are required');
        }
        const existingUser = await User.findOne({ $or: [{ username }, { email }] });
        if (existingUser) {
            return res.status(400).send('Username or email already exists');
        }
        const user = new User({ username, password, email });
        await user.save();
        res.status(201).json({ message: 'User registered successfully', userId: user._id });
    } catch (err) {
        res.status(500).send('Error registering user');
    }
});

// Login
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body; // Changed from userId to username to match model, or allow both
        // The frontend sends 'userId' which might be username.
        // Let's assume it's username for now.
        if (!username || !password) {
            return res.status(400).send('All fields are required');
        }
        const user = await User.findOne({ username, password });
        if (!user) {
            return res.status(401).send('Invalid credentials');
        }
        res.json({ message: 'Login successful', userId: user._id, username: user.username });
    } catch (err) {
        res.status(500).send('Error logging in');
    }
});

module.exports = router;
