'use strict';

var angular = require('angular');
var TweenMax = require('gsap');

module.exports = angular.module('app.animation', []);

// function swipeAnimation() {
//   return {


//     // addClass: function(element, className, done) {
//     //   TweenMax.to(element, 0.25, { height: 0, onComplete: done });
//     // },
    
//     // removeClass: function(element, className, done) { 
//     //   TweenMax.set(element, { height: "auto" });
//     //   TweenMax.from(element, 0.25, { height: 0, onComplete: done });
//     // }


//     // enter : function(element, done) {
//     //   console.log("enter")
//     //   element.css('opacity',0);
//     //   // jQuery(element).animate({
//     //   //   opacity: 1
//     //   // }, done);

//     //   // optional onDone or onCancel callback
//     //   // function to handle any post-animation
//     //   // cleanup operations
//     //   // return function(isCancelled) {
//     //   //   if(isCancelled) {
//     //   //     jQuery(element).stop();
//     //   //   }
//     //   // }
//     // },
//     // leave : function(element, done) {
//     //   element.css('opacity', 1);
 
//     //   TweenMax.to(element, 1, {opacity: 0.5, onComplete: done });

//     //   // }, done);

//     //   // optional onDone or onCancel callback
//     //   // function to handle any post-animation
//     //   // cleanup operations
//     //   // return function(isCancelled) {
//     //   //   if(isCancelled) {
//     //   //     jQuery(element).stop();
//     //   //   }
//     //   // }
//     // },
//     // move : function(element, done) {
//     //   console.log("move")

//     //   element.css('opacity', 0);
//     //   // jQuery(element).animate({
//     //   //   opacity: 1
//     //   // }, done);

//     //   // // optional onDone or onCancel callback
//     //   // // function to handle any post-animation
//     //   // // cleanup operations
//     //   // return function(isCancelled) {
//     //   //   if(isCancelled) {
//     //   //     jQuery(element).stop();
//     //   //   }
//     //   // }
//     // },

//     // // you can also capture these animation events
//     // addClass : function(element, className, done) {
//     //   console.log("addClass")
//     //         element.css('opacity',1);

//     // },

//     // removeClass : function(element, className, done) {
//     //   console.log("removeClass")
//     //   element.css('opacity',0);

//     // }


//     // beforeAddClass: function (element, className, done) {
//     //   var scope = element.scope();
//     //   console.log(scope.currentIndex);

//     //   if (className === 'ng-hide') {
//     //   //   console.log("before");
//     //   //   console.log(element);
//     //   //   console.log(element.width);
//     //   //   console.log(element.parent().width);
//     //     // var finishPoint = element.parent().width();
//     //     // if(scope.direction !== 'right') {
//     //     //   finishPoint = -finishPoint;
//     //     // }
//     //     // TweenMax.to(element, 0.5, {left: finishPoint, onComplete: done });
//     //   }
//     //   else {
//     //     done();
//     //   }
//     // },
//     // removeClass: function (element, className, done) {
//     //   var scope = element.scope();
//     //   console.log("swank");
//     //   console.log(scope.currentIndex);

//     //   if (className === 'ng-hide') {
        
//     //     // element.removeClass('ng-hide');
//     //     // console.log("remove");
//     //     // console.log(element);
//     //     // console.log(element.width);
//     //     // console.log(element.parent().width);
//     //     // console.log(element.parent().width());

//     //     // var startPoint = element.parent().width();
//     //     // if(scope.direction === 'right') {
//     //     //   startPoint = -startPoint;
//     //     // }

//     //     // TweenMax.fromTo(element, 0.5, { left: startPoint }, {left: 0, onComplete: done });
//     //   }
//     //   else {
//     //       done();
//     //   }
//     // }


//     // animate: function(element, className, from, to, done) {
//     //   TweenMax.to(element, 0.5, {
//     //     left    : to.x,
//     //     ease    : 'Back.easeOut',
//     //     force3D : true,
//     //     onStart : done
//     //   });
//     // }
//   };
// }

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
  // Or you could set it up like this and create a new object
  // Extend is helpful if you need to mix a lot of properties
  /*
  var options = angular.extend({}, to, {
      ease    : Back.easeOut,
      force3D : true,
      onStart : done
  });
  
  TweenMax.to(element, 0.5, options);
  */
}


// attach the directives to this module to be exported 
angular.module('app.animation')
  .animation('.ball', ballAnimation);