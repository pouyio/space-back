var mysql = require('./../config/mysql.js');
var commands ={};



commands.getUsersLeaderboard = (id)=>{
  return new Promise(function(resolve, reject) {
      mysql.query(`select user.id, user.name, sum(valoration.valoration)*sum(valoration.valoration)/2 points from space_app.valoration valoration
                    join space_app.participation participation on valoration.participation = participation.id
                    left join space_app.user user on participation.user = user.id
                    where participation.challenge = ?
                    group by user.id, participation.challenge `, id,
        function (err, rows, fields) {
          if (err){
            reject(err);
          };
          resolve(rows);
      });
  });
}



commands.getChallenges = function(current){
    return new Promise(function(resolve, reject) {
        mysql.query('select * from space_app.challenge ',  function (err, rows, fields) {
            if (err){
              return reject(err);
            };
            resolve(rows);
        });
    });
};

commands.getChallenge = function(userId){
    return new Promise(function(resolve, reject) {
      var q ="select * from space_app.challenge where id = ? ";

        mysql.query(q, userId, function (err, rows, fields) {
            if (err){
              return reject(err);
            };
            resolve(rows);
        });
    });
};
module.exports = commands;
