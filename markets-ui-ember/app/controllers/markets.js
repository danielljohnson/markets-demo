import Ember from 'ember';

export default Ember.ArrayController.extend({
  locations: Ember.computed(function() {
    return this.store.find('location');
  }),
  
  currencies: Ember.computed(function() {
    return this.store.find('currency');
  }),
  
  actions: {
    openModal: function() {
      $('#marketsModal').modal('show');
    },
    
    locationChange: function(value) {
      console.log(value);
      this.set('location', value);
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