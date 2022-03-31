
const path = require("path");
const DB = require ('../../database/models')

const sequelize = DB.sequelize


let usersApiControllers = {
    listarUsuario : (req , res) => {
        DB.User.findAll().then(users => res.json(users))
        }
    }

    module.exports = usersApiControllers