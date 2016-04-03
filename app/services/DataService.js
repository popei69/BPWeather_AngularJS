'use strict';

var weatherApp = angular.module('weatherApp');

weatherApp.service('DataService', ['$http', function($http) {

  var baseUrl = 'http://weather.benoitpasquier.fr/index.php';

  this.getAllCenters = function() {
    return $http.jsonp(baseUrl + '?c=centers&m=apiGetAllCenters&callback=JSON_CALLBACK');
  }

}]);
