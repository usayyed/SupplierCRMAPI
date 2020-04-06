'use strict';
module.exports = (sequelize, DataTypes) => {
  const CdwContacts = sequelize.define('CdwContacts', {
    name:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    email:{
      type: DataTypes.STRING,
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