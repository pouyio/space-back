var mysql = require('./../config/mysql.js');

var commands ={};

commands.getParticipations = function(){
    return new Promise(function(resolve, reject) {
        mysql.query('select * from space_app.participation ',  function (err, rows, fields) {
            if (err){
              return reject(err);
            };
            resolve(rows);
        });
    });
};
commands.getParticipation = function(id){
    return new Promise(function(resolve, reject) {
      var q ="select * from space_app.participation where id = ? ";

        mysql.query(q, id, function (err, rows, fields) {
            if (err){
              return reject(err);
            };
            resolve(rows);
        });
    });
};

commands.postParticipation = function(participation, url) {
  participation.url = url;
  return new Promise((resolve, reject)=>{
    console.log(participation)
    mysql.query('INSERT INTO `space_app`.`participation` set ?', participation , function (err, rows, fields) {
        if (err){
          reject(err);
        };
        resolve(rows.insertId);
    });
  })
}
module.exports = commands;
