const Opportunity = require('../models/Opportunity');

exports.getAllHackathons = async (req, res) => {
  try {
    const hackathons = await Opportunity.find({ category: 'Hackathon' });
    res.status(200).json(hackathons);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.createHackathon = async (req, res) => {
  try {
    const hackathon = new Opportunity({ ...req.body, category: 'Hackathon' });
    await hackathon.save();
    res.status(201).json(hackathon);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateHackathon = async (req, res) => {
  try {
    const updatedHackathon = await Opportunity.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      { new: true, runValidators: true }
    );
    if (!updatedHackathon) return res.status(404).json({ message: 'Hackathon not found' });
    res.status(200).json(updatedHackathon);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteHackathon = async (req, res) => {
  try {
    const deletedHackathon = await Opportunity.findByIdAndDelete(req.params.id);
    if (!deletedHackathon) return res.status(404).json({ message: 'Hackathon not found' });
    res.status(200).json({ message: 'Hackathon deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
