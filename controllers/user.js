const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require('../services/jwt')

const prueba =(req,res)=>{

  return res.status(200).json({

    status:"success",
    message:"prueba exitosa",
    user:req.user
  })
}

const register = async (req, res) => {
  try {
    let params = req.body;

    if (!params.name || !params.email || !params.password || !params.nick) {
      return res.status(400).json({
        status: "error",
        message: "Faltan datos por enviar",
      });
    }

    const existingUser = await User.findOne({
      $or: [
        { email: params.email.toLowerCase() },
        { nick: params.nick.toLowerCase() },
      ],
    });

    if (existingUser) {
      return res.status(400).json({
        status: "error",
        message: "El usuario ya existe",
      });
    }

    let pwd = await bcrypt.hash(params.password, 10);
    params.password = pwd;

    let user_to_save = new User(params);

    user_to_save.save();

    return res.status(200).json({
      status: "success",
      message: "Creado con exito",
      user_to_save,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "error",
      message: "Ocurrió un error al crear el usuario",
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        status: "error",
        message: "Faltan datos por enviar",
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        status: "error",
        message: "Usuario no existe",
      });
    }

    const pwd = await bcrypt.compare(password, user.password);

    if (!pwd) {
      return res.status(400).json({
        status: "error",
        message: "Contraseña incorrecta",
      });
    }
// hacer  un token 
const token=jwt.createToken(user);


    return res.status(200).json({
      status: "success",
      message: "Login exitoso",
      user:{
        id:user._id,
        name:user.name,
        nick:user.nick
      },
      token
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: "error",
      message: "Ocurrió un error",
    });
  }
};


module.exports = {
  register,
  login,
  prueba,
};
