var mysql = require('./_mysql.js');

var user ={};

user.getMessages = function(){
    return new Promise(function(resolve, reject) {
        mysql.query('select * from space_app.message ',  function (err, rows, fields) {
            if (err){
              return reject(err);
            };
            resolve(rows);
        });
    });
};
user.getMessage = function(id){
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
module.exports = user;
