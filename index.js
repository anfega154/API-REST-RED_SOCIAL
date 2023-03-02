const { conecction } = require("./database/conecction");
conecction();
const express = require("express");
const cors=require("cors")
const app = express();
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//RUTAS



//ACARGAR RUTAS


const PORT = process.env.PORT || 2700;
app.listen(PORT, (req, res) => {
  console.log("server in  http://localHost:" + PORT);
});