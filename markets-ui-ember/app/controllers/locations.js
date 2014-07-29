import Ember from 'ember';

export default Ember.ArrayController.extend({
  model: function() {
    return this.store.find('location');
  }
});