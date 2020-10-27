const db = require("../models");
const Report = db.reports;

exports.create = (req, res) => {
  if (!req.body.nickname) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const report = new Report({
    nickname: req.body.nickname,
    avatar: req.body.avatar,
    similarityLevel: req.body.similarityLevel
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
  Report.find({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Reports."
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Report.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Report with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Report with id=" + id });
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
          message: `Cannot update Report with id=${id}. Maybe Report was not found!`
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
          message: `Cannot delete Report with id=${id}. Maybe Report was not found!`
        });
      } else {
        res.send({
          message: "Report was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Report with id=" + id
      });
    });
};
