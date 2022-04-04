const path = require("path");
const DB = require("../../database/models");

const sequelize = DB.sequelize;

let productApiControllers = {
  listar: (req, res) => {
    DB.Product
    .findAll()
    .then((products) => {
      return res.status(200).json({
        total: products.length,
        data: products,
        status: 200,
      })
    })
  },
}

module.exports = productApiControllers;
