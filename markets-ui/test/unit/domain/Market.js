// mocha --bail --reporter spec

define(['chai', 'app/domain/Market'], function(chai, Market) {
  var assert = chai.assert;
  
  describe('Math', function() {
    it('adds', function() {
      assert.equal(1+ 1, 2);
    });
  });
  
});