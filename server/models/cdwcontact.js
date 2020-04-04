'use strict';
module.exports = (sequelize, DataTypes) => {
  const CdwContact = sequelize.define('CdwContact', {
    name:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    email:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },

  }, {});
  CdwContact.associate = function(models) {
    CdwContact.belongsTo(models.SupplierInfo, {
      foreignKey: 'supplierInfoId',
      onDelete: 'CASCADE',
    });
  };
  return CdwContact;
};