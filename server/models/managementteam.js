'use strict';
module.exports = (sequelize, DataTypes) => {
  const ManagementTeam = sequelize.define('ManagementTeam', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    }

  }, {});
  ManagementTeam.associate = function(models) {
    ManagementTeam.belongsTo(models.SupplierInfo, {
      foreignKey: 'supplierInfoId',
      onDelete: 'CASCADE',
    });
  };
  return ManagementTeam;
};