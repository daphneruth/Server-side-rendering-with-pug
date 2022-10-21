const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).render('base', {
    tour: 'The Forest Hiker',
    user: 'Daphne'
  });
});

router.get('/overview', (req, res) => {
  res.status(200).render('base', {
    title: 'All Tours'
  });
});
router.get('/tour', (req, res) => {
  res.status(200).render('base', {
    title: 'The Forest Hiker Tour'
  });
});

module.exports = router;
