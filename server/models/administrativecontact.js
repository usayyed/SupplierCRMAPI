"use strict";
module.exports = (sequelize, DataTypes) => {
  const AdministrativeContact = sequelize.define(
    "AdministrativeContact",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      phone: {
        type: DataTypes.BIGINT,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
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
