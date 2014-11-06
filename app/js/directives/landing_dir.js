(function(){

  'use strict';

  angular.module('startupBootstrap')

  .directive('landingNav', function(){
    return {
      restrict: 'E',
      templateUrl: 'partials/landing/nav.html',
      replace: true
    };
  })

  .directive('landingBackground', function(){
    return {
      restrict: 'E',
      templateUrl: 'partials/landing/background.html',
      replace: true
    };
  })

  .directive('landingTop', function(){
    return {
      restrict: 'E',
      templateUrl: 'partials/landing/top.html',
      replace: true
    };
  })

  .directive('landingWhy', function(){
    return {
      restrict: 'E',
      templateUrl: 'partials/landing/why.html',
      replace: true
    };
  })

  .directive('landingTestimonials', function(){
    return {
      restrict: 'E',
      templateUrl: 'partials/landing/testimonials.html',
      replace: true
    };
  })

  .directive('landingPress', function(){
    return {
      restrict: 'E',
      templateUrl: 'partials/landing/press.html',
      replace: true
    };
  })

  .directive('landingCalltoaction', function(){
    return {
      restrict: 'E',
      templateUrl: 'partials/landing/calltoaction.html',
      replace: true
    };
  })

  .directive('landingFooter', function(){
    return {
      restrict: 'E',
      templateUrl: 'partials/landing/footer.html',
      replace: true
    };
  })

  .directive('landingVideo', function(){
    return {
      restrict: 'E',
      templateUrl: 'partials/landing/video.html',
      replace: true
    };
  });

})();
