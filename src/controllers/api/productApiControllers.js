const path = require("path");
const DB = require("../../database/models");

const sequelize = DB.sequelize;

let productApiControllers = {
  listar: (req, res) => {
    DB.Product.findAll().then((product) => res.json(product));
  },
};

module.exports = productApiControllers;
