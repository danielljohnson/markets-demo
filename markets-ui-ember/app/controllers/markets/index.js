import Ember from 'ember';

export default Ember.ArrayController.extend({
  totalMarkets: function() {
    return 'Total Markets: ' + this.get('model').get('length');
  }.property('@each')
});
