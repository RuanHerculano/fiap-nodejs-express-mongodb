const db = require("../models");
const Tutorial = db.tutorials;

exports.create = (req, res) => {
  if (!req.body.nickname) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const report = new Tutorial({
    nickname: req.body.nickname,
    avatar: req.body.avatar,
    similarityPercentage: req.body.similarityPercentage
  });

  report
    .save(report)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Report."
      });
    });
};

exports.findAll = (_, res) => {
  Tutorial.find()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {

};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {

};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {

};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {

};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {

};
