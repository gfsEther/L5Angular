var flipApp = angular.module('flipApp', ['ngRoute']);

flipApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider

  .when('/view/a', {
    templateUrl: '../tdd/viewA.htm',
    controller: 'ViewAController'
  })

  .when('/view/b', {
    templateUrl: '../tdd/viewB.htm',
    controller: 'ViewBController'
  })

  .otherwise({
    redirectTo: '/view/a'
  });
}]);

flipApp.controller('ViewAController', ['$scope', function($scope){
  
}]);

flipApp.controller('ViewBController', ['$scope', function($scope){
  
}])