// Dependencies
let express = require('express');
let router = express.Router();

// Database import
let db = require('../models');

// Routes
router.get('/', function(req, res) {
  db.Burger.findAll({}).then(function(dbBurger) {
    console.log({ Burgers: dbBurger[0] });
    res.json(dbBurger);
  });
});

router.post('/burgers', function(req, res) {
  db.Burger.create({
    burger_name: req.body.name,
  }).then(function(dbBurger) {
    res.json(dbBurger);
  });
});

router.put('/burgers/:id', function(req, res) {
  db.Burger.update({ devoured: true }, { where: { id: req.params.id } }).then(
    function(dbBurger) {
      res.json(dbBurger);
    }
  );
});
module.exports = router;
