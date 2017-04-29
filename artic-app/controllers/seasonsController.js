var express = require('express');
var router = express.Router();
var services = require('./../services/_services.js');

router.get('/challenges', function(req, res) {
  console.log(req.query)

    if(req.query.current){
      console.log(req.query.current)
      services.season.getSeasonChallenges(3).then(function(result){
          res.json(result);
      }).catch(function(error){
          res.send(error);
      });
    }else{
      services.challenge.getChallenges().then(function(result){
          res.json(result);
      }).catch(function(error){
          res.send(error);
      });
    }
});



router.get('/:id/challenges', function(req, res) {
    services.season.getSeasonChallenges(req.params.id).then(function(result){
        res.json(result);
    }).catch(function(error){
        res.send(error);
    });
});



router.get('/:id', function(req, res) {
    services.season.getSeason(req.params.id).then(function(result){
        res.json(result);
    }).catch(function(error){
        res.send(error);
    });
});

router.get('/:id/challenges', function(req, res) {
    services.season.getSeason(req.params.id).then(function(result){
        res.json(result);
    }).catch(function(error){
        res.send(error);
    });
});


router.get('/', function(req, res) {
    services.season.getSeasons().then(function(result){
        res.json(result);
    }).catch(function(error){
        res.send(error);
    });
});





module.exports = router;
