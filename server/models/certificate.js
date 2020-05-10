'use strict';
module.exports = (sequelize, DataTypes) => {
  const Certificate = sequelize.define('Certificate', {
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    freezeTableName: true,
  });
  Certificate.associate = function(models) {
  };
  return Certificate;
};