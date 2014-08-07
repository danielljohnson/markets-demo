angular
    .module('markets-demo-angular')
    .factory('LocationsSvc', function ($resource) {
        'use strict';

        return $resource('/rest/locations', {}, {
        	get: {
        		method: 'GET',
        		transformResponse: function(response) {
        			var responseHash = {};
        			
        			angular.forEach(JSON.parse(response).locations, function(value) {
        				responseHash[value.id] = value;
        			})

        			return responseHash;
        		}
        	}
        });
    });