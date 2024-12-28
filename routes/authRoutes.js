const express = require('express');
// const { registerUser, loginUser } = require('./controllers/authController');
const { registerUser, loginUser } = require('../controllers/authController');

const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// Routes
router.post('/register', registerUser);
router.post('/login', loginUser);

// Example of a protected route
router.get('/profile', protect, (req, res) => {
  res.status(200).json({ message: 'Profile data', user: req.user });
});
router.get('/hello',(req,res)=>{
  res.send("Hello World");
})
module.exports = router;
