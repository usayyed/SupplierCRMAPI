'use strict';
module.exports = (sequelize, DataTypes) => {
  const Partners = sequelize.define('Partners', {
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  }, {
    freezeTableName: true,
  });
  Partners.associate = function(models) {
    Partners.belongsTo(models.SupplierInfo, {
      foreignKey: 'supplierInfoId',
      onDelete: 'CASCADE',
    });
  };
  return Partners;
};