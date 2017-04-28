var mysql = require('./mysql.js');

var user ={};

user.getReservas = function(){
    return new Promise(function(resolve, reject) {
        mysql.query('select * from BuddyApp.reserva ',  function (err, rows, fields) {
            if (err){
              return reject(err);
            };
            resolve(rows);
        });
    });
};



user.getReservasUser = function(userId){
    return new Promise(function(resolve, reject) {
      var q ="select * from BuddyApp.reserva "+
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
