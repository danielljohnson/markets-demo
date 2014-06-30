define([
    'backbone'
], function(Backbone) {
    'use strict';

    var Locations = Backbone.Collection.extend({
        url: 'http://localhost:3000/locations',
        
        parse: function(response) {
            return response.locations;
        }
    });
    
    var locations = new Locations();
    
    locations.fetch();

    var Currencies = Backbone.Collection.extend({
        url: 'http://localhost:3000/currencies',
        
        parse: function(response) {
            return response.currencies;
        }
    });
    
    var currencies = new Currencies();
    
    currencies.fetch();

    var _repository = {
        getLocations: function () {
            return locations;
        },

        getCurrencies: function () {
            return currencies;
        }
    };

    return _repository;
});