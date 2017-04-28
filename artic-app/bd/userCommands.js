var mysql = require('./mysql.js');

var user ={};

user.getUser = function(){
    return new Promise(function(resolve, reject) {
        mysql.query('select * from space_app.user where id =  ' +id,  function (err, rows, fields) {
            if (err){
              return reject(err);
            };
            resolve(rows);
        });
    });
};

user.getUsers = function(id){
    return new Promise(function(resolve, reject) {
        mysql.query('select * from space_app.user', function (err, rows, fields) {
            if (err){
              return reject(err);
            };
            resolve(rows);
        });
    });
};

module.exports = user;
