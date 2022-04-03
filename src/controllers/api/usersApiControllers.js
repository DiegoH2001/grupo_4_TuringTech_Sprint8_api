const path = require('path')
const DB = require('../../database/models')

const sequelize = DB.sequelize

let usersApiControllers = {
  listarUsuario: (req, res) => {
    DB.User.findAll().then((users) => {
      return res.status(200).json({
        total: users.length,
        data: users,
        status: 200,
      })
    })
  },
}

module.exports = usersApiControllers
