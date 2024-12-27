const Opportunity = require('../models/Opportunity');

// Get all internships
exports.getAllInternships = async (req, res) => {
  try {
    const internships = await Opportunity.find({ category: 'Internship' });
    res.status(200).json(internships);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



// Create a new internship
exports.createInternship = async (req, res) => {
  try {
    const internship = new Opportunity({ ...req.body, category: 'Internship' });
    await internship.save();
    res.status(201).json(internship);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateInternship = async (req, res) => {
  try {


    // Attempt to update the internship
    const updatedInternship = await Opportunity.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      { new: true, runValidators: true }
    );

    // If no internship was found, return a 404 response
    if (!updatedInternship) {
      return res.status(404).json({ message: 'Internship not found' });
    }

    // Successfully updated the internship
    res.status(200).json(updatedInternship);
  } catch (err) {
    // Log detailed error message
    
    // If Mongoose validation fails, return detailed error
    if (err.name === 'ValidationError') {
      return res.status(400).json({
        error: 'Validation failed',
        details: err.errors
      });
    }

    // For other errors (e.g., internal server error), return a generic message
    res.status(400).json({ error: err.message });
  }
};

// Delete an internship
exports.deleteInternship = async (req, res) => {
  try {
    const deletedInternship = await Opportunity.findByIdAndDelete(req.params.id);
    if (!deletedInternship) return res.status(404).json({ message: 'Internship not found' });
    res.status(200).json({ message: 'Internship deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
