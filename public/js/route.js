var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
  $routeProvider

  .when('/main', {
    templateUrl: 'pages/main.html',
    controller: 'mainController'
  })

  .when('/second', {
    templateUrl: 'pages/second.html',
    controller: 'secondController'
  })

  .when('/second/:num', {
    templateUrl: 'pages/second.html',
    controller: 'secondController'
  })
});

myApp.service('nameService', function(){
  var self = this;

  this.name = 'John Doe';

  this.namelength = function() {
    return self.name.length;
  };

});

myApp.controller('mainController',['$scope', '$log', 'nameService', function($scope, $log, nameService){

  $scope.people = [
    {
      name: 'John Doe',
      address: '555 Main St.',
      city: 'New York',
      state: 'NY',
      zip: '11111'
    },
    {
      name: 'Jane Doe',
      address: '222 Main St.',
      city: 'Buffalo',
      state: 'NY',
      zip: '22222'
    },
    {
      name: 'George Doe',
      address: '333 third St.',
      city: 'Miami',
      state: 'FL',
      zip: '33333'
    }
  ];

  $scope.formattedAddress = function(person) {
    return person.address + ', ' + person.city + ', ' + person.state + ' ' + person.zip;
  };


  // $scope.name = nameService.name;

  // $scope.$watch('name', function(){
  //   nameService.name = $scope.name;
  // });

  // $log.log(nameService.name);
  // $log.log(nameService.namelength());
}]);

myApp.controller('secondController',['$scope', '$log', '$routeParams', 'nameService', function($scope, $log, $routeParams, nameService){



  // $scope.num = $routeParams.num || 1;
  // $scope.name = nameService.name;

  // $scope.$watch('name', function(){
  //   nameService.name = $scope.name;
  // });
}]);

myApp.directive('searchResult', function() {
  return {
    templateUrl: 'directives/searchresult.html',
    replace: true,
    scope: {
      personObject: "=",
      formattedAddressFunction: "&"
      // personName: "@",
      // personAddress: "@"
    },
    transclude: true
    // link: function(scope, elements, attrs) {
    //       console.log('Linking');
    //       if(scope.personObject.name == 'Jane Doe') {
    //         elements.removeAttr('class');
    //       }
    //       console.log(elements);
    //     }
    // compile: function(elem, attrs) {
    //   console.log('Compiling...');
    //   console.log(elem);

    //   return {
    //     // pre: function(scope, elements, attrs) {
    //     //   console.log('Pre-linking');
    //     //   console.log(elements);
    //     // },
    //     post: function(scope, elements, attrs) {
    //       console.log('Post-linking');
    //       if(scope.personObject.name == 'Jane Doe') {
    //         elements.removeAttr('class');
    //       }
    //       console.log(elements);
    //     }
    //   }
    }
});