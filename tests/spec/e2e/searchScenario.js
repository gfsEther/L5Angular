describe('', function() {
  var searchResult = null;
  beforeEach(function() {
    browser.get('tdd/search');
    searchResult = element.all(by.repeater('result in results'));
    expect(searchResult.count()).toBe(0);

    var searchQueryInput = $('input');
    searchQueryInput.sendKeys('Any Value');
    expect(searchResult.count()).toBe(0);

    var searchButton = element(by.buttonText('search'));
    searchButton.click();
  });

  it('', function() {
    expect(searchResult.count()).toBe(1);
  });

  describe('Given search  results', function() {
    describe('When I select an item from the search results', function() {
      var resultId = null;
      beforeEach(function() {
        var resultItem = element.all(by.repeater('result in results')).first();
        var resultLink = resultItem.element(by.css('a'));
        resultId = resultLink.getAttribute('href').then(function(attr){
          return attr.match(/#\/detail\/(\d+)/)[1];
        });
        resultLink.click();
      });

      it('should  see the details in  the main  page  component', function() {
        var resultDetail = element(by.css('#searchResultDetail'));
        expect(resultDetail.isDisplayed()).toBeTruthy();
      });

      it('Should  set the url to  the selected  detail  view', function() {
        resultId.then(function(id){
          var expectedUrl = '/detail/'+id;
          browser.getLocationAbsUrl().then(function(url){
            expect(url.split('#')[1]).toBe(expectedUrl);
          });
        }); 
      });
    });
  });
});