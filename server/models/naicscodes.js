'use strict';
module.exports = (sequelize, DataTypes) => {
  const NaicsCodes = sequelize.define('NaicsCodes', {
    number:{
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {});
  NaicsCodes.associate = function(models) {
    NaicsCodes.belongsTo(models.SupplierInfo, {
      foreignKey: 'supplierInfoId',
      onDelete: 'CASCADE',
    });
  };
  return NaicsCodes;
};