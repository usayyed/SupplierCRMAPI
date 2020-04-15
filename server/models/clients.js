'use strict';
module.exports = (sequelize, DataTypes) => {
  const Clients = sequelize.define('Clients', {
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  }, {
    freezeTableName: true,
  });
  Clients.associate = function(models) {
    Clients.belongsTo(models.SupplierInfo, {
      foreignKey: 'supplierInfoId',
      onDelete: 'CASCADE',
    });
  };
  return Clients;
};