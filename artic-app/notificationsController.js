var express = require('express');
var router = express.Router();
var bd = require('./bd/bd.js');

router.get('/user/:userId', function(req, res) {
    bd.notification.getUserNotifications(req.params.userId).then(function(result){
        res.json(result);
    }).catch(function(error){
        res.send(error);
    });
});

router.get('/', function(req, res) {
    bd.notification.getNotifications().then(function(result){
        res.json(result);
    }).catch(function(error){
        res.send(error);
    });
});

module.exports = router;
