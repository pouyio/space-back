var mysql = require('./mysql.js');

var user ={};

user.getValoracion = function(){
    return new Promise(function(resolve, reject) {
        mysql.query('select * from BuddyApp.valoracion  ',  function (err, rows, fields) {
            if (err){
              return reject(err);
            };
            resolve(rows);
        });
    });
};



user.getValoracionUser = function(userId){
    return new Promise(function(resolve, reject) {
      var q ="select * from BuddyApp.valoracion "+
             " where user = " + userId +
             " or buddy = " + userId;

        mysql.query(q,  function (err, rows, fields) {
            if (err){
              return reject(err);
            };
            resolve(rows);
        });
    });
};


module.exports = user;
