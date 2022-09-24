var mongoose= require('mongoose');

var Schema=mongoose.Schema;

var ComentariosSchema= new Schema({

    Comentario:Schema.Types.String,
    IdNoticia:Schema.Types.ObjectId

}, {collection:"Comentarios" });
module.exports=mongoose.model("Comentarios", ComentariosSchema);