var myApp = angular.module('myApp', []);

myApp.controller('mainController',['$scope', '$filter', function($scope, $filter){
  $scope.handle = '';

  $scope.lowercasehandle = function() {
    return $filter('lowercase')($scope.handle);
  };

  $scope.characteres = 5;
}]);

myApp.controller('secController',['$scope', function($scope){
  $scope.alertClick = function() {
    alert("Clicked!");
  };

  $scope.name = "Certo";


  var users = new XMLHttpRequest();
  users.onreadystatechange = function() {
    if(users.readyState == 4 && users.status == 200) {
      $scope.$apply(function(){
        $scope.user = JSON.parse(users.responseText);
      });
    }
  }

  users.open("GET", "http://localhost:8000/home/show", true);
  users.send();
}]);
