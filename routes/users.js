const User = require('../models/User');
const router = require('express').Router();
const bcrypt = require('bcrypt');

// Update user
router.put('/:id', async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        if (req.body.password) {
            try {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            } catch(err) {
                res.status(500).json(err);
            }
        }
        try {
            const user = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            });
            res.status(200).json('Account updated');
        } catch(err) {
            res.status(500).json(err);
        }
    } else {
        res.status(400).json('You can update only your account');
    }
});

// Add photo
router.put('/:id/photo', async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        if (req.body.password) {
            try {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            } catch(err) {
                res.status(500).json(err);
            }
        }
        try {
            const user = await User.findByIdAndUpdate(req.params.id, {
                $set: { profilePicture: '/img/' + req.file.filename },
            });
            res.status(200).json('Account updated');
        } catch(err) {
            res.status(500).json(err);
        }
    } else {
        res.status(400).json('You can update only your account');
    }
});

// Delete user
router.delete('/:id', async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        if (req.body.password) {
            try {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            } catch(err) {
                res.status(500).json(err);
            }
        }
        try {
            const user = await User.findOneAndDelete(req.params.id);
            res.status(200).json('Account deleted');
        } catch(err) {
            res.status(500).json(err);
        }
    } else {
        res.status(400).json('You can delete only your account');
    }
});

// Get a user
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, updatedAt, ...others} = user._doc
        res.status(200).json(others);
    } catch(err) {
        res.status(500).json(err);
    }
});

// Follow a user
router.put('/:id/follow', async (req, res) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if (!currentUser.following.includes(req.params.id)) {
                await currentUser.updateOne({ $push: { following: req.params.id } });
                res.status(200).json('User has been followed');
            } else {
                res.status(403).json('You already follow this user');
            }
        } catch(err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json('You cant follow yourself');
    }
});

// Unfollow a user
router.put('/:id/unfollow', async (req, res) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if (currentUser.following.includes(req.params.id)) {
                await currentUser.updateOne({ $pull: { following: req.params.id } });
                res.status(200).json('User has been unfollowed');
            } else {
                res.status(403).json('You already unfollow this user');
            }
        } catch(err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json('You cant unfollow yourself');
    }
});

module.exports = router;