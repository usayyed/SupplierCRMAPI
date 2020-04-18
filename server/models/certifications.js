'use strict';
module.exports = (sequelize, DataTypes) => {
  const Certifications = sequelize.define('Certifications', {
      name: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      number: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      expiration: {
        type: DataTypes.DATE,
        allowNull: false,
      },
  }, {
    freezeTableName: true,
  });
  Certifications.associate = function(models) {
    Certifications.belongsTo(models.SupplierInfo, {
      foreignKey: 'supplierInfoId',
      onDelete: 'CASCADE',
    });
  };
  return Certifications;
};