define(['backbone', 'chai', 'app/domain/Market', 'backbone.validation'], function(Backbone, chai, Market) {
  var assert = chai.assert;
  
  beforeEach(function() {
    _.extend(Backbone.Model.prototype, Backbone.Validation.mixin);
  });
  
  describe('Market Model', function() {
    it('validation passes if required attributes are set', function() {
      var market = new Market();
      
      market.set('name', 'test');
      market.set('location_id', 1);
      market.set('currency_id', 1);
      
      var isValid = market.isValid(true);
        
      assert.equal(isValid, true);
    });
    
    it('validation fails if required attributes are not set', function() {
      var market = new Market();
      
      var isValid = market.isValid(true);
        
      assert.equal(isValid, false);
    });
  });
  
});