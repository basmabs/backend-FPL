const Vote = require('../Models/Vote_Model');
exports.findVote = async (req, res) => {
  const option = req.params.option;
  try {
    const vote = await Vote.findOne({ option });
    vote.count += 1;
    await vote.save();
    const votes = await Vote.find();
    res.status(201).send(votes);
  } catch (error) {
    res.status(500).send(error);
  }
};
exports.getVote = async (req, res) => {
  try {
    const votes = await Vote.find();
    res.status(200).send(votes);
  } catch (error) {
    res.status(500).send(error);
  }
};