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
      {image: '/img/swipe/swipe6_s.jpg'},
      {image: '/img/swipe/swipe10_s.jpg'},
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
function getPrisArticle($scope, $resource, $sce,$stateParams) {

  function getArticle($q) {

    $scope.pris = $resource('/api/pris/' + $stateParams.articleId, {});
    $scope.pris.query( {}, function (res) {

      if( angular.isUndefined() ) {
        $scope.swankin = [];
      }
      var image = '';
      if(res[0].data.fragments['articles.image']){
        image = res[0].data.fragments['articles.image'].url || {};
      }

      $scope.swankin.push({
        date: res[0].data.fragments['articles.date'].value,
        body: res[0].htmlBody,
        title: res[0].data.fragments['articles.title'].value,
        image: image
      });
    });
  }
  getArticle();

}

/*@ngInject*/
function prisCtrl($scope, $resource, $sce ) {
  function getPris ($q) {

    $scope.pris = $resource('/api/pris/', {});
    $scope.pris.query( {}, function (res) {
      console.log(res);
      if( angular.isUndefined() ) {
        $scope.articles = [];
      }
      angular.forEach(res, function (swag) {
        $scope.articles.push({
          link: swag.uid,
          date: swag.fragments['articles.date'].value,
          body: shorten(swag.fragments['articles.body'].blocks[0].text, 100),
          title: swag.fragments['articles.title'].value
        });
      });

    });
  }
  getPris();
}
function shorten(str,n) {
  return (str.match(RegExp(".{"+n+"}\\S*"))||[str])[0];
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
          body: tweets.oEmbed.html
            .replace('&mdash; ', "<h3>")
            .replace(') <a', "</em></h3><a")
            .replace(' (@', "<em>@"),
          date: tweets.created_at
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
  .controller('prisCtrl', prisCtrl)
  .controller('getPrisArticle', getPrisArticle)
