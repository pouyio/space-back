var bd = require('./../bd/_bd.js');

var services ={};

services.getCurrentSeason = (getChallenges, user)=>{
  return new Promise(function(resolve, reject) {
    bd.season.getCurrentSeason().then(function(result){
      if(getChallenges){
        bd.season.getSeasonChallenges(result[0].id,user).then(function(result){
            resolve(result);
        }).catch(function(error){
            reject(error);
        });
      }else{
        resolve(result[0]);
      }

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


services.getSeasonChallenges = function(id, user){
  return new Promise(function(resolve, reject) {
    bd.season.getSeasonChallenges(id, user).then(function(result){
        resolve(result);
    }).catch(function(error){
        reject(error);
    });
  });
};


services.getSeasonsChallenges = function(user){
  return new Promise(function(resolve, reject) {
    bd.season.getSeasonsChallenges(user).then(function(result){
        resolve(result);
    }).catch(function(error){
        reject(error);
    });
  });
};


module.exports = services;
