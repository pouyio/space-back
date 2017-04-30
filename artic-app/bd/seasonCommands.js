var mysql = require('./../config/mysql.js');
var nested = require('node-mysql-nesting');
var nested = require('node-mysql-nesting');

var commands ={};

var nestingOptions = [
   { tableName : 'season', pkey: 'id'},
   { tableName : 'challenges', pkey: 'id', fkeys:[{table:'season',col:'season'}]},
   { tableName : 'participations', pkey: 'id', fkeys:[{table:'challenges',col:'challenge'}]}
 ];

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

commands.getSeasonChallenges = function(id, user){
    return new Promise(function(resolve, reject) {
      mysql.query({sql: `select * from space_app.season season
                        left join space_app.challenge challenges on challenges.season = season.id
                        left join space_app.participation participations on challenges.id = participations.challenge and participations.user = ?
                        where season.id = ? `, nestTables: true}, [user, id], function (err, rows, fields) {
          if (err){
            return reject(err);
          };
          resolve(nested.convertToNested(rows, nestingOptions));
      });
    });
};


commands.getCurrentSeason = function(id){
    return new Promise(function(resolve, reject) {
        mysql.query( 'SELECT * FROM space_app.season where id = (select max(id) from space_app.season);',  function (err, rows, fields) {
            if (err){
              return reject(err);
            };
            resolve(rows);
        });
    });
};


commands.getSeasonsChallenges = function(user){
  console.log(user)
    return new Promise(function(resolve, reject) {
            mysql.query({sql: `select * from space_app.season season
                          left join space_app.challenge challenges on challenges.season = season.id
                          left join space_app.participation participations on challenges.id = participations.challenge and participations.user = ?
                        ` ,nestTables: true}, user,  function (err, rows, fields) {
            if (err){
              return reject(err);
            };

            resolve(nested.convertToNested(rows, nestingOptions));
        });
    });
};

module.exports = commands;
