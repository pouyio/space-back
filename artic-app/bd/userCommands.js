var mysql = require('./mysql.js');

var user ={};

user.getUser = function(){
    return new Promise(function(resolve, reject) {
        mysql.query('select * from BuddyApp.user where iduser= ' +id,  function (err, rows, fields) {
            if (err){
              return reject(err);
            };
            resolve(rows);
        });
    });
};

user.getUsers = function(id){
    return new Promise(function(resolve, reject) {
        mysql.query('select * from BuddyApp.user', function (err, rows, fields) {
            if (err){
              return reject(err);
            };
            resolve(rows);
        });
    });
};

module.exports = user;
