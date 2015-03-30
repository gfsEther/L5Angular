var myApp = angular.module('myApp', []);

myApp.controller('mainController',['$scope', '$timeout', function($scope, $timeout){
  $scope.name = "gustavo";

  $timeout(function(){
    $scope.name = 'Everybody';
  }, 3000);
}]);

myApp.controller('secondController', ['$scope', '$filter', function($scope, $filter){
  $scope.handle = '';

  $scope.lowercasehandle = function() {
    return $filter('lowercase')($scope.handle);
  };

}]);
// myApp.controller('mainController',['$scope', '$log', '$filter', function($scope, $log, $filter){
//   // console.log($log);
//   // $log.log("helo");
//   // $log.warn("helo");
//   // $log.info("helo");
//   // $log.debug("helo");
//   // $log.error("helo");

//   $scope.name = "gustavo";
//   $scope.formattedname = $filter('uppercase')($scope.name);

//   $log.info($scope.name);
//   $log.info($scope.formattedname);

// }]);