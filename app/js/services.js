'use strict';

var angular = require('angular');

module.exports = angular.module('app.services', []);

/*@ngInject*/
function exampleService($q, $http){
  
  var service = {};

  service.get = function() {
    var deferred = $q.defer();
    $http.get('apiPath').success(function(data) {
        deferred.resolve(data);
    }).error(function(err, status) {
        deferred.reject(err, status);
    });
    return deferred.promise;
 
  };
  return service;
}


// attach the services to this module to be exported
angular.module('app.services')
  .service('exampleService', exampleService);
