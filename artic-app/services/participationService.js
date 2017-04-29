var bd = require('./../bd/_bd.js');

var services ={};

services.getParticipations = function(){
    return new Promise(function(resolve, reject) {
      bd.participation.getParticipations().then(function(result){
          resolve(result);
      }).catch(function(error){
          reject(error);
      });
    });
};


services.getParticipation = function(id){
  return new Promise(function(resolve, reject) {
    bd.participation.getParticipation(id).then(function(result){
        resolve(result);
    }).catch(function(error){
        reject(error);
    });
  });
};



services.postParticipation = function(participation, url){
  return new Promise(function(resolve, reject) {
    bd.participation.postParticipation(participation, url).then(function(result){
      resolve(result);
    }).catch(function(error){
        reject(error);
    });
  });
};



module.exports = services;
