const Opportunity = require('../models/Opportunity');

// Get all competitions
exports.getAllCompetitions = async (req, res, next) => {
  try {
    const competitions = await Opportunity.find({ category: 'Competition' });
    res.status(200).json(competitions);
  } catch (err) {
    next(err); // Pass error to middleware
  }
};



// Create a new competition
exports.createCompetition = async (req, res, next) => {
  try {
    const competition = new Opportunity({ ...req.body, category: 'Competition' });
    await competition.save();
    res.status(201).json(competition);
  } catch (err) {
    next(err);
  }
};

// Update a competition
exports.updateCompetition = async (req, res, next) => {
  try {
    const updatedCompetition = await Opportunity.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      { new: true, runValidators: true }
    );
    if (!updatedCompetition) {
      res.status(404);
      throw new Error('Competition not found');
    }
    res.status(200).json(updatedCompetition);
  } catch (err) {
    next(err);
  }
};

// Delete a competition
exports.deleteCompetition = async (req, res, next) => {
  try {
    const deletedCompetition = await Opportunity.findByIdAndDelete(req.params.id);
    if (!deletedCompetition) {
      res.status(404);
      throw new Error('Competition not found');
    }
    res.status(200).json({ message: 'Competition deleted successfully' });
  } catch (err) {
    next(err);
  }
};
