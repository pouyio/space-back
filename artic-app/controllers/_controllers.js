var controllers = {};

controllers.users         = require('./usersController.js');
controllers.challenges    = require('./challengesController.js');
controllers.seasons       = require('./seasonsController.js');
controllers.messages      = require('./messagesController.js');
controllers.participations = require('./participationsController.js');
controllers.valorations   = require('./valorationsController.js');

module.exports =  controllers;
