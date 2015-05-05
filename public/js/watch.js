var myApp = angular.module('myApp', []);

myApp.controller('mainController',['$scope', '$filter', '$http', function($scope, $filter, $http){
  $scope.handle = '';

  $scope.lowercasehandle = function() {
    return $filter('lowercase')($scope.handle);
  };

  $scope.characteres = 5;
}]);

myApp.controller('secController',['$scope', '$http', function($scope, $http){
  $scope.alertClick = function() {
    alert("Clicked!");
  };

  $scope.name = "Certo";

  // Angular way
  $http.get('/home/show')
      .success(function(result){
        $scope.user = result;
      })
      .error(function(data, status){
        console.log(data);
      });

  $scope.newUser = '';
  $scope.addUser = function() {
    $http.post('/auth/register', {name: $scope.newUser, email: $scope.email, password: 'secret', password_confirmation: 'secret'})
        .success(function(result){
          $scope.user = result;
          $scope.newUser = '';
        })
        .error(function(data, status){
          console.log(data);
        });
  };
  // Javascript way
  // var users = new XMLHttpRequest();
  // users.onreadystatechange = function() {
  //   if(users.readyState == 4 && users.status == 200) {
  //     $scope.$apply(function(){
  //       $scope.user = JSON.parse(users.responseText);
  //     });
  //   }
  // };

  // users.open("GET", "http://localhost:8000/home/show", true);
  // users.send();
}]);
