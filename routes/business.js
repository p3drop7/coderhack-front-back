const User = require('../models/User');
const router = require('express').Router();

// Get business
router.get('/', async (req, res) => {
    try {
        const business = await User.find({ isBusiness: {$ne: false}});
        res.status(200).json(business);
    } catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router;