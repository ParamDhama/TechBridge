const express = require('express');
const router = express.Router();
const hackathonController = require('../controllers/hackathonController');
const { isAuthenticated, isAdmin } = require('../controllers/authController');

// Routes for hackathons
router.get('/', hackathonController.getAllHackathons); // Get all hackathons
router.post('/', isAuthenticated, isAdmin, hackathonController.createHackathon); // Create a new hackathon
router.put('/:id', isAuthenticated, isAdmin, hackathonController.updateHackathon); // Update hackathon by ID
router.delete('/:id', isAuthenticated, isAdmin, hackathonController.deleteHackathon); // Delete hackathon by ID

module.exports = router;
