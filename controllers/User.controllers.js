'use strict'
var User = require('../models/User.models')
var bcrypt = require('bcrypt-nodejs')
var jwt = require('../Services/jwt.js')

//Funcion registro de usuario
function prueba(req, res) {
    res.status(200).send({ message: "BIENVENIDO" });
}


function register(req, res) {


    var params = req.body;
    var user = new User();

    user.Usuario = params.Usuario;
    user.Rol = "Admin";

    if (params.Contrasena) {
        bcrypt.hash(params.Contrasena, null, null, (err, hash) => {

            user.Contrasena = hash;

            user.save((err, user) => {
                if (err) return res.status(500).send({ message: "Error en el servidor" + err });
                if (!user) return res.status(404).send({ message: "No se puede gaurdar usuario" + err })
                if (user) return res.status(200).send({ user: user })




            });
        });
    }

}

function login(req, res) {

    var params = req.body;

    var Usuario = params.Usuario;

    var Contrasena = params.Contrasena;

    User.findOne({ Usuario: Usuario }, (err, user) => {
        if (err) return res.status(500).send({ message: "Error en el servidor" + err });
        if (!user) return res.status(404).send({ message: "No existe el usuario" })
        if (user) {
            bcrypt.compare(Contrasena, user.Contrasena, function (err, check) {
                if (check) {


                    if (params.gethash) {
                        return res.status(200).send({ token: jwt.createToken(user) })
                    } else {
                        return res.status(200).send({ user: user });
                    }

                }
            });
        }

    });
}

function updateUser(req, res) {
    let id = req.params.id;
    let params = req.body;

    if (req.user.sub != id) {
        return res.status(404).send({ message: "No esta autorizado para entrar" })
    }
    User.findByIdAndUpdate(id, params, (err, userupdate) => {
        if (err) return res.status(500).send({ message: "Error en el servidor" + err });
        if (!userupdate) return res.status(404).send({ message: "No se puede gaurdar usuario" + err })
        if (userupdate) return res.status(200).send({ userupdate: userupdate })

    });

}


module.exports = { register, login, prueba, updateUser };
