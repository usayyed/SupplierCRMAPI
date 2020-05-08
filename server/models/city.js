'use strict';
module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define('City', {
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    freezeTableName: true,
  });
  City.associate = function(models) {
    City.belongsTo(models.State, {
      foreignKey: 'stateId',
      onDelete: 'CASCADE',
    });
  };
  return City;
};