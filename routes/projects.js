const router = require('express').Router();
const Project = require('../models/Project');

// Create a project
router.post('/', async (req, res) => {
    const newProject = new Project(req.body);
    try {
        const savedProject = await newProject.save();
        res.status(200).json(savedProject);
    } catch(err) {
        res.status(500).json(err);
    }
});

// Edit a project
router.put('/:id', async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (project.userId === req.body.userId) {
            await project.updateOne({ $set: req.body });
            res.status(200).json('The project was updated');
        } else {
            res.status(403).json('You can update only your projects');
        }
    } catch(err) {
        res.status(500).json(err);
    }
});

// Add photo
router.put('/:id/photo', async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (project.userId === req.body.userId) {
            await project.updateOne({ $set: { profilePicture: '/img/' + req.file.filename } });
            res.status(200).json('The photo was uploaded');
        } else {
            res.status(403).json('You can upload photos only in your projects');
        }
    } catch(err) {
        res.status(500).json(err);
    }
});

// Delete a project
router.delete('/:id', async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (project.userId === req.body.userId) {
            await project.deleteOne();
            res.status(200).json('The project was deleted');
        } else {
            res.status(403).json('You can delete only your projects');
        }
    } catch(err) {
        res.status(500).json(err);
    }
});

// Get one project
router.get('/:id', async (req, res) => {
    try {
        const project = Project.findById(req.params.id);
        res.status(200).json(project);
    } catch(err) {
        res.status(500).json(err);
    }
});

// Get all projects
router.get('/', async (req, res) => {
    try {
        const activeProjects = await Project.find({ isActive: {$ne: false}});
        console.log(activeProjects);
        res.status(200).json(activeProjects);
    } catch(err) {
        res.status(500).json(err);
    }
});

// Like / Dislike a post
router.put('/:id/like', async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project.likes.includes(req.body.userId)) {
            await project.updateOne({ $push: { likes: req.body.userId } });
            res.status(200).json('The project has been liked');
        } else {
            await project.updateOne({ $pull: { likes: req.body.userId } });
            res.status(200).json('The project has been disliked');
        }
    } catch(err) {
        res.status(500).json(err);
    }
});

// Comment a post
router.put('/:id/comment', async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        await project.updateOne({ $push: { ideas: { userId: req.body.userId, comment: req.body.comment } } });
        res.status(200).json('The project has been commented');
    } catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router;