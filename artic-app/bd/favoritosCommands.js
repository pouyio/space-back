var mysql = require('./mysql.js');

var user ={};

user.getFavoritos = function(){
    return new Promise(function(resolve, reject) {
        mysql.query('select * from BuddyApp.favoritos ',  function (err, rows, fields) {
            if (err){
              return reject(err);
            };
            resolve(rows);
        });
    });
};



user.getFavoritosUser = function(userId){
    return new Promise(function(resolve, reject) {
        mysql.query('select * from BuddyApp.favoritos where  user = ' +userId,  function (err, rows, fields) {
            if (err){
              return reject(err);
            };
            resolve(rows);
        });
    });
};


module.exports = user;
