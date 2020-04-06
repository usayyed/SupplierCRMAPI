'use strict';
module.exports = (sequelize, DataTypes) => {
  const SicCodes = sequelize.define('SicCodes', {
    value:{
      type: DataTypes.BIGINT,
      allowNull: false,
    }
  }, {
    freezeTableName: true,
  });
  SicCodes.associate = function(models) {
    SicCodes.belongsTo(models.SupplierInfo, {
      foreignKey: 'supplierInfoId',
      onDelete: 'CASCADE',
    });
  };
  return SicCodes;
};