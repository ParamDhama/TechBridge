const Opportunity = require('../models/Opportunity');

// Get all conferences
exports.getAllConferences = async (req, res) => {
  try {
    const conferences = await Opportunity.find({ category: 'Conference' });
    res.status(200).json(conferences);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// Create a new conference
exports.createConference = async (req, res) => {
  try {
    const conference = new Opportunity({ ...req.body, category: 'Conference' });
    await conference.save();
    res.status(201).json(conference);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update a conference
exports.updateConference = async (req, res) => {
  try {
    const updatedConference = await Opportunity.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      { new: true, runValidators: true }
    );
    if (!updatedConference) return res.status(404).json({ message: 'Conference not found' });
    res.status(200).json(updatedConference);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a conference
exports.deleteConference = async (req, res) => {
  try {
    const deletedConference = await Opportunity.findByIdAndDelete(req.params.id);
    if (!deletedConference) return res.status(404).json({ message: 'Conference not found' });
    res.status(200).json({ message: 'Conference deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
