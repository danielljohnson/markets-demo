angular
    .module('markets-demo-angular')
    .factory('CurrenciesSvc', function ($resource) {
        'use strict';

        return $resource('/rest/currencies', {}, {
        	get: {
        		method: 'GET',
        		transformResponse: function(response) {
        			var responseHash = {};
        			
        			angular.forEach(JSON.parse(response).currencies, function(value) {
        				responseHash[value.id] = value;
        			})
        			
        			return responseHash;
        		}
        	}
        });
    });