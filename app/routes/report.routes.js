module.exports = app => {
  const reports = require('../controllers/report.controller.js');

  const router = require('express').Router();

  router.post('/', reports.create);

  router.get('/', reports.findAll);

  router.get('/:id  ', reports.findOne);

  router.put('/:id', reports.update);

  router.delete('/:id', reports.delete);

  app.use('/api/reports', router);
};
