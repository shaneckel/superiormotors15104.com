'use strict';
 
var angular = require('angular');

require('angular-ui-router');
require('angular-animate');
require('angular-sanitize');
require('angular-resource');
require('angular-touch');
require('gsap');

require('./templates');
require('./controllers');
require('./services');
require('./directives');
require('./animation');

angular.element(document).ready(function() {

  angular.module('app',  
    ['ui.router', 'ngAnimate', 'templates','ngTouch', 'app.controllers', 'app.services', 'app.directives', 'app.animation']
  );

  angular.module('app').constant('AppSettings', require('./constants'));

  angular.module('app').config(require('./routes'));

  angular.module('app').run(require('./on_run'));
 
  angular.bootstrap(document, ['app']);

});