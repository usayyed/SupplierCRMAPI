"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addIndex("Users", ["username"]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropIndex("Users", ["username"]);
  },
};
