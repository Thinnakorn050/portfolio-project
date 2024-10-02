const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Import Routes
const authRoutes = require('./routes/authRoutes');
const projectRoutes = require('./routes/projectRoutes');

// Routes Middleware
app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);

// Function to connect to MongoDB using MONGO_URI from .env
const connectToDB = async () => {
    try {
        // Connect to MongoDB using URI from the .env file without deprecated options
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

// Call the connectToDB function to establish the connection
connectToDB();

// Start server
const port = process.env.PORT || 3000;  // Use PORT from .env or fallback to 3000
app.listen(port, () => console.log(`Server running on port ${port}`));
