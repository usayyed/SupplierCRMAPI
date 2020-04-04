'use strict';
module.exports = (sequelize, DataTypes) => {
  const AdministrativeContact = sequelize.define('AdministrativeContact', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {});
  AdministrativeContact.associate = function(models) {
    AdministrativeContact.belongsTo(models.SupplierInfo, {
      foreignKey: 'supplierInfoId',
      onDelete: 'CASCADE',
    });
  };
  return AdministrativeContact;
};