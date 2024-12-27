const Opportunity = require('../models/Opportunity');

// Get all collaborations
exports.getAllCollaborations = async (req, res) => {
  try {
    const collaborations = await Opportunity.find({ category: 'Collaboration' });
    res.status(200).json(collaborations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// // Get collaboration by ID
// exports.getCollaborationById = async (req, res) => {
//   try {
//     const collaboration = await Opportunity.findById(req.params.id);
//     if (!collaboration) return res.status(404).json({ message: 'Collaboration not found' });
//     res.status(200).json(collaboration);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// Create a new collaboration
exports.createCollaboration = async (req, res) => {
  try {
    const collaboration = new Opportunity({ ...req.body, category: 'Collaboration' });
    await collaboration.save();
    res.status(201).json(collaboration);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update a collaboration
exports.updateCollaboration = async (req, res) => {
  try {
    const updatedCollaboration = await Opportunity.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      { new: true, runValidators: true }
    );
    if (!updatedCollaboration) return res.status(404).json({ message: 'Collaboration not found' });
    res.status(200).json(updatedCollaboration);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a collaboration
exports.deleteCollaboration = async (req, res) => {
  try {
    const deletedCollaboration = await Opportunity.findByIdAndDelete(req.params.id);
    if (!deletedCollaboration) return res.status(404).json({ message: 'Collaboration not found' });
    res.status(200).json({ message: 'Collaboration deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
