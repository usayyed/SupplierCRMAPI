'use strict';
module.exports = (sequelize, DataTypes) => {
  const CdwContacts = sequelize.define('CdwContacts', {
    name:{
      type: DataTypes.TEXT,
      allowNull: false,
    },
    email:{
      type: DataTypes.TEXT,
      allowNull: false,
    },
    phone:{
      type: DataTypes.BIGINT,
      allowNull: false,
    },

  }, {
    freezeTableName: true,
  });
  CdwContacts.associate = function(models) {
    CdwContacts.belongsTo(models.SupplierInfo, {
      foreignKey: 'supplierInfoId',
      onDelete: 'CASCADE',
    });
  };
  return CdwContacts;
};