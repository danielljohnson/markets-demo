define([
  'chai',
  'sinon',
  'app/framework/HandlebarsUtil',
  'app/pages/Markets/MarketsPage'
], function(chai, sinon, HandlebarsUtil, MarketsPage) {
  var assert = chai.assert;
  
  before(function() {
    HandlebarsUtil.registerHelpers();
  });
  
  describe('Markets Page', function() {
    it('renders the right element and id attribute', function() {
      var view = new MarketsPage();
      
      assert.equal(view.render().el.tagName.toLowerCase(), 'section');
      assert.equal(view.render().el.id, 'markets-page');
    });
  });
  
});