var mysql = require('./mysql.js');

var user ={};

user.getUserNotifications = function(userId){
    return new Promise(function(resolve, reject) {
        mysql.query('select * from BuddyApp.notificaciones where user= ' +userId,  function (err, rows, fields) {
            if (err){
              return reject(err);
            };
            resolve(rows);
        });
    });
};

user.getNotifications = function(id){
    return new Promise(function(resolve, reject) {
        mysql.query('select * from BuddyApp.notificaciones', function (err, rows, fields) {
            if (err){
              return reject(err);
            };
            resolve(rows);
        });
    });
};

module.exports = user;
