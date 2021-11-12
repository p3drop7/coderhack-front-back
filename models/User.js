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
    isAdmin: {
        type: Boolean,
        default: false,
    },
    isBusiness: {
        type: Boolean,
        default: false,
    },
    description: {
        type: String,
        max: 500,
        default: "",
    }
},
{ timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);