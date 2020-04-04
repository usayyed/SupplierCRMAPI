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
    city: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    state: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    postalCode: {
      type: DataTypes.INTEGER,
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

  }, {});
  SupplierInfo.associate = function(models) {
    SupplierInfo.hasMany(models.Services, {
      foreignKey: 'supplierInfoId',
      as: 'services',
    })

    SupplierInfo.hasMany(models.ManagementTeam, {
      foreignKey: 'supplierInfoId',
      as: 'managementTeams',
    })

    // SupplierInfo.hasOne(models.SupplierContact, {
    //   foreignKey: 'supplierInfoId',
    //   as: 'supplierContacts',
    // })

    // SupplierInfo.hasOne(models.AdminsitrativeContact, {
    //   foreignKey: 'supplierInfoId',
    //   as: 'supplierContacts',
    // })

    // SupplierInfo.hasOne(models.SalesContact, {
    //   foreignKey: 'supplierInfoId',
    //   as: 'supplierContacts',
    // })

    SupplierInfo.hasMany(models.CdwContact, {
      foreignKey: 'supplierInfoId',
      as: 'supplierContacts',
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