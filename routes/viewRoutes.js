const express = require('express');
const viewsController = require('../controllers/viewsController');
const router = express.Router();

router.get('/overview', viewsController.overview);
router.get('/tour', (req, res) => {
  res.status(200).render('base', {
    title: 'The Forest Hiker Tour'
  });
});

module.exports = router;
