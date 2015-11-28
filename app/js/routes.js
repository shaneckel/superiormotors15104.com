'use strict';
 
/*@ngInject*/
function Routes($stateProvider, $locationProvider, $urlRouterProvider) {

  $locationProvider.html5Mode(true);

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'home.html',
      title: 'Home'
    });  

  $stateProvider
    .state('articles', {
      url: '/articles',
      templateUrl: 'articles.html',
      title: 'Articles'
    });

  $stateProvider
    .state('events', {
      url: '/events',
      templateUrl: 'articles.html',
      title: 'Events'
    });

  $stateProvider
    .state('kevin', {
      url: '/kevinsousa',
      templateUrl: 'kevin.html',
      title: 'Kevin Sousa'
    });

  $urlRouterProvider.otherwise('/');

}

module.exports = Routes;