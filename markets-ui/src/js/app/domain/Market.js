define(
    [
        'backbone'
    ],
    function(Backbone) {
        'use strict';

        return Backbone.Model.extend({
            urlRoot: 'http://localhost:3000/markets',
            
            validation: {
                name: {
                    required: true
                },
                
                currency_id: {
                    required: true
                },
                
                location_id: {
                    required: true
                }
            }
        });
    }
);