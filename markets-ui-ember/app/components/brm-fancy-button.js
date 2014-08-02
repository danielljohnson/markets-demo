import Ember from 'ember';

export default Ember.Component.extend({
  click: function() {
    this.sendAction('action', 123); // first param is action if we are using a default action, otherwise it's the name of the action defined in the template
  }
});