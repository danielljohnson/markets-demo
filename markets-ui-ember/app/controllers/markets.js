import Ember from 'ember';

export default Ember.ArrayController.extend({
  actions: {
    fancyBtnClick: function(num) {
      console.log(num);
    }
  }
});