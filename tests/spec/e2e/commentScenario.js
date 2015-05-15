describe('When  I push  the submit  button', function() {
    var firstComment = null;

    beforeEach(function() {
      browser.get('tdd/comments');

      var commentInput = $('input');
      commentInput.sendKeys('a comment');

      var submitButton = element(by.buttonText('Submit')).click();

      firstComment = element.all(by.repeater('comment in comments')).first();
    });

    it('Should  then  add the comment', function() {
      var comment = firstComment.element(by.binding('comment.value'));
      expect(comment.getText()).toBe('a comment');
    });

    describe('When I like a comment', function() {

      beforeEach(function() {
        var likeButton = firstComment.$('button');
        likeButton.click();
      });

      it('should increase the number of likes to one', function() {
        var commentLikes = firstComment.element(by.binding('comment.likes'));
        expect(commentLikes.getText()).toBe('1');
      });
    });
    
});
 
