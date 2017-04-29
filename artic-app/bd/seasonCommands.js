var mysql = require('./../config/mysql.js');

var user ={};

user.getSeasons = function(){
    return new Promise(function(resolve, reject) {
        mysql.query('select * from space_app.season ',  function (err, rows, fields) {
            if (err){
              return reject(err);
            };
            resolve(rows);
        });
    });
};
user.getSeason = function(id){
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
module.exports = user;
