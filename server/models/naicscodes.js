'use strict';
module.exports = (sequelize, DataTypes) => {
  const NaicsCodes = sequelize.define('NaicsCodes', {
    value: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    freezeTableName: true,
  });
  NaicsCodes.associate = function(models) {
    NaicsCodes.belongsTo(models.SupplierInfo, {
      foreignKey: 'supplierInfoId',
      onDelete: 'CASCADE',
    });
  };
  return NaicsCodes;
};