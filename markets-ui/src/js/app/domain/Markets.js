define(
    [
        'backbone',
        'app/domain/Market'
    ],
    function(Backbone, Market) {
        'use strict';

        return Backbone.Collection.extend({
            url: 'http://localhost:3000/markets',
            
            model: Market
        });
    }
);