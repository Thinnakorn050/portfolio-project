const Project = require('../models/projectModel');

// Get All Projects
exports.getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get Single Project
exports.getProjectById = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        res.json(project);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create New Project
exports.createProject = async (req, res) => {
    const { title, description, imageUrl, certificateUrl } = req.body;

    try {
        const newProject = new Project({
            title,
            description,
            imageUrl,
            certificateUrl,
            userId: req.user.id
        });

        await newProject.save();
        res.json({ message: 'Project created successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update Project
exports.updateProject = async (req, res) => {
    try {
        const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json({ message: 'Project updated successfully', updatedProject });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete Project
exports.deleteProject = async (req, res) => {
    try {
        await Project.findByIdAndDelete(req.params.id);
        res.json({ message: 'Project deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
