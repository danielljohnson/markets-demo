define(
    [
        'app/domain/Repository',
        'handlebars'
    ],
    function(Repository) {
        'use strict';

        var isActive = function(route) {
            return (Backbone.history.fragment === route) ? 'active' : '';
        };

        var modalTitle = function(model_id, model_name) {
            return (typeof model_id === 'undefined') ? 'Create Market' : 'Edit ' + model_name;
        };

        var getCurrencyDesc = function(currency_id) {
            return Repository.getCurrencies().get(currency_id).get('description');
        };

        var getLocationName = function(location_id) {
            return Repository.getLocations().get(location_id).get('name');
        };

        return {
            registerHelpers: function() {
                Handlebars.registerHelper('isActive', isActive);
        
                Handlebars.registerHelper('modalTitle', modalTitle);
                
                Handlebars.registerHelper('getCurrencyDesc', getCurrencyDesc);
                
                Handlebars.registerHelper('getLocationName', getLocationName);
            }
        };
    }
);