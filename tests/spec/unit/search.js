describe('Name of the group', function() {
  var scope = {};
  describe('', function() {
      
      beforeEach(function() {
        module('searchApp');
        inject(function($controller){
          $controller('SearchController', {$scope:scope});
        });
      });

      it('should define a result object', function() {
        expect(scope.results).toBeDefined();
      });

      describe('', function() {
        beforeEach(function() {
          scope.search();
        });

        it('should have the text in the results object', function(){
          expect(scope.results[0].name).toEqual('Any Value');
        });
      });
      
  });

  describe('', function() {
    beforeEach(function() {
      module('searchApp');
      inject(function($controller) {
        var route = {id:1};
        $controller('SearchDetailController', {$scope: scope, $routeParams:route});
      });
    });

    it('should return results', function() {
      expect(scope.detail.id).toBe(1);
    });
  });
});
  
