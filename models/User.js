const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3,
        max: 255,
    },
    email: {
        type: String,
        required: true,
        max: 255,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 8,
    },
    profilePicture: {
        type: String,
        default: "",
    },
    following: {
        type: Array,
        default: [],
    },
    isBusiness: {
        type: Boolean,
        default: false,
    }
});