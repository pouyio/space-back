var express       = require('express');
var router        = express.Router();
var bodyParser    = require('body-parser');
var morgan        = require('morgan');
var jwt           = require('jsonwebtoken');
var controllers   =require('./controllers/_controllers.js');

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-srf-token");
  next();
});

var responseHeaders = {
    "access-control-allow-origin": "*",
    "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
    "access-control-allow-headers": "content-type, accept",
    "access-control-max-age": 10,
    "Content-Type": "application/json"
};

router.use(function(req,res, next){
  if ( req.path.includes('/user/login')) return next();

  // Inside a request handler method
  if (req.method === "OPTIONS") {
    res.writeHead(statusCode, responseHeaders);
    res.end();
  }

  var decoded = jwt.verify(req.get('token'), 'secret');
  console.log(decoded.data)
  next();
});



router.use('/user', controllers.users);
router.use('/challenge', controllers.challenges);
router.use('/season', controllers.seasons);
router.use('/message', controllers.messages);
router.use('/participation', controllers.participations);
router.use('/valoration', controllers.valorations);
router.use('/quest', controllers.quests);

router.get('/', function(req, res) {
res.send("Hola API");
});


module.exports = router;
