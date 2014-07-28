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

        var getCurrencyDesc = function(currency) {
            return Repository.getCurrencies().get(currency).get('description');
        };

        var getLocationName = function(location) {
            return Repository.getLocations().get(location).get('name');
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