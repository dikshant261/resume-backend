require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const resumeRoutes = require('./routes/resumeRoutes');
const cors =require('cors');
const app = express();
app.use(express.json());

app.use(
    cors({
      origin: "http://localhost:5173", // Allow requests from your frontend
      methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed methods
      credentials: true, // If you're using cookies or authorization headers
    })
  );
// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/resume', resumeRoutes); // Add resume routes

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
