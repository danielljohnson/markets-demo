// mocha --bail --reporter spec

define(['chai', 'app/pages/Markets/MarketsPage'], function(chai, MarketsPage) {
  var assert = chai.assert;
  
  describe('Markets Page', function() {
      
    it('renders the right element', function() {
      var view = new MarketsPage();
      
      assert.equal(view.render().$el, 'section#markets-page');
    });
    
  });
  
});