"use strict";
module.exports = (sequelize, DataTypes) => {
  const AdministrativeContact = sequelize.define(
    "AdministrativeContact",
    {
      name: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      phone: {
        type: DataTypes.BIGINT,
        allowNull: false
      },
      email: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    },
    {
      freezeTableName: true
    }
  );
  AdministrativeContact.associate = function(models) {
    AdministrativeContact.belongsTo(models.SupplierInfo, {
      foreignKey: "supplierInfoId",
      onDelete: "CASCADE"
    });
  };
  return AdministrativeContact;
};
