'use strict';
module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    value: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  }, {
    freezeTableName: true,
  });
  Products.associate = function(models) {
    Products.belongsTo(models.SupplierInfo, {
      foreignKey: 'supplierInfoId',
      onDelete: 'CASCADE',
    });
  };
  return Products;
};