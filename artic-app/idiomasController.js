var express = require('express');
var router = express.Router();
var bd = require('./bd/bd.js');

router.get('/user/:userId', function(req, res) {
    bd.idioma.getIdiomasUser(req.params.userId).then(function(result){
        res.json(result);
    }).catch(function(error){
        res.send(error);
    });
});

router.get('/', function(req, res) {
    bd.idioma.getIdiomas().then(function(result){
        res.json(result);
    }).catch(function(error){
        res.send(error);
    });
});





module.exports = router;
