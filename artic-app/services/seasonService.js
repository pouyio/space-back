var bd = require('./../bd/_bd.js');

var services ={};

services.getCurrentSeason = ()=>{
  return new Promise(function(resolve, reject) {
    bd.season.getCurrentSeason().then(function(result){
      bd.season.getSeasonChallenges(result[0].id).then(function(result){
          resolve(result);
      }).catch(function(error){
          reject(error);
      });
    }).catch(function(error){
        reject(error);
    });
  });
}

services.getSeasons = function(){
    return new Promise(function(resolve, reject) {
      bd.season.getSeasons().then(function(result){
          resolve(result);
      }).catch(function(error){
          reject(error);
      });
    });
};


services.getSeason = function(id){
  return new Promise(function(resolve, reject) {
    bd.season.getSeason(id).then(function(result){
        resolve(result);
    }).catch(function(error){
        reject(error);
    });
  });
};


services.getSeasonChallenges = function(id){
  return new Promise(function(resolve, reject) {
    bd.season.getSeasonChallenges(id).then(function(result){
        resolve(result);
    }).catch(function(error){
        reject(error);
    });
  });
};




module.exports = services;
