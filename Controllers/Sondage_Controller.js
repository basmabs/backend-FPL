const sondage = require('../Models/Sondage_Model');
exports.addSondage = async (req, res) => {
  try {
    await sondage.create(req.body)
    res.status(201).send({ message: `Sondage is created` })
  } catch (error) {
    res.status(500).send({ message: `server error` })
  }
};
exports.getSondage = async (req, res) => {
  try {
    const sondages = await sondage.find()
    res.send(sondages)
  } catch (error) {
    res.status(500).send({ message: `server error` })
  }
};
exports.getSondagebyid = async (req, res) => {
  try {
    const specificSondage = await sondage.findById(req.params.idSondage)
    res.status(200).send(specificSondage)
  } catch (error) {
    res.status(500).send({ message: `server error` })
  }
};
exports.updateSondage = async (req, res) => {
  try {
    await sondage.findOneAndUpdate(req.params.idSondage, req.body)
    res.status(201).send({ message: `Sondage is updated` })
  } catch (error) {
    res.status(500).send({ message: `server error` })
  }
};
exports.deleteSondage = async (req, res) => {
  try {
    await sondage.findByIdAndRemove(req.params.idSondage)
    res.send({ message: `Sondage is deleted` })
  } catch (error) {
    res.status(500).send({ message: `server error` })
  }
};