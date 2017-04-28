var mysql = require('./mysql.js');

var user ={};

user.getIdiomas = function(){
    return new Promise(function(resolve, reject) {
        mysql.query('select * from BuddyApp.idiomas ',  function (err, rows, fields) {
            if (err){
              return reject(err);
            };
            resolve(rows);
        });
    });
};



user.getIdiomasUser = function(userId){
    return new Promise(function(resolve, reject) {
      var q ="select * from BuddyApp.user_idiomas ui "+
             " join BuddyApp.user u on u.iduser = ui.user_id " +
             " join BuddyApp.idiomas i on ui.idiomas_id = i.id " +
             " where u.id = ";

        mysql.query(q +userId,  function (err, rows, fields) {
            if (err){
              return reject(err);
            };
            resolve(rows);
        });
    });
};


module.exports = user;
