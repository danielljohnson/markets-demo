import Ember from 'ember';

var Router = Ember.Router.extend({
  location: MarketsUiEmberENV.locationType
});

Router.map(function() {
  this.resource('markets', function() {
    
  });
});

export default Router;