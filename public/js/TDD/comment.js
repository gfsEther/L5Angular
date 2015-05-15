var comApp = angular.module('comments', []);

comApp.controller('CommentController', ['$scope', function($scope){
  $scope.comments = [];

  $scope.add = function(commentToAdd){
    var newComment = {value: commentToAdd, likes:0};
    $scope.comments.unshift(newComment);
  };

  $scope.like = function(comment) {
    comment.likes++;
  }
}]);