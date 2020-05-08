'use strict';
module.exports = (sequelize, DataTypes) => {
  const State = sequelize.define('State', {
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    code: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    freezeTableName: true,
  });
  State.associate = function(models) {
    State.hasMany(models.City, {
      foreignKey: 'stateId',
      as: 'cities',
    })
  };
  return State;
};