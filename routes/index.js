var express = require('express');
var router = express.Router();
var wildLife = require('../models/wildLife.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/wildlife', function(req, res){
  var query = wildLife.find({});
  query.exec(function(err, wildlife){
    if(err){
      res.send(err);
    } else{
      res.json(wildlife);
    }
  })
});


router.post('/wildlife', function(req, res){
  var newWildLife = new wildLife(req.body);

  newWildLife.save(function(err){
    if(err){
      res.send(err);
    } else{
      res.json(req.body);
    }
  })
}
)

module.exports = router;
