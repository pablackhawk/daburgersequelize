// Sequelize setup
let Sequelize = require('sequelize')

module.exports = function(sequelize, DataTypes) {
  let Burger = sequelize.define('Burger', {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    devoured: {
      type: DataTypes.BOOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  })
  return Burger
}
