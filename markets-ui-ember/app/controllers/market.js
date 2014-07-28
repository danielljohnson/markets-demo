import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    removeMarket: function() {
      var market = this.get('model');
      market.deleteRecord();
      market.save();
    }
  }
});
