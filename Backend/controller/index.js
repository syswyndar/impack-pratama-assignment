const { Product } = require("../models");

const createProduct = async (req, res) => {
  try {
    const { code_produk, nama_produk, deskripsi_produk, harga_produk, uom } =
      req.body;
    const product = await Product.create({
      code_produk,
      nama_produk,
      deskripsi_produk,
      harga_produk,
      uom,
    });
    res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: product,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const getValueUom = async (req, res) => {
  try {
    // const { uom } = req.body;
    const val = await Product.getAttributes().uom.values;
    res.status(200).json({
      success: true,
      message: "get value enum successfully",
      data: val,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const getAllProduct = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json({
      success: true,
      message: "get all product successfully",
      data: products,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    res.status(200).json({
      success: true,
      message: "get product by id successfully",
      data: product,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.destroy({
      where: {
        id,
      },
    });
    res.status(200).json({
      success: true,
      message: "delete product successfully",
      data: product,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { code_produk, nama_produk, deskripsi_produk, harga_produk, uom } =
      req.body;
    const product = await Product.update(
      {
        code_produk,
        nama_produk,
        deskripsi_produk,
        harga_produk,
        uom,
      },
      {
        where: {
          id,
        },
      }
    );
    res.status(200).json({
      success: true,
      message: "update product successfully",
      data: product,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports = {
  createProduct,
  getValueUom,
  getAllProduct,
  getProductById,
  deleteProduct,
  updateProduct,
};
