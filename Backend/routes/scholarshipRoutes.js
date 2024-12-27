const express = require('express');
const router = express.Router();
const scholarshipController = require('../controllers/scholarshipController');
const { isAuthenticated, isAdmin } = require('../controllers/authController');
// Routes for scholarships
router.get('/', scholarshipController.getAllScholarships); // Get all scholarships
router.post('/', isAuthenticated, isAdmin, scholarshipController.createScholarship); // Create a new scholarship
router.put('/:id', isAuthenticated, isAdmin, scholarshipController.updateScholarship); // Update scholarship by ID
router.delete('/:id', isAuthenticated, isAdmin, scholarshipController.deleteScholarship); // Delete scholarship by ID

module.exports = router;
