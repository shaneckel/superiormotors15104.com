'use strict';

var angular = require('angular');
var TweenMax = require('gsap');

module.exports = angular.module('app.animation', []);

/*@ngInject*/
function ballAnimation() {

  return {
      animate: function(element, className, from, to, done) {
        TweenMax.to(element, 0.5, {
          x       : to.x,
          y       : to.y,
          ease    : 'Back.easeOut',
          force3D : true,
          onStart : done
        });
      }
    };

}

// attach the directives to this module to be exported
angular.module('app.animation')
  .animation('.ball', ballAnimation);
