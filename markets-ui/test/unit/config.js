// Set up the "require" variable which RequireJS will pick up when it is loaded in main.js.
// This ensures that the configuration loads before any other scripts are required in.
require.config({
    urlArgs: "v="+(new Date()).getTime(),
  
    paths: {
        // jQuery
        jquery:                      '../../src/js/vendor/jquery-2.0.3',

        // Underscore
        underscore:                  '../../src/js/vendor/underscore-1.5.2',

        // Backbone
        backbone:                    '../../src/js/vendor/backbone-1.1.0',
        
        // Backbone Stickit
        'backbone.stickit':          '../../src/js/vendor/backbone.stickit',
        
        // Backbone Validation
        'backbone.validation':       '../../src/js/vendor/backbone-validation',

        // Templating
        handlebars:                  '../../src/js/vendor/handlebars-v1.3.0',

        // Bootstrap
        bootstrap:                   '../../src/js/vendor/bootstrap',
        
        // chai
        chai:                        '../../node_modules/chai/chai',
        
        // app
        app:                         '../../src/js/app'
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
});

// load and run the test modules
require(['domain/Market'], function() {
    if (window.mochaPhantomJS) { 
        mochaPhantomJS.run();
    } else {
        mocha.run();
    }
});