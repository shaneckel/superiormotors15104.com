'use strict';

var angular = require('angular');

module.exports = angular.module('app.services', []);

/*@ngInject*/
function prisService($q, $http){

  var service = {};

  service.get = function() {
    var deferred = $q.defer();
    $http.get('https://superiormotors.prismic.io/api/documents/search?ref=V8OfvikAADFlUe5E#format=json')
    .success(function(data) {
      console.log("swag");
      console.log(data);
      deferred.resolve(data);
    })
    .error(function(err, status) {
      deferred.reject(err, status);
    });
    return deferred.promise;

  };
  return service;
}


// attach the services to this module to be exported
angular.module('app.services')
  .service('prisService', prisService);
