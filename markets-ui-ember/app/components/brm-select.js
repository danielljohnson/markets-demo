import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'select',
  options: null,
  
  change: function() {
    var value = this.$().val();
  
    //Ember.set(this, 'value', value);
    
    this.sendAction('locationChange', value);
  }
});