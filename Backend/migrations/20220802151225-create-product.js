"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      code_produk: {
        type: Sequelize.STRING,
      },
      nama_produk: {
        type: Sequelize.STRING,
      },
      deskripsi_produk: {
        type: Sequelize.STRING,
      },
      harga_produk: {
        type: Sequelize.INTEGER,
      },
      uom: {
        type: Sequelize.ENUM("SHEET", "ROLL", "PCS"),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Products");
  },
};
