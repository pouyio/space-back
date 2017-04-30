var express = require('express');
var router = express.Router();
var services = require('./../services/_services.js');

router.get('/challenges', function(req, res) {
    if(req.query.current){
      services.season.getCurrentSeason(true, req.user.id).then(function(result){
          res.json(result);
      }).catch(function(error){
          res.send(error);
      });


    }else{
      services.season.getSeasonsChallenges(req.user.id).then(function(result){
          res.json(result);
      }).catch(function(error){
          res.send(error);
      });
    }
});



router.get('/:id/challenges', function(req, res) {
    services.season.getSeasonChallenges(req.params.id,req.user.id).then(function(result){
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


    if(req.query.current){
      services.season.getCurrentSeason(false).then(function(result){
          res.json(result);
      }).catch(function(error){
          res.send(error);
      });


    }else{
      services.season.getSeasons().then(function(result){
          res.json(result);
      }).catch(function(error){
          res.send(error);
      });
    }


});





module.exports = router;
