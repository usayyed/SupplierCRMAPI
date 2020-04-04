'use strict';
module.exports = (sequelize, DataTypes) => {
  const SicCodes = sequelize.define('SicCodes', {
    number:{
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {});
  SicCodes.associate = function(models) {
    SicCodes.belongsTo(models.SupplierInfo, {
      foreignKey: 'supplierInfoId',
      onDelete: 'CASCADE',
    });
  };
  return SicCodes;
};