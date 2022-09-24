var jwt=require('jwt-simple');
var moment=require('moment');
var clave="Clave-Secreta";

exports.createToken = function(User){
    var payload={
        sub:User._id,
        name:User.Usuario,
        Rol:User.Rol,
        iat:moment().unix(),
        exp:moment().add(30,'days').unix
    };
    return jwt.encode(payload,clave);
};