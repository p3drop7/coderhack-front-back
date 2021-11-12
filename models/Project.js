const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        max: 500,
    },
    img: {
        type: String,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    likes: {
        type: Array,
        default: [],
    },
    ideas: {
        type: Array,
        default: [],
    }
},
{ timestamps: true }
);

module.exports = mongoose.model('Project', ProjectSchema);