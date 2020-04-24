"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addIndex("Services", ["supplierInfoId"])
    .then(() => queryInterface.addIndex("ManagementTeams", ["supplierInfoId"]))
    .then(() => queryInterface.addIndex("SupplierContact", ["supplierInfoId"]))
    .then(() => queryInterface.addIndex("AdministrativeContact", ["supplierInfoId"]))
    .then(() => queryInterface.addIndex("SalesContact", ["supplierInfoId"]))
    .then(() => queryInterface.addIndex("CdwContacts", ["supplierInfoId"]))
    .then(() => queryInterface.addIndex("Products", ["supplierInfoId"]))
    .then(() => queryInterface.addIndex("NaicsCodes", ["supplierInfoId"]))
    .then(() => queryInterface.addIndex("SicCodes", ["supplierInfoId"]))
    .then(() => queryInterface.addIndex("Certifications", ["supplierInfoId"]))
    .then(() => queryInterface.addIndex("Awards", ["supplierInfoId"]))
    .then(() => queryInterface.addIndex("Clients", ["supplierInfoId"]))
    .then(() => queryInterface.addIndex("Partners", ["supplierInfoId"]))
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropIndex("Services", ["supplierInfoId"])
    .then(() => queryInterface.dropIndex("ManagementTeams", ["supplierInfoId"]))
    .then(() => queryInterface.dropIndex("SupplierContact", ["supplierInfoId"]))
    .then(() => queryInterface.dropIndex("AdministrativeContact", ["supplierInfoId"]))
    .then(() => queryInterface.dropIndex("SalesContact", ["supplierInfoId"]))
    .then(() => queryInterface.dropIndex("CdwContacts", ["supplierInfoId"]))
    .then(() => queryInterface.dropIndex("Products", ["supplierInfoId"]))
    .then(() => queryInterface.dropIndex("NaicsCodes", ["supplierInfoId"]))
    .then(() => queryInterface.dropIndex("SicCodes", ["supplierInfoId"]))
    .then(() => queryInterface.dropIndex("Certifications", ["supplierInfoId"]))
    .then(() => queryInterface.dropIndex("Awards", ["supplierInfoId"]))
    .then(() => queryInterface.dropIndex("Clients", ["supplierInfoId"]))
    .then(() => queryInterface.dropIndex("Partners", ["supplierInfoId"]))
  },
};