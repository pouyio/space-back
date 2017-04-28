var bd = {};


bd.user = require('./userCommands.js') ;
bd.notification = require('./notificationCommands.js') ;
bd.favorito = require('./favoritosCommands.js') ;
bd.foto = require('./fotosCommands.js') ;
bd.gusto = require('./gustosCommands.js') ;
bd.idioma = require('./idiomasCommands.js') ;
bd.mensaje = require('./mensajesCommands.js') ;
bd.reserva = require('./reservaCommands.js') ;
bd.valoracion = require('./valoracionCommands.js') ;


module.exports = bd;
