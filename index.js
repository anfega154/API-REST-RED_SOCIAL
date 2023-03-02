const { conecction } = require("./database/conecction");
conecction();
const express = require("express");
const cors=require("cors")
const app = express();
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//RUTAS

const routerUser = require('./routers/user');
const routerFollow= require('./routers/follow');
const routerPublication = require('./routers/publication');
app.use("api/",routerUser);
app.use("api/",routerFollow);
app.use("api/",routerPublication);
app.get("/",(req,res)=>{

  res.status(200).json({
    status: " success",
    mensaje: "Bienvenido"
  });
})





const PORT = process.env.PORT || 3700;
app.listen(PORT, (req, res) => {
  console.log("server in  http://localHost:" + PORT);
});