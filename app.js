'use strict' ;
//http://api.openweathermap.org/data/2.5/forecast/daily?q=Gdansk&cnt=2&appid=aebbf9d13c4d386edfdbca3b0e305238
var weatherApp = angular.module('weatherApp', [
  'ngRoute',
  'ngResource'
]);

//CONFIG
weatherApp.config(['$routeProvider', function ($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: '/views/home.html',
    controller: 'homeController'
  })
  .when('/forecast', {
    templateUrl: '/views/forecast.html',
    controller: 'forecastController'
  })

  .when('/forecast/:days', {
    templateUrl: '/views/forecast.html',
    controller: 'forecastController'
  })
}]);

//SERVICE

weatherApp.service('cityService', function () {
  this.city = 'Gdansk';
});
//CONTROLLESR
weatherApp.controller('homeController',['$scope', 'cityService',
function ($scope, cityService) {

  $scope.$watch ('city', function () {
    cityService.city = $scope.city;
  })
}]);


weatherApp.controller('forecastController',['$scope','$resource','$routeParams','cityService',
function ($scope, $resource, $routeParams, cityService) {
$scope.city = cityService.city;
$scope.days = $routeParams.days || 2;

var weatherApi = $resource('http://api.openweathermap.org/data/2.5/forecast/daily?q=Gdansk&appid=aebbf9d13c4d386edfdbca3b0e305238')
   $scope.weatherResult = weatherApi.get({
     q: "Gdansk",
     cnt: $scope.days,
     appid: 'aebbf9d13c4d386edfdbca3b0e305238'
   }, function (res) {

     return res;
   });





  $scope.formatedDate = function (date) {
    return new Date(date * 1000);

};

  $scope.convertToCelsius = function (data) {
  var tempCelsius = data - 273.15
  return tempCelsius.toFixed(1);
  }
}]);



//SERVICES
