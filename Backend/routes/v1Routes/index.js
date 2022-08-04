const router = require("express").Router();
const {
  createProduct,
  getValueUom,
  getAllProduct,
  getProductById,
  deleteProduct,
  updateProduct,
} = require("../../controller/index");

router.post("/products", createProduct);
router.get("/products", getAllProduct);
router.get("/products/:id", getProductById);
router.delete("/products/:id", deleteProduct);
router.put("/products/:id", updateProduct);
router.get("/uom", getValueUom);

module.exports = router;
