import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    editMarket: function() {
      var market = this.get('model');
      
      //$('#marketsModal').modal('show');
    },
    
    removeMarket: function() {
      var market = this.get('model');
      market.deleteRecord();
      market.save();
    }
  }
});
