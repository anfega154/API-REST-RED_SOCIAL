const express = require('express')
const router = express.Router();
const UserControler = require('../controllers/user');
const check = require('../middlewares/auth')

router.get("/prueba",check.auth,UserControler.prueba);
router.post("/register",UserControler.register);
router.post("/login",UserControler.login);


module.exports=router;