var bd = require('./../bd/_bd.js');

var services ={};

services.getValorations= function(){
    return new Promise(function(resolve, reject) {
      bd.valoration.getValorations().then(function(result){
          resolve(result);
      }).catch(function(error){
          reject(error);
      });
    });
};


services.getValoration = function(id){
  return new Promise(function(resolve, reject) {
    bd.valoration.getValoration(id).then(function(result){
        resolve(result);
    }).catch(function(error){
        reject(error);
    });
  });
};

services.postValoration = (valoration) =>{
  return new Promise(function(resolve, reject) {
    bd.valoration.postValoration(valoration).then(function(result){
        resolve(result);
    }).catch(function(error){
        reject(error);
    });
  });
}


module.exports = services;
