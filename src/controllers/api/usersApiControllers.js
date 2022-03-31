const res = require("express/lib/response");
const path = require("path");
const DB = require ('../../database/models')

const sequelize = DB.sequelize


let usersApiControllers = {
    listar : (req , res) => {
        DB.User.findAll().then(users => res.json(users))
        }
    }

    module.exports = usersApiControllers