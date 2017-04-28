var bd = require('./../bd/_bd.js');

var services ={};

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


module.exports = services;
