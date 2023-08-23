"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("bands", [
      {
        name: "Kamikazee",
        genre: "Pop-punk",
        founded: 1996,
        available_start_time: "18:00:00",
        end_time: "22:00:00",
      },
      {
        name: "Eraserheads",
        genre: "alternative",
        founded: 1992,
        available_start_time: "20:00:00",
        end_time: "23:00:00",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("bands", null, {});
  },
};
