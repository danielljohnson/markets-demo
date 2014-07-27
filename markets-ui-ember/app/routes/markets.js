import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    console.log(this.store.find('market'))
    
    return this.store.find('market');
  }
});