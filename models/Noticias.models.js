var mongoose= require('mongoose');

var Schema=mongoose.Schema;

var NoticiasSchema= new Schema({

    Titulo:Schema.Types.String,
    Fecha:Schema.Types.String,
    Contenido:Schema.Types.String,
    IdUser:Schema.Types.ObjectId,
    IdCat:{type:Schema.ObjectId,ref:"Categoria"}

}, {collection:"Noticias"});
module.exports=mongoose.model("Noticias", NoticiasSchema);