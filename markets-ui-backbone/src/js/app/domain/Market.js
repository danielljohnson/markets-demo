define([
    'backbone'
], function(Backbone) {
    'use strict';

    return Backbone.Model.extend({
        urlRoot: 'http://localhost:3000/markets',

        validation: {
            name: {
                required: true
            },

            currency: {
                required: true
            },

            location: {
                required: true
            }
        },
        
        // pad JSON (Ember needs it this way)
        toJSON: function() {
            return {
                market: _.clone(this.attributes)
            }
        }
    });
});