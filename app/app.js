'use strict';

var weatherApp = angular.module('weatherApp', [
  'ngRoute',
  // 'phonecatAnimations',
  // 'phonecatControllers',
  // 'phonecatFilters',
  // 'phonecatServices'
]);

weatherApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/centres', {
        templateUrl: 'views/center-list.html',
        controller: 'CenterListCtrl'
      }).
      when('/centres/:centerId', {
        templateUrl: 'views/center-detail.html',
        controller: 'CenterDetailCtrl'
      }).
      otherwise({
        redirectTo: '/centres'
      });
  }]);
