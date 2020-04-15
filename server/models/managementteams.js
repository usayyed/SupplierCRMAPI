'use strict';
module.exports = (sequelize, DataTypes) => {
  const ManagementTeams = sequelize.define('ManagementTeams', {
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    freezeTableName: true,
  });
  ManagementTeams.associate = function(models) {
    ManagementTeams.belongsTo(models.SupplierInfo, {
      foreignKey: 'supplierInfoId',
      onDelete: 'CASCADE',
    });
  };
  return ManagementTeams;
};