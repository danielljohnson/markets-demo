import Ember from 'ember';

export default Ember.Controller.extend({
  model: function(params) {
    return this.store.find('market', params.market_id);
  },
  
  actions: {
    removeMarket: function() {
      var market = this.get('model');
      market.deleteRecord();
      market.save();
    }
  }
});
