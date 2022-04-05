const express = require("express");
const router = express.Router();
const apiController = require("../../controllers/api/productApiControllers");

router.get("/listarProducto", apiController.listarProductos);
router.get("/:id", apiController.detailProductos)

module.exports = router;
