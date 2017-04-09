angular.module('weatherApp').directive('weatherReport', function () {
  return {
    restrict: 'E',
    templateUrl: 'directives/weatherReport.html',
    replace: true,
    scope: {
      //'<' one-way data binding
      //'=' - two way data binding
      // '&' - function/expression
      // '@' - one way data binding ale w nizszych wersjach niz angular 1.5
      weatherDay: '<',
      formatedDate: "&",
      convertToCelsius: '&',
      dateFormat: '<'
    }
}
});
