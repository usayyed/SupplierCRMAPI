'use strict';
module.exports = (sequelize, DataTypes) => {
  const SupplierContact = sequelize.define('SupplierContact', {
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

  }, {
    freezeTableName: true,
  });
  SupplierContact.associate = function(models) {
    SupplierContact.belongsTo(models.SupplierInfo, {
      foreignKey: 'supplierInfoId',
      onDelete: 'CASCADE',
    });
  };
  return SupplierContact;
};