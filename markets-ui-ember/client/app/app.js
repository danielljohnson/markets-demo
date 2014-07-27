import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

Ember.MODEL_FACTORY_INJECTIONS = true;

Ember.Inflector.inflector.irregular('currency', 'currencies');

var App = Ember.Application.extend({
  modulePrefix: 'markets-ui-ember', // TODO: loaded via config
  Resolver: Resolver
});

loadInitializers(App, 'markets-ui-ember');

export default App;
