var mysql = require('./../config/mysql.js');
var nested = require('node-mysql-nesting');
var commands ={};




commands.getChallenges = function(){
    return new Promise(function(resolve, reject) {
        var nestingOptions = [
           { tableName : 'season', pkey: 'id'},
           { tableName : 'challenge', pkey: 'id', fkeys:[{table:'season',col:'season'}]}
        ];
        mysql.query({sql: 'select * from space_app.season season  left join space_app.challenge challenge on challenge.season = season.id ', nestTables: true},  function (err, rows, fields) {
            if (err){
              return reject(err);
            };
            resolve(nested.convertToNested(rows, nestingOptions));
        });
    });
};

commands.getChallenge = function(userId){
    return new Promise(function(resolve, reject) {
      var q ="select * from space_app.challenge where id = ? ";

        mysql.query(q, userId, function (err, rows, fields) {
            if (err){
              return reject(err);
            };
            resolve(rows);
        });
    });
};
module.exports = commands;
