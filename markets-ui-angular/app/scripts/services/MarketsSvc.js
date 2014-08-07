angular
    .module('markets-demo-angular')
    .factory('MarketsSvc', function ($resource) {
        'use strict';

        return $resource('/rest/markets/:id', {}, {
        	delete: {
        		method: 'DELETE'
        	},
        	get: {
        		method: 'GET',
        		isArray: true,
        		transformResponse: function(response) {
        			return JSON.parse(response).markets;
        		}
        	}
        });
    });