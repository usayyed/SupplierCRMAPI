'use strict';
module.exports = (sequelize, DataTypes) => {
  const Awards = sequelize.define('Awards', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {});
  Awards.associate = function(models) {
    Awards.belongsTo(models.SupplierInfo, {
      foreignKey: 'supplierInfoId',
      onDelete: 'CASCADE',
    });
  };
  return Awards;
};