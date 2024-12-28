const mongoose = require('mongoose');

const ResumeSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true,
  },
  name: { type: String, required: true },
  email: { type: String, required: true },
  number: { type: String },
  summary: { type: String },
  education: [
    {
      degree: { type: String },
      institution: { type: String },
      year: { type: String },
    },
  ],
  experience: [
    {
      company: { type: String },
      role: { type: String },
      duration: { type: String },
      workExperience: { type: String },
    },
  ],
  skills: [String],
});

module.exports = mongoose.model('Resume', ResumeSchema);
