module.exports = app => {
  const tutorials = require('../controllers/report.controller.js');

  var router = require('express').Router();

  router.post('/', tutorials.create);

  router.get('/', tutorials.findAll);

  router.get('/:id  ', tutorials.findOne);

  // Update a Tutorial with id
  router.put('/:id', tutorials.update);

  // Delete a Tutorial with id
  router.delete('/:id', tutorials.delete);

  // Create a new Tutorial
  router.delete('/', tutorials.deleteAll);

  app.use('/api/tutorials', router);
};
