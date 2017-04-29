var mysql = require('./../config/mysql.js');
var nested = require('node-mysql-nesting');
var commands ={};

commands.getSeasons = function(){
    return new Promise(function(resolve, reject) {
        mysql.query('select * from space_app.season ',  function (err, rows, fields) {
            if (err){
              return reject(err);
            };
            resolve(rows);
        });
    });
};
commands.getSeason = function(id){
    return new Promise(function(resolve, reject) {
      var q ="select * from space_app.season where id = ? ";

        mysql.query(q, id, function (err, rows, fields) {
            if (err){
              return reject(err);
            };
            resolve(rows);
        });
    });
};

commands.getSeasonChallenges = function(id){
    return new Promise(function(resolve, reject) {
        mysql.query( 'select * from space_app.challenge  where challenge.season =  ?',id,  function (err, rows, fields) {
            if (err){
              return reject(err);
            };
            resolve(rows);
        });
    });
};

module.exports = commands;
