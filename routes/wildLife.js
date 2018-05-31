var express = require('express');
var router = express.Router();
var WildLife = require('../models/wildLife.js')

router.get('/', function(req, res){
  var query = wildLife.find({});
  query.exec(function(err, wildlife){
    if(err){
      res.send(err);
    } else{
      res.json(wildlife);
    }
  });
});


router.post('/', function(req, res){
  var attributes = req.body.wildlife
  if (!attributes) {
    return res.status(400).send({error: "No wild life properties provided!"})
  }

  WildLife.create(attributes)
    .then((wildlife) => {
      res.json(wildlife)
    })
    .catch((error) => res.status(500).json({error}))
})


module.exports = router;