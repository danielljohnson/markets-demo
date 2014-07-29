import Ember from 'ember';

export default Ember.ArrayController.extend({  
  actions: {
    openModal: function() {
      $('#marketsModal').modal('show');
    },
    
    createMarket: function() {
      var name = this.get('name'),
        location = this.get('location');

      var market = this.store.createRecord('market', {
        name: name,
        location: location
      });

      this.set('market', '');
      this.set('location', '');

      market.save();
    }
  }
});