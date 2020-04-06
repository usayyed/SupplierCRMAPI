'use strict';
module.exports = (sequelize, DataTypes) => {
  const Awards = sequelize.define('Awards', {
    value: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    freezeTableName: true,
  });
  Awards.associate = function(models) {
    Awards.belongsTo(models.SupplierInfo, {
      foreignKey: 'supplierInfoId',
      onDelete: 'CASCADE',
    });
  };
  return Awards;
};