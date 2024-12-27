const Opportunity = require('../models/Opportunity');

// Get all scholarships
exports.getAllScholarships = async (req, res) => {
  try {
    const scholarships = await Opportunity.find({ category: 'Scholarship' });
    res.status(200).json(scholarships);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// Create a new scholarship
exports.createScholarship = async (req, res) => {
  try {
    const scholarship = new Opportunity({ ...req.body, category: 'Scholarship' });
    await scholarship.save();
    res.status(201).json(scholarship);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update a scholarship
exports.updateScholarship = async (req, res) => {
  try {
    const updatedScholarship = await Opportunity.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      { new: true, runValidators: true }
    );
    if (!updatedScholarship) return res.status(404).json({ message: 'Scholarship not found' });
    res.status(200).json(updatedScholarship);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a scholarship
exports.deleteScholarship = async (req, res) => {
  try {
    const deletedScholarship = await Opportunity.findByIdAndDelete(req.params.id);
    if (!deletedScholarship) return res.status(404).json({ message: 'Scholarship not found' });
    res.status(200).json({ message: 'Scholarship deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
