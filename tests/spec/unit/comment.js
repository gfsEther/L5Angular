describe('', function() {
  var scope = {};
  beforeEach(function() {
    module('comments');
    inject(function($controller){
      $controller('CommentController', {$scope:scope});
    });

    scope.add('any comment');
    
    scope.like(scope.comments[0]);
  });
  it('add comment', function() {
    expect(scope.comments[0].value).toBe('any comment');
  });

  it('give a like', function() {
    expect(scope.comments[0].likes).toBe(1);
  });
});