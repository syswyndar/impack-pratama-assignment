"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init(
    {
      code_produk: DataTypes.STRING,
      nama_produk: DataTypes.STRING,
      deskripsi_produk: DataTypes.TEXT,
      harga_produk: DataTypes.INTEGER,
      uom: DataTypes.ENUM("SHEET", "ROLL", "PCS"),
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
