var bd = require('./../bd/_bd.js');

var services ={};

services.getQuests = function(){
    return new Promise(function(resolve, reject) {
      bd.quest.getQuests().then(function(result){
          resolve(result);
      }).catch(function(error){
          reject(error);
      });
    });
};


services.getQuest = function(id){
  return new Promise(function(resolve, reject) {
    bd.quest.getQuest(id).then(function(result){
        resolve(result);
    }).catch(function(error){
        reject(error);
    });
  });
};


module.exports = services;
