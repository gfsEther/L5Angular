var myApp = angular.module('myApp', []);

myApp.controller('mainController',['$scope', '$log', '$filter', function($scope, $log, $filter){
  // console.log($log);
  // $log.log("helo");
  // $log.warn("helo");
  // $log.info("helo");
  // $log.debug("helo");
  // $log.error("helo");

  $scope.name = "gustavo";
  $scope.formattedname = $filter('uppercase')($scope.name);

  $log.info($scope.name);
  $log.info($scope.formattedname);

}]);