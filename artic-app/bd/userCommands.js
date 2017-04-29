var mysql = require('./../config/mysql.js');

var user ={};

user.getUser = function(id){
    return new Promise(function(resolve, reject) {
        mysql.query('select * from space_app.user where id =  ' +id,  function (err, rows, fields) {
            if (err){
              reject(err);
            };
            resolve(rows);
        });
    });
};

user.getUsers = function(){
    return new Promise(function(resolve, reject) {
        mysql.query('select * from space_app.user', function (err, rows, fields) {
            if (err){
              reject(err);
            };
            resolve(rows);
        });
    });
};


user.login = (email) => {
  return new Promise((resolve, reject)=>{
    mysql.query('select * from space_app.user where email = ?',email, function (err, rows, fields) {
        if (err){
          reject(err);
        };
        console.log(rows);
        if(!rows || rows.length !==1)
          reject("error");
        resolve(rows);
    });
  })
};
module.exports = user;
