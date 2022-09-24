'use strict'
var Comentario=require('../models/Comentarios.models')


var Comentariocontroller={

    getComentario:(req, res)=>{
        Comentario.find((err, Comentario)=>{
            if(err) return res.status(500).send({message: "Error en el servidor" + err});
            if(!Comentario) return res.status(404).send({message:"No se encontraron Comentarios"})
            if(Comentario) return res.status(200).send({Comentario: Comentario})
        });

    }

}

module.exports= Comentariocontroller;