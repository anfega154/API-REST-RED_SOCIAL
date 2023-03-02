const express = require('express')
const router = express.Router();
const UserControler = require('../controllers/publication');

router.get("/publication", UserControler.pruebaPublication);


module.exports=router;