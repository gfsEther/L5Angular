describe('', function() {
  var todoListItems = element.all(by.repeater('item in list'));
  
  beforeEach(function() {
    browser.get('/tdd/protractor');
  });

  it('', function() {
    expect(todoListItems.count()).toBe(3);
  });

  describe('should add an item', function() {

    beforeEach(function() {
      // browser.get('/tdd/protractor');

      var input = element(by.model('newTodoItem'));
      input.sendKeys('new Item');

      var inputButton = element(by.css('#AddItemButton'));
      inputButton.click();

       
    });

    it('check the amount of item', function() {
      expect(todoListItems.count()).toBe(4);
    });

    it('the last item should match the item added', function() {
      expect(todoListItems.last().getText()).toContain('new Item');
    });
  });

  describe('should remove an item', function() {
    

    beforeEach(function() {
      // browser.get('/tdd/protractor');

      var inputButton = element(by.css('#Removerefactor'));
      
      inputButton.click();
    });

    it('list should have less one item', function() {
      expect(todoListItems.count()).toBe(2);
    });

    it('the item removed shoulndt appear in the list', function(){
      expect(todoListItems.get(0).getText()).not.toContain('refactor');
      expect(todoListItems.get(1).getText()).not.toContain('refactor');
    });

  });

});