import Ember from 'ember';

export default Ember.ArrayController.extend({
  actions: {
    addMarket: function() {
      console.log('add market');
    }
  }
});
