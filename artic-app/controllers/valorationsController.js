var express = require('express');
var router = express.Router();
var services = require('./../services/_services.js');

router.get('/:id', function(req, res) {
    services.valoration.getValoration(req.params.id).then(function(result){
        res.json(result);
    }).catch(function(error){
        res.send(error);
    });
});

router.get('/', function(req, res) {
    services.valoration.getValorations().then(function(result){
        res.json(result);
    }).catch(function(error){
        res.send(error);
    });
});

router.post('/', function(req, res) {
  services.valoration.postValorations(req.params).then(function(result){
      res.json(result);
  }).catch(function(error){
      res.send(error);
  });
})





module.exports = router;
