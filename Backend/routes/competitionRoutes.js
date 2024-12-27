const express = require('express');
const router = express.Router();
const competitionController = require('../controllers/competitionController');
const { isAuthenticated, isAdmin } = require('../controllers/authController');

// Routes for competitions
router.get('/', competitionController.getAllCompetitions); // Get all competitions
router.post('/', isAuthenticated, isAdmin, competitionController.createCompetition); // Create a new competition
router.put('/:id', isAuthenticated, isAdmin, competitionController.updateCompetition); // Update competition by ID
router.delete('/:id', isAuthenticated, isAdmin, competitionController.deleteCompetition); // Delete competition by ID

module.exports = router;
