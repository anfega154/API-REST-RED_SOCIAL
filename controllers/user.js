
const pruebaUser=(req,res)=>{
     return res.status(200).json({

        mensaje: "prueba conatrolador user "
     })
}

module.exports={
   pruebaUser
} 