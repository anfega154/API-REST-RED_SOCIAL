const jwt = require('jwt-simple')
const moment =require('moment')

// clave secreta 

const secret = "CALVE_SECRETA_del_proyecto_DE_LA_RED_soCIAL_987987";

// generar el token 

const createToken=(user)=>{
const payload={
    id:user._id,
    name:user.name,
    surname: user.surname,
    nick: user.nick,
    email: user.email,
    role: user.role,
    imagen:user.image,
    iat:moment().unix(),
    exp:moment().add(30,"days").unix

};

return jwt.encode(payload,secret);
}

module.exports={
    createToken,
    secret
}