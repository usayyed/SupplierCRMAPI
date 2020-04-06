'use strict';
module.exports = (sequelize, DataTypes) => {
  const SupplierContact = sequelize.define('SupplierContact', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
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