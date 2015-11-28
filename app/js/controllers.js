'use strict';

var angular = require('angular');

module.exports = angular.module('app.controllers', ['ngResource', 'ngSanitize']);

/*@ngInject*/
function swipeCtrl($scope ) {
  
  if(window.screen.width < 768){
    $scope.slides = [
      {image: '/img/swipe/swipe1_s.jpg'},
      {image: '/img/swipe/swipe2_s.jpg'},
      {image: '/img/swipe/swipe3_s.jpg'},
      {image: '/img/swipe/swipe4_s.jpg'},
      // {image: '/img/swipe/swipe5_s.jpg'},
      {image: '/img/swipe/swipe6_s.jpg'},
      // {image: '/img/swipe/swipe7_s.jpg'},
      // {image: '/img/swipe/swipe8_s.jpg'},
      // {image: '/img/swipe/swipe9_s.jpg'},
      {image: '/img/swipe/swipe10_s.jpg'},
      // {image: '/img/swipe/swipe11_s.jpg'},
      {image: '/img/swipe/swipe12_s.jpg'},
      {image: '/img/swipe/swipe13_s.jpg'},
      {image: '/img/swipe/swipe14_s.jpg'}
    ];
  }else{
    $scope.slides = [
      {image: '/img/swipe/swipe1_l.jpg'},
      {image: '/img/swipe/swipe2_l.jpg'},
      {image: '/img/swipe/swipe3_l.jpg'},
      {image: '/img/swipe/swipe4_l.jpg'},
      {image: '/img/swipe/swipe5_l.jpg'},
      {image: '/img/swipe/swipe6_l.jpg'},
      {image: '/img/swipe/swipe7_l.jpg'},
      {image: '/img/swipe/swipe8_l.jpg'},
      {image: '/img/swipe/swipe9_l.jpg'},
      {image: '/img/swipe/swipe10_l.jpg'},
      {image: '/img/swipe/swipe11_l.jpg'},
      {image: '/img/swipe/swipe12_l.jpg'},
      {image: '/img/swipe/swipe13_l.jpg'},
      {image: '/img/swipe/swipe14_l.jpg'}
    ]; 
  }

  $scope.currentIndex = 0;

  $scope.setCurrentSlideIndex = function (index) {
    $scope.currentIndex = index;
  };

  $scope.isCurrentSlideIndex = function (index) {
    return $scope.currentIndex === index;
  };

  $scope.prevSlide = function () {
    $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 3) ? ++$scope.currentIndex : 0;
  };

  $scope.nextSlide = function () {
    $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 3;
  };

}

/*@ngInject*/
function kevinCtrl() {
  /*jshint validthis:true */ // use this shit to make the linter not complain
  var vm = this;
  vm.title = 'Kevin Sousa - Chef of Superior Motors';
}


/*@ngInject*/
function instagramCtrl($scope, $resource ) {

  function getGrams(){
    $scope.gram = $resource('/api/instagram/');
    $scope.gram.query( { }, function (res) {      
      $scope.grams = [];
      angular.forEach(res, function (grams) {
        var gramtext = "";
        if(grams.caption){
          gramtext = grams.caption.text.substring(0, 50) + "...";
        }
        var gram =  { 
          'caption' : gramtext, 
          'link' : grams.link, 
          'image' : grams.images.low_resolution.url,
          'date' : (grams.created_time * 1000)
        };
        $scope.grams.push(gram);
      });
    });
  }

  getGrams();
}

/*@ngInject*/
function twitterCtrl($scope, $resource, $sce ) {
 
  function getTweets ($q) {

    $scope.tweet = $resource('/api/twitter/', {
      action: 'user_timeline'
    });

    $scope.tweet.query( { }, function (res) {

      if( angular.isUndefined() ) {
        $scope.tweets = [];
      }
 
      angular.forEach(res, function (tweets) {
        $scope.tweets.push({
          tweet : $sce.trustAsHtml(tweets.oEmbed.html
            .replace('&mdash; ', "<h3>")
            .replace(') <a', "</em></h3><a")
            .replace(' (@', "<em>@"))
        });
      });
    });
  }
  getTweets();
}

// attach the controller to this module to be exported
angular.module('app.controllers')
  .controller('swipeCtrl', swipeCtrl) 
  .controller('twitterCtrl', twitterCtrl) 
  .controller('instagramCtrl', instagramCtrl) 
