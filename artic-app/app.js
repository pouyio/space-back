var express       = require('express');
var router        = express.Router();
var bodyParser    = require('body-parser');
var morgan        = require('morgan');
var jwt           = require('jsonwebtoken');
var controllers   =require('./controllers/_controllers.js');



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
