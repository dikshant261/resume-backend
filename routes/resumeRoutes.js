const express = require('express');
const { createOrUpdateResume, getResume, deleteResume } = require('../controllers/resumeController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// Routes for Resume
router.post('/saveresume', protect, createOrUpdateResume); // Create or update a resume
router.get('/getresume', protect, getResume); // Get the user's resume
router.delete('/deleteresume', protect, deleteResume); // Delete the user's resume

module.exports = router;
