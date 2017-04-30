var mysql = require('./../config/mysql.js');

var user ={};
user.getUsersLeaderboard = ()=>{
  return new Promise(function(resolve, reject) {
      mysql.query(`select user.id, user.name, sum(valoration.valoration)*sum(valoration.valoration)/2 points from space_app.valoration valoration
                  join space_app.participation participation on valoration.participation = participation.id
                  left join space_app.user user on participation.user = user.id
                  group by user.id  order by points desc ;`,
        function (err, rows, fields) {
          if (err){
            reject(err);
          };
          resolve(rows);
      });
  });
}
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

user.getUserEmail = function(email){
  console.log(email)
    return new Promise(function(resolve, reject) {
        mysql.query('select * from space_app.user where user =  "'+email+'"' ,  function (err, rows, fields) {
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


user.login = (email, password) => {
  return new Promise((resolve, reject)=>{
    mysql.query('select * from space_app.user where user = ? and password = ?',[email, password], function (err, rows, fields) {
        if (err){
          reject(err);
        };
        console.log(rows);
        if(!rows || rows.length !==1)
          reject("Login not found");
        resolve(rows);
    });
  })
};

user.createUser = (user) => {
  return new Promise((resolve, reject)=>{
    mysql.query('INSERT INTO `space_app`.`user` set ?', user , function (err, rows, fields) {
        if (err){
          reject(err);
        };
        resolve(rows);
    });
  })
}
module.exports = user;
