var mysql = require('./mysql.js');

var user ={};

user.getGustos = function(){
    return new Promise(function(resolve, reject) {
        mysql.query('select * from BuddyApp.gustos ',  function (err, rows, fields) {
            if (err){
              return reject(err);
            };
            resolve(rows);
        });
    });
};

module.exports = user;
