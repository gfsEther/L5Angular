var startApp = angular.module('startApp', ['ngRoute']);

startApp.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl: '../../pages/start.html',
    controller: 'mainController'
  })

});

startApp.service('nameService', function(){
  var self = this;

  this.name = 'John Doe';

  this.namelength = function() {
    return self.name.length;
  };

  this.people = [
    {
      id: 0,
      name: 'John Doe',
      address: '555 Main St.',
      city: 'New York',
      state: 'NY',
      zip: '11111'
    },
    {
      id: 1,
      name: 'Jane Doe',
      address: '222 Main St.',
      city: 'Buffalo',
      state: 'NY',
      zip: '22222'
    },
    {
      id:2,
      name: 'George Doe',
      address: '333 third St.',
      city: 'Miami',
      state: 'FL',
      zip: '33333'
    }    
  ];


  this.getPersonById = function(id) {
    var p;
    angular.forEach(self.people, function(person){
      if(id == person.id) {
        p = person;
      }
    });
    return p;
  } 
  

});

startApp.controller('mainController',['$scope', '$log', 'nameService', function($scope, $log, nameService){

  $scope.index = 0;

  $scope.previous = function() {
    if($scope.index > 0) {
      $scope.index--;
    }
  }
  $scope.next = function() {
    if(($scope.index + 1) < nameService.people.length) {
      $scope.index++;
    }
  } 

  $scope.$watch('index', function(){
    $log.log($scope.index);
    //nameService.name = $scope.name;
    $log.log(nameService.people.length);
    $scope.name = nameService.getPersonById($scope.index).name;
    $scope.address = nameService.getPersonById($scope.index).address;
    $scope.city = nameService.getPersonById($scope.index).city;
    $scope.state = nameService.getPersonById($scope.index).state;
    $scope.zip = nameService.getPersonById($scope.index).zip;
  });

  

  


  $scope.formattedAddress = function(person) {
    return person.address + ', ' + person.city + ', ' + person.state + ' ' + person.zip;
  };

}]);