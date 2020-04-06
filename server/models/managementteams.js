'use strict';
module.exports = (sequelize, DataTypes) => {
  const ManagementTeams = sequelize.define('ManagementTeams', {
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