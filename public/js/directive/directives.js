weatherApp.directive('forecastResult', function() {
  return {
    restrict: 'E',
    templateUrl: 'directives/forecastresult.html',
    replace: true,
    scope: {
      weatherObject: "=",
      convertToDateFunction: "&",
      convertToCelsiusFunction: "&",
      dateFormat: "@"
      }
    }
});
