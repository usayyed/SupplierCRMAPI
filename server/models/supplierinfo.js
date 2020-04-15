'use strict';
module.exports = (sequelize, DataTypes) => {
  const SupplierInfo = sequelize.define('SupplierInfo', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    postalCode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    website: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    duns: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

  }, {
    freezeTableName: true,
  });
  SupplierInfo.associate = function(models) {
    SupplierInfo.hasMany(models.Services, {
      foreignKey: 'supplierInfoId',
      as: 'services',
    })

    SupplierInfo.hasMany(models.ManagementTeams, {
      foreignKey: 'supplierInfoId',
      as: 'managementTeams',
    })

    SupplierInfo.hasMany(models.SupplierContact, {
      foreignKey: 'supplierInfoId',
      as: 'supplierContact',
    })

    SupplierInfo.hasMany(models.AdministrativeContact, {
      foreignKey: 'supplierInfoId',
      as: 'administrativeContact',
    })

    SupplierInfo.hasMany(models.SalesContact, {
      foreignKey: 'supplierInfoId',
      as: 'salesContact',
    })

    SupplierInfo.hasMany(models.CdwContacts, {
      foreignKey: 'supplierInfoId',
      as: 'cdwContacts',
    })

    SupplierInfo.hasMany(models.Products, {
      foreignKey: 'supplierInfoId',
      as: 'products',
    })

    SupplierInfo.hasMany(models.NaicsCodes, {
      foreignKey: 'supplierInfoId',
      as: 'naicsCodes',
    })

    SupplierInfo.hasMany(models.SicCodes, {
      foreignKey: 'supplierInfoId',
      as: 'sicCodes',
    })

    SupplierInfo.hasMany(models.Certifications, {
      foreignKey: 'supplierInfoId',
      as: 'certifications',
    })

    SupplierInfo.hasMany(models.Awards, {
      foreignKey: 'supplierInfoId',
      as: 'awards',
    })

    SupplierInfo.hasMany(models.Clients, {
      foreignKey: 'supplierInfoId',
      as: 'clients',
    })

    SupplierInfo.hasMany(models.Partners, {
      foreignKey: 'supplierInfoId',
      as: 'partners',
    })
  
  };
  return SupplierInfo;
};