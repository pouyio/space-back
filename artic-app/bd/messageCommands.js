var mysql = require('./../config/mysql.js');

var commands ={};

commands.getMessages = function(){
    return new Promise(function(resolve, reject) {
        mysql.query('select * from space_app.message ',  function (err, rows, fields) {
            if (err){
              return reject(err);
            };
            resolve(rows);
        });
    });
};
commands.getMessage = function(id){
    return new Promise(function(resolve, reject) {
      var q ="select * from space_app.message where id = ? ";

        mysql.query(q, id, function (err, rows, fields) {
            if (err){
              return reject(err);
            };
            resolve(rows);
        });
    });
};
module.exports = commands;
