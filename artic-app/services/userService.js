var bd = require('./../bd/_bd.js');
var jwt           = require('jsonwebtoken');

var services ={};

services.login = function(email){
  return new Promise(function(resolve, reject) {
      bd.user.login(email).then(function(result){
        jwt.sign({
          exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 7),
          data: result
        }, 'secret', function(err, token) {
            console.log(token);
            resolve(token);
        });
      }).catch(function(error){
          reject(error);
      });
  })
};

services.getUsers = function(){
    return new Promise(function(resolve, reject) {
      bd.user.getUsers().then(function(result){
        resolve(result);

      }).catch(function(error){
          reject(error);
      });
    });



};


services.getUser = function(id){
  return new Promise(function(resolve, reject) {
    bd.user.getUser(id).then(function(result){
        resolve(result);
    }).catch(function(error){
        reject(error);
    });
  });
};


services.postUser = (user)=>{
  return new Promise(function(resolve, reject) {
    bd.user.createUser(user).then(function(result){
      services.login(user.email).then(function(result){
          resolve(result);
      }).catch(function(error){
          reject(error);
      });
    }).catch(function(error){
        reject(error);
    });
  });
};
module.exports = services;
