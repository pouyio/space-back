var bd = require('./../bd/_bd.js');

var services ={};

services.getChallenges= function(){
    return new Promise(function(resolve, reject) {
      bd.challenge.getChallenges().then(function(result){
          resolve(result);
      }).catch(function(error){
          reject(error);
      });
    });
};


services.getChallenge = function(id){
  return new Promise(function(resolve, reject) {
    bd.challenge.getChallenge(id).then(function(result){
        resolve(result);
    }).catch(function(error){
        reject(error);
    });
  });
};


module.exports = services;