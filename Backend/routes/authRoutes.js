const express = require('express');
const router = express.Router();
const { login, isAuthenticated, isAdmin } = require('../controllers/authController');

// Admin Login Route
router.post('/', login);

// Protected admin route
router.get('/admin-dashboard', isAuthenticated, isAdmin, (req, res) => {
  res.status(200).json({ message: 'Welcome to the Admin Dashboard!' });
});

module.exports = router;
