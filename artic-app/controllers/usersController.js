var express = require('express');
var router = express.Router();
var services = require('./../services/_services.js');

router.get('/:id', function(req, res) {
    services.user.getUser(req.params.id).then(function(result){
        res.json(result);
    }).catch(function(error){
        res.send(error);
    });
});

router.get('/', function(req, res) {
    services.user.getUsers().then(function(result){
        res.json(result);
    }).catch(function(error){
        res.send(error);
    });
});

router.post('/login',function(req, res){
  services.user.login(req.body.email).then(function(result){
      res.json(result);
  }).catch(function(error){
      res.send(error);
  });
});


router.post('/', function(req, res){
  services.user.postUser(req.body).then(function(result){
      res.json(result);
  }).catch(function(error){
      res.send(error);
  });
});




module.exports = router;
