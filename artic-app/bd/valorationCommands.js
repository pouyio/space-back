var mysql = require('./../config/mysql.js');
var nested = require('node-mysql-nesting');

var commands ={};

var nestingOptions = [ { tableName : 'challenge', pkey: 'id', fkeys:[{table:'season',col:'season'}]},
   { tableName : 'participation', pkey: 'id', fkeys:[{table:'season',col:'season'}]},
   { tableName : 'user', pkey: 'id', fkeys:[{table:'season',col:'season'}]}
];

commands.getRandomValorations = function(userId){
    return new Promise(function(resolve, reject) {
        mysql.query('select * from space_app.valoration ',  function (err, rows, fields) {
            if (err){
              return reject(err);
            };
            resolve(rows);
        });
    });
};



commands.getValorations = function(){
    return new Promise(function(resolve, reject) {
        mysql.query('select * from space_app.valoration ',  function (err, rows, fields) {
            if (err){
              return reject(err);
            };
            resolve(rows);
        });
    });
};
commands.getValoration = function(id){
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

commands.postValoration = (valoration) => {
  return new Promise((resolve, reject)=>{
    mysql.query('INSERT INTO `space_app`.`valoration` set ?', valoration , function (err, rows, fields) {
        if (err){
          reject(err);
        };
        resolve(rows);
    });
  })
};

module.exports = commands;
