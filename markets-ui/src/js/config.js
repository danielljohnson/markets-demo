// Set up the "require" variable which RequireJS will pick up when it is loaded in main.js.
// This ensures that the configuration loads before any other scripts are required in.
var require = {
    // Initialize the application with the main application file
    deps: ['main'],

    paths: {
        // jQuery
        jquery:                      'vendor/jquery-2.0.3',

        // Underscore
        underscore:                  'vendor/underscore-1.5.2',

        // Backbone
        backbone:                    'vendor/backbone-1.1.0',
        
        // Backbone Stickit
        'backbone.stickit':          'vendor/backbone.stickit',
        
        // Backbone Validation
        'backbone.validation':       'vendor/backbone-validation',

        // Templating
        handlebars:                  'vendor/handlebars-v1.3.0',

        // Bootstrap
        bootstrap:                   'vendor/bootstrap'
    },

    shim: {
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        
        'backbone.stickit': {
            deps: ['backbone'],
            exports: 'Backbone.stickit'
        },
        
        'backbone.validation': {
            deps: ['backbone'],
            exports: 'Backbone.validation'
        },

        handlebars: {
            exports: 'Handlebars'
        },

        underscore: {
            exports: '_'
        }
    }
};