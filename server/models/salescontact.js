'use strict';
module.exports = (sequelize, DataTypes) => {
  const SalesContact = sequelize.define('SalesContact', {
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    phone: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
  }
},{
  freezeTableName: true,
});
  SalesContact.associate = function(models) {
    SalesContact.belongsTo(models.SupplierInfo, {
      foreignKey: 'supplierInfoId',
      onDelete: 'CASCADE',
    });
  };
  return SalesContact;
};