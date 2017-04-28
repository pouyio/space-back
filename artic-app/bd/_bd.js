var bd = {};


bd.user = require('./userCommands.js') ;
bd.challenge = require('./challengeCommands.js') ;
bd.season = require('./seasonCommands.js') ;
bd.message = require('./messageCommands.js');
bd.participation = require('./participationCommands.js');
bd.valoration = require('./valorationCommands.js');
module.exports = bd;
