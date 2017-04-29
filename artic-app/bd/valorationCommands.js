var mysql = require('./../config/mysql.js');

var user ={};

user.getValorations = function(){
    return new Promise(function(resolve, reject) {
        mysql.query('select * from space_app.valoration ',  function (err, rows, fields) {
            if (err){
              return reject(err);
            };
            resolve(rows);
        });
    });
};
user.getValoration = function(id){
    return new Promise(function(resolve, reject) {
      var q ="select * from space_app.valoration where id = ? ";

        mysql.query(q, id, function (err, rows, fields) {
            if (err){
              return reject(err);
            };
            resolve(rows);
        });
    });
};
module.exports = user;
