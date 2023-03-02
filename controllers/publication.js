const pruebaPublication=(req,res)=>{
    return res.status(200).json({

       mensaje: "prueba conatrolador publication "
    })
}

module.exports= {
    pruebaPublication
}