'use strict';

var angular = require('angular');
var tl      = require('gsap');

module.exports = angular.module('app.directives', []);


/*@ngInject*/
function swipe($window) {
  return{
    restrict: 'EA',
    link: function(scope, element){

      scope.Math = Math;

      function movePos() {
        var size = 2;
        if($window.innerWidth <= 787){
          size = 2;
        }else{
          size = 3;
        }
        var figurePos = '-' + (Math.floor($window.innerWidth / size) * scope.currentIndex) + 'px';
        function done(){}
        tl.to(element.find('figure') , 0.5, { left : figurePos , ease:Power4.easeOut, onComplete: done });
      }

      function imageResize() {
        var size = 2;
        if($window.innerWidth <= 787){
          size = 2;
        }else{
          size = 3;
        }
        var imageSize = Math.floor($window.innerWidth / size) + 'px';
        var figureSize = (Math.floor($window.innerWidth / size) * scope.slides.length) + 'px';
        var figurePos = '-' + (Math.floor($window.innerWidth / size) * scope.currentIndex) + 'px';

        scope.imageStyle = function() {
          return{
            'width' : imageSize,
            'height' : imageSize
          };
        };
        scope.figureStyle = function() {
          return{
            'width' : figureSize,
            'height' : imageSize
          };
        };
        scope.activeStyle = function() {
          return{
            'width' : figureSize,
            'height' : imageSize,
            'left' : figurePos,
            'position' : 'absolute'
          };
        };
        if(!scope.$$phase){
          scope.$apply();
        }
      }

      angular.element($window).bind('resize', imageResize);
      angular.element(document.querySelector('.prev-button')).bind('click', movePos);
      angular.element(document.querySelector('.next-button')).bind('click', movePos);
      imageResize();
    }
  };
}


/*@ngInject*/
function scrollPosition($window) {
  return {
    restrict:'A',
    link: function(scope, element, attrs) {

      function scrollPos(){
        var scrollTop = '-' + $window.scrollY + 'px';
        scope.scrollStyle = function(){
          return{
            'top' : scrollTop
          }
        }
        if(!scope.$$phase){
          scope.$apply();
        }
      }

      angular.element($window).bind('scroll', scrollPos);
    }
  };
}

/*@ngInject*/
function breakpoint($window, $rootScope){
  return {
    restrict:'A',
    link:function(scope, element, attr){
      scope.breakpoint = {class:'', windowSize:$window.innerWidth }; // Initialise Values

      var breakpoints = (scope.$eval(attr.breakpoint));
      var firstTime = true;

      scope.$watch('breakpoint.windowSize', function(windowWidth){
        setClass(windowWidth);
      });

      scope.$watch('breakpoint.class', function(newClass, oldClass) {
        if (newClass !== oldClass || firstTime) {
          broadcastEvent(oldClass);
          firstTime = false;
        }
      });

      function broadcastEvent (oldClass) {
        $rootScope.$broadcast('breakpointChange', scope.breakpoint, oldClass);
      }

      function setWindowSize (){
        scope.breakpoint.windowSize = $window.innerWidth;
        if(!scope.$$phase){
          scope.$apply();
        }
      }

      function setClass(windowWidth){
        var setClass = breakpoints[Object.keys(breakpoints)[0]];
        for (var breakpoint in breakpoints){
          if (breakpoint < windowWidth){
            setClass = breakpoints[breakpoint];
          }
          element.removeClass(breakpoints[breakpoint]);
        }
        element.addClass(setClass);
        scope.breakpoint.class = setClass;
        if(!scope.$$phase){
          scope.$apply();
        }
      }

      angular.element($window).bind('resize', setWindowSize);

    }
  };
}

// attach the directives to this module to be exported
angular.module('app.directives')
  .directive('mainswipe', swipe)
  .directive('breakpoint', breakpoint)
  .directive('scrollposition', scrollPosition);
