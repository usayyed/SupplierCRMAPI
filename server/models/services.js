'use strict';
module.exports = (sequelize, DataTypes) => {
  const Services = sequelize.define('Services', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    freezeTableName: true,
  });
  Services.associate = function(models) {
    Services.belongsTo(models.SupplierInfo, {
      foreignKey: 'supplierInfoId',
      onDelete: 'CASCADE',
    });
  };
  return Services;
};