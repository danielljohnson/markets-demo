import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function() {
    var viewContext = this;
    
    this.$('.modal').modal('show');
    
    this.$('.modal').on('hidden.bs.modal', function(e) {
      viewContext.get('controller').send('closeModal');
    });
  }
});