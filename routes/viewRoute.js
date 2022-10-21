const express = require('express');

const router = express.Router();

app.get('/', (req, res) => {
  res.status(200).render('base', {
    tour: 'The Forest Hiker',
    user: 'Daphne'
  });
});

app.get('/overview', (req, res) => {
  res.status(200).render('base', {
    title: 'All Tours'
  });
});

app.get('/tour', (req, res) => {
  res.status(200).render('base', {
    title: 'The Forest Hiker Tour'
  });
});

module.exports = router;
