var mongoose= require('mongoose');

var Schema=mongoose.Schema;

var UserSchema= new Schema({

    Usuario:Schema.Types.String,
    Contrasena:Schema.Types.String,
    Rol:Schema.Types.String,

}, {collection:"User" });
module.exports=mongoose.model("User", UserSchema);