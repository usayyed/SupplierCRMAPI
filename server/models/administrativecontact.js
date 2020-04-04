'use strict';
module.exports = (sequelize, DataTypes) => {
  const administrativeContact = sequelize.define('administrativeContact', {
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
  administrativeContact.associate = function(models) {
    administrativeContact.belongsTo(models.SupplierInfo, {
      foreignKey: 'supplierInfoId',
      onDelete: 'CASCADE',
    });
  };
  return administrativeContact;
};