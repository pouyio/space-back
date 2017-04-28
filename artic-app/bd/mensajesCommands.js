var mysql = require('./mysql.js');

var user ={};

user.getMensajes = function(){
    return new Promise(function(resolve, reject) {
        mysql.query('select * from BuddyApp.mensajes ',  function (err, rows, fields) {
            if (err){
              return reject(err);
            };
            resolve(rows);
        });
    });
};



user.getMensajesUser = function(userId){
    return new Promise(function(resolve, reject) {
      var q ="select * from BuddyApp.mensajes "+
             " where from = " + userId +
             " or to = " + userId;

        mysql.query(q,  function (err, rows, fields) {
            if (err){
              return reject(err);
            };
            resolve(rows);
        });
    });
};


module.exports = user;
