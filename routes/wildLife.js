var express = require('express');
var router = express.Router();
var WildLife = require('../models/wildLife.js')

router.get('/', function(req, res){
  WildLife.all()
    .then((wildlife) => {
      res.json(wildlife)
    })
    .catch((error) => res.sendStatus(500).json({error}))
});


router.post('/', function(req, res){
  var attributes = req.body.wildlife
  if (!attributes) {
    return res.status(400).send({error: "No wildlife properties provided!"})
  }
  WildLife.create(attributes)
    .then((wildlife) => {
      res.json(wildlife)
    })
    .catch((error) => res.status(500).json({error}))
});

router.delete('/:id', function(req, res){
  var wildlife_id = req.params.id

  if (!wildlife_id) {
    return res.status(500).send({error: "No wildlife id provided!"})
  }

  WildLife.delete(wildlife_id)
    .then((wildlife) => {
      res.json(wildlife)
    })
    .catch((error) =>
    res.status(500).json({error}))
});

router.get('/display', function(req, res){
  res.render('display')
});


module.exports = router;
