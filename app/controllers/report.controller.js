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

exports.findOne = (req, res) => {
  const id = req.params.id;

  Report.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Tutorial with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Tutorial with id=" + id });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Report.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Report with id=${id}. Maybe Tutorial was not found!`
        });
      } else res.send({ message: "Report was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Report with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Report.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Report with id=${id}. Maybe Tutorial was not found!`
        });
      } else {
        res.send({
          message: "Tutorial was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id
      });
    });
};
