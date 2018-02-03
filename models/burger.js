// Sequelize setup
let Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  let Burger = sequelize.define(
    'Burger',
    {
      burger_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      devoured: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      timestamps: false,
    }
  );
  return Burger;
};
