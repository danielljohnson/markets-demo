define(
    [
        'backbone'
    ],
    function(Backbone) {
        'use strict';
        
        var _locations = new Backbone.Collection();
        _locations.url = 'http://localhost:3000/locations';
        
        var _currencies = new Backbone.Collection();
        _currencies.url = 'http://localhost:3000/currencies';
        
        var _repository = {
            getLocations: function () {
                return _locations;
            },
            
            getCurrencies: function () {
                return _currencies;
            }
        };
        
        _locations.fetch();
        _currencies.fetch();

        return _repository;
    }
);