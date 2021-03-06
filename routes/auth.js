const router = require('express').Router();
const User = require('../models/User'); 
const bcrypt = require('bcrypt');

// Register
router.post('/register', async (req, res) => {
    try {
        // Generate password
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);

        // Create new user
        const newUser = await new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPass
        });

        // Save user and respond
        const user = await newUser.save();

        res.status(200).json(user);
    } catch(err) {
        res.status(500).json(err);
    }
});

// Login
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({email: req.body.email});
        !user && res.status(404).json('User not found');

        const validPass = await bcrypt.compare(req.body.password, user.password);
        !validPass && res.status(400).json('Wrong password');

        res.status(200).json(user);
    } catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router;