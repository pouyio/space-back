var express       = require('express');
var router        = express.Router();
var bodyParser    = require('body-parser');
var morgan        = require('morgan');
var jwt           = require('jsonwebtoken');
var bd            = require('./bd/bd.js');



var users         = require('./usersController.js');
var notifications = require('./notificationsController.js');
var favoritos     = require('./favoritosController.js');
var fotos         = require('./fotosController.js');
var gustos        = require('./gustosController.js');
var idiomas       = require('./idiomasController.js');
var mensajes      = require('./mensajesController.js');
var reserva       = require('./reservaController.js');
var valoracion    = require('./valoracionController.js');



router.use(function timeLog(req, res, next) {
  next();
});


router.use('/user', users);
router.use('/notification',notifications);
router.use('/favoritos', favoritos);
router.use('/fotos',fotos);
router.use('/gustos',gustos);
router.use('/idiomas',idiomas);
router.use('/mensajes',mensajes);
router.use('/reserva',reserva);
router.use('/valoracion',valoracion);


router.get('/', function(req, res) {
  res.send("Hola jajaja");
});


module.exports = router;
