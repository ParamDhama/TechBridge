const express = require('express');
const router = express.Router();
const conferenceController = require('../controllers/conferenceController');
const { isAuthenticated, isAdmin } = require('../controllers/authController');

// Routes for conferences
router.get('/', conferenceController.getAllConferences); // Get all conferences
router.post('/', isAuthenticated, isAdmin, conferenceController.createConference); // Create a new conference
router.put('/:id', isAuthenticated, isAdmin, conferenceController.updateConference); // Update conference by ID
router.delete('/:id', isAuthenticated, isAdmin, conferenceController.deleteConference); // Delete conference by ID

module.exports = router;
