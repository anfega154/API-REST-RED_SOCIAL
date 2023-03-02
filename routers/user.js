const express = require('express')
const router = express.Router();
const UserControler = require('../controllers/user');

router.get("/user", UserControler.pruebaUser);


module.exports=router;