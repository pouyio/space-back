var mysql = require('./../config/mysql.js');

var commands ={};

commands.geQuest = function(id){
    return new Promise(function(resolve, reject) {
        mysql.query('select * from space_app.quest where id =  ' +id,  function (err, rows, fields) {
            if (err){
              return reject(err);
            };
            resolve(rows);
        });
    });
};

commands.getQuests = function(){
    return new Promise(function(resolve, reject) {
        mysql.query('select * from space_app.quest', function (err, rows, fields) {
            if (err){
              return reject(err);
            };
            resolve(rows);
        });
    });
};

module.exports = commands;
