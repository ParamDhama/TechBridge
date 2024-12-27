const express = require('express');
const router = express.Router();
const collaborationController = require('../controllers/collaborationController');
const { isAuthenticated, isAdmin } = require('../controllers/authController');

// Routes for collaborations
router.get('/', collaborationController.getAllCollaborations); // Get all collaborations
// router.get('/:id', collaborationController.getCollaborationById); // Get collaboration by ID
router.post('/', isAuthenticated, isAdmin, collaborationController.createCollaboration); // Create a new collaboration
router.put('/:id', isAuthenticated, isAdmin, collaborationController.updateCollaboration); // Update collaboration by ID
router.delete('/:id', isAuthenticated, isAdmin, collaborationController.deleteCollaboration); // Delete collaboration by ID

module.exports = router;
