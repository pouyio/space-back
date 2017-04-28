var services = {};
services.challenge = require('./challengeService.js') ;
services.message = require('./messageService.js') ;
services.participation = require('./participationService.js') ;
services.season = require('./seasonService.js') ;
services.user = require('./userService.js') ;
services.valoration = require('./valorationService.js') ;

module.exports = services;
