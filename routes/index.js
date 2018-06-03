var express = require('express');
var router = express.Router();
var wildLife = require('../models/wildLife.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Forager' });
});


module.exports = router;
