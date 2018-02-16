// Dependencies
const express = require('express');
const router = express.Router();

// Database import
const db = require('../models');

// Routes
router.get('/', (req, res) => {
  db.Burger.findAll({}).then(dbBurger => {
    console.log({ Burgers: dbBurger[0] });
    return res.render('index', { dbBurger });
  });
});

router.post('/burgers', (req, res) => {
  db.Burger.create({
    burger_name: req.body.name,
  }).then(dbBurger => {
    res.redirect('/');
  });
});

router.put('/burgers/:id', (req, res) => {
  db.Burger.update({ devoured: true }, { where: { id: req.params.id } }).then(
    dbBurger => {
      res.redirect('/');
    }
  );
});
module.exports = router;
