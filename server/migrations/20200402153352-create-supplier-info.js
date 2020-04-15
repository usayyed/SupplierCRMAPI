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
        type: Sequelize.TEXT,
        allowNull: false,
      },
      image: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      address: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      city: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      state: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      postalCode: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      website: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
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