'use strict';
module.exports = (sequelize, DataTypes) => {
  var Recipie = sequelize.define('Recipie', {
    name: DataTypes.STRING,
    ingredients: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Recipie;
};