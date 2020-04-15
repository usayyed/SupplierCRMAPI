"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("AdministrativeContact", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      phone: {
        type: Sequelize.BIGINT,
        allowNull: false
      },
      email: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      supplierInfoId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "SupplierInfo",
          key: "id",
          as: "supplierInfoId"
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("AdministrativeContact");
  }
};
