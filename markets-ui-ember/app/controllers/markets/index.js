import Ember from 'ember';

export default Ember.ArrayController.extend({
  itemController: 'market',
  
  totalMarkets: function() {
    return 'Total Markets: ' + this.get('model').get('length');
  }.property('@each')
});
