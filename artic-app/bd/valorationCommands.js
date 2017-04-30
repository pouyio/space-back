var mysql = require('./../config/mysql.js');
var nested = require('node-mysql-nesting');

var commands ={};

var query = `SELECT challenge.name, challenge.description, participation.id participation, participation.url  , user2.name user FROM space_app.challenge challenge
left join space_app.participation participation on participation.challenge = challenge.id
left join space_app.user user on participation.user = user.id
left join space_app.valoration valoration on valoration.participation = participation.id
join space_app.user user2 on user.id = participation.user
where participation.id is not null and  (select count(1) from space_app.valoration v where v.user = ? and v.participation = participation.id ) <1 and participation.user != ?
group by challenge.id, participation.id
order by count(valoration.id);`

commands.getRandomValorations = function(userId){
    return new Promise(function(resolve, reject) {
        mysql.query(query,[userId, userId],  function (err, rows, fields) {
            if (err){
              return reject(err);
            };
            resolve(rows[0] || false);
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

commands.postValoration = (valoration, user) => {
  valoration.user = user;
  return new Promise((resolve, reject)=>{
    mysql.query('INSERT INTO `space_app`.`valoration` set ?', valoration , function (err, rows, fields) {
        if (err){
          reject(err);
        };
        resolve("ok");
    });
  })
};

module.exports = commands;
