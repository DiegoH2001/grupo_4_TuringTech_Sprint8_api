const express = require("express");
const router = express.Router();
const apiController = require("../../controllers/api/productApiControllers");

router.get("/listarProducto", apiController.listar);

module.exports = router;
