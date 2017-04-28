var mysql = require('./mysql.js');

var user ={};

user.getFotos = function(){
    return new Promise(function(resolve, reject) {
        mysql.query('select * from BuddyApp.fotos ',  function (err, rows, fields) {
            if (err){
              return reject(err);
            };
            resolve(rows);
        });
    });
};



user.getFotosUser = function(userId){
    return new Promise(function(resolve, reject) {
        mysql.query('select * from BuddyApp.fotos where  user = ' +userId,  function (err, rows, fields) {
            if (err){
              return reject(err);
            };
            resolve(rows);
        });
    });
};


module.exports = user;
