var mysql = require('./../config/mysql.js');
var nested = require('node-mysql-nesting');

var commands ={};

var query = `SELECT challenge.name, challenge.description, participation.id participation, participation.url  , participation.user user  FROM space_app.challenge challenge
left join space_app.participation participation on participation.challenge = challenge.id
left join space_app.user user on participation.user = user.id
left join space_app.valoration valoration on valoration.participation = participation.id
where participation.id is not null and  (select count(1) from space_app.valoration where valoration.user =1) <1
group by challenge.id, participation.id
order by count(valoration.id);`

commands.getRandomValorations = function(userId){
    return new Promise(function(resolve, reject) {
        mysql.query(query,  function (err, rows, fields) {
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
