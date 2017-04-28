var bd = require('./../bd/_bd.js');

var services ={};

services.getMessages= function(){
    return new Promise(function(resolve, reject) {
      bd.challenge.getChallenges().then(function(result){
          resolve(result);
      }).catch(function(error){
          reject(error);
      });
    });
};


services.getMessage = function(id){
  return new Promise(function(resolve, reject) {
    bd.message.getMessage(id).then(function(result){
        resolve(result);
    }).catch(function(error){
        reject(error);
    });
  });
};


module.exports = services;
