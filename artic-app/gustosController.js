var express = require('express');
var router = express.Router();
var bd = require('./bd/bd.js');


router.get('/', function(req, res) {
    bd.gusto.getGustos().then(function(result){
        res.json(result);
    }).catch(function(error){
        res.send(error);
    });
});





module.exports = router;
