const express = require('express')
const router = express.Router();
const UserControler = require('../controllers/follow');

router.get("/follow", UserControler.pruebaFollow);


module.exports=router;