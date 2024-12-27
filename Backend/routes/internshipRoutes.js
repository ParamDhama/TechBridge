const express = require('express');
const router = express.Router();
const internshipController = require('../controllers/internshipController');
const { isAuthenticated, isAdmin } = require('../controllers/authController');


// Routes for internships
router.get('/' , internshipController.getAllInternships); // Get all internships
router.post('/', isAuthenticated, isAdmin, internshipController.createInternship); // Create a new internship
router.put('/:id', isAuthenticated, isAdmin, internshipController.updateInternship); // Update internship by ID
router.delete('/:id', isAuthenticated, isAdmin, internshipController.deleteInternship); // Delete internship by ID

module.exports = router;
