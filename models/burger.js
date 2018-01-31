// Import ORM
let orm = require('../config/orm.js')

// Burger Objext Creation
let burger = {
  // Select all burger table entries
  selectAll: function(cb) {
    orm.selectAll('burgers', function(res) {
      cb(res)
    })
  },

  insertOne: function(cols, vals, cb) {
    orm.insertOne('burgers', cols, vals, function(res) {
      cb(res)
    })
  },

  updateOne: function(objColVals, condition, cb) {
    orm.updateOne('burgers', objColVals, condition, function(res) {
      cb(res)
    })
  },
}

module.exports = burger
