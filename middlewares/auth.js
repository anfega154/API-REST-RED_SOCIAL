const jwt = require('jwt-simple')
const moment =require('moment')

const libjwt=require('../services/jwt')
const secret =libjwt.secret;


//MIDDLEWARE de autenticacion
exports.auth = (req,res,next)=>{

    //comprobar si llega la cabecera 

    if(!req.headers.authorization){
        return res.status(403).send({
            status:"error",
            message:"la peticion no tien la cabecera de autenticacion"
        })
    }
// limpiar el token 
let token = req.headers.authorization.replace(/['"]+/g,'');

// decodificar el token 
try {
    
    let payload=jwt.decode(token,secret);

    // comprobar expiracion 
    if(payload.exp<=moment().unix()){
        return res.status(401).send({
            status:"error",
            message:"el token ha expirado",
            error
        });
    }
    // agregar datos a la request
req.user=payload;
} catch (error) {
    return res.status(404).sen({
        status:"error",
        message:"token invalido",
        error
    })
}


next();

}