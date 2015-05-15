var todoApp = angular.module('todo', []);

todoApp.controller('todoController', ['$scope', function ($scope) {
  $scope.list = ['test', 'execute', 'refactor'];

  $scope.add = function(item) {
    var noItem = true;
    angular.forEach($scope.list, function(value){
      if (value == item) { noItem = false; }
    });
    if(noItem) 
      $scope.list.push(item);
  };

  $scope.remove = function(index) {
    $scope.list.splice(index, 1);
  }
}]);