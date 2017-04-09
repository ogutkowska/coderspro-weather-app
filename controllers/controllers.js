angular.module('weatherApp').controller('homeController',['$scope', 'cityService',
function ($scope, cityService) {

  $scope.$watch ('city', function () {
    cityService.city = $scope.city;
  })
}]);


angular.module('weatherApp').controller('forecastController',['$scope','$resource','$routeParams','cityService',
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
