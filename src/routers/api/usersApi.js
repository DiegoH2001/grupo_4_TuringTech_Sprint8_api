const express = require("express")
const router = express.Router()
const apiController = require("../../controllers/api/usersApiControllers")

router.get("/listarUsuario", apiController.listarUsuario)

module.exports = router
