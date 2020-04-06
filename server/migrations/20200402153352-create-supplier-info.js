'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('SupplierInfo', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      state: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      postalCode: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      website: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      duns: {
        type: Sequelize.INTEGER,
        allowNull: false,
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('SupplierInfo');
  }
};