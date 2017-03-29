'use strict';

/*@ngInject*/
function OnRun($rootScope, $state, AppSettings) {

  $rootScope.$on('$stateChangeSuccess', function(event, toState) {

    $rootScope.pageTitle = '';

    $rootScope.pageTitle += AppSettings.appTitle;

    if ( toState.title ) {
      $rootScope.pageTitle += ' \u2014 ';
      $rootScope.pageTitle += toState.title;
    }

  });

  $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {

  });
}

module.exports = OnRun;
