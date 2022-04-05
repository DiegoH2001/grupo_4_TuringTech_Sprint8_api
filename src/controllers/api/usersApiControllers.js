const { count } = require("console");
const path = require("path");
const DB = require("../../database/models");
const sequelize = DB.sequelize;


let usersApiControllers = {
    listarUsuario: (req, res) => {
    DB.User
    .findAll()
    .then((usersDB) => {
        let users = [];
        usersDB.forEach(user => {
            let userForEach = {
                id: user.id,
                name: user.user_fullname,
                email: user.user_email,
                detail:`api/usersApi/${user.id}` 

            };
            users.push(userForEach);
        })
        let respuesta = {
            meta: {
                status:200,
                url:'api/usersApi'
            },
            count: users.length,
            data: users
        }
        res.status(200).json(respuesta);
    })
    .catch(error =>
        res.send(error))
    },

    detalleUsuario: (req,res) => {

    DB.User.findByPk(req.params.id, {
        include: ['rol']
    })
    .then(user => {
        
        let response = {
            meta: {
                status:200,
                url: `/api/detalleusuario/:'${user.id}`,
            },
            data: {
            id: user.id,
            name: user.user_fullname,
            email: user.user_email,
            avatar: user.imageUser,
            dni: user.user_dni,
            cellphone: user.user_cellphone,
            administrator: user.administrator
        },
        }           
            
            res.json(response);
        })
}
};


module.exports = usersApiControllers;

