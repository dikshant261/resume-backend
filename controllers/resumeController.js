const Resume = require('../models/resumeModel');

// Create or Update Resume
exports.createOrUpdateResume = async (req, res) => {
  try {
    const userId = req.user.id; // Retrieved from the JWT middleware
    const resumeData = req.body;

    // Check if a resume already exists for this user
    const existingResume = await Resume.findOne({ userId });

    if (existingResume) {
      // Update existing resume
      const updatedResume = await Resume.findOneAndUpdate(
        { userId },
        resumeData,
        { new: true }
      );
      return res.status(200).json({ message: 'Resume updated', resume: updatedResume });
    }

    // Create a new resume
    const newResume = new Resume({ userId, ...resumeData });
    await newResume.save();
    res.status(201).json({ message: 'Resume created', resume: newResume });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Get Resume
exports.getResume = async (req, res) => {
  try {
    const userId = req.user.id; // Retrieved from the JWT middleware
    const resume = await Resume.findOne({ userId });

    if (!resume) {
      return res.status(404).json({ message: 'Resume not found' });
    }

    res.status(200).json(resume);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
// Delete Resume
exports.deleteResume = async (req, res) => {
  try {
    const userId = req.user.id; // Retrieved from the JWT middleware

    // Find and delete the resume for the user
    const deletedResume = await Resume.findOneAndDelete({ userId });

    if (!deletedResume) {
      return res.status(404).json({ message: 'Resume not found' });
    }

    res.status(200).json({ message: 'Resume deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
