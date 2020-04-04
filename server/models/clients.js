'use strict';
module.exports = (sequelize, DataTypes) => {
  const Clients = sequelize.define('Clients', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {});
  Clients.associate = function(models) {
    Clients.belongsTo(models.SupplierInfo, {
      foreignKey: 'supplierInfoId',
      onDelete: 'CASCADE',
    });
  };
  return Clients;
};