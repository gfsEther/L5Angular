var searchApp = angular.module('searchApp', ['ngRoute']);

searchApp.config(['$routeProvider',function($routeProvider) {
  $routeProvider

  .when('/splash', {
    templateUrl: '../tdd/splash.htm',
    controller: 'SplashController'
  })

  .when('/detail/:id', {
    templateUrl: 'searchDetail.htm',
    controller: 'SearchDetailController'
  })

  .otherwise({
    redirecTo: '/splash'
  });
}]);

searchApp.controller('SearchController', ['$scope', function($scope){
  $scope.results = [];

  $scope.search = function(){
    $scope.results = [{id:1,name:'Any Value'}];
  };
}]);

searchApp.controller('SearchDetailController', ['$scope', '$routeParams', function($scope, $routeParams){
  $scope.detail = {id: $routeParams.id};
}]);

searchApp.controller('SplashController', ['$scope', function($scope){
  
}])