var mysql = require('./../config/mysql.js');

var user ={};

user.getChallenges = function(){
    return new Promise(function(resolve, reject) {
        mysql.query('select * from space_app.challenge ',  function (err, rows, fields) {
            if (err){
              return reject(err);
            };
            resolve(rows);
        });
    });
};
user.getChallenge = function(userId){
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
module.exports = user;
