const express = require('express')
const router = express.Router();

const indexCtrl = require('../controllers/index')

router.get('/', indexCtrl.index_get) // api call is index_get


module.exports = router;



