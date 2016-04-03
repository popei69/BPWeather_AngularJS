'use strict';

var weatherApp = angular.module('weatherApp');

weatherApp.controller('CenterDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {


    // $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
    //   $scope.mainImageUrl = phone.images[0];
    // });
    //
    // $scope.setImage = function(imageUrl) {
    //   $scope.mainImageUrl = imageUrl;
    // };
  }]);
