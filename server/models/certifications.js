'use strict';
module.exports = (sequelize, DataTypes) => {
  const Certifications = sequelize.define('Certifications', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      number: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      expiration: {
        type: DataTypes.DATE,
        allowNull: false,
      },
  }, {});
  Certifications.associate = function(models) {
    Certifications.belongsTo(models.SupplierInfo, {
      foreignKey: 'supplierInfoId',
      onDelete: 'CASCADE',
    });
  };
  return Certifications;
};