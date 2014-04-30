// Set up the "require" variable which RequireJS will pick up when it is loaded in main.js.
// This ensures that the configuration loads before any other scripts are required in.
require.config({
    urlArgs: "v="+(new Date()).getTime(),
  
    paths: {
        // jQuery
        jquery:                      '../../bower_components/jquery/dist/jquery',

        // Underscore
        underscore:                  '../../bower_components/underscore/underscore',

        // Backbone
        backbone:                    '../../bower_components/backbone/backbone',
        
        // Backbone Stickit
        'backbone.stickit':          '../../bower_components/backbone.stickit/backbone.stickit',
        
        // Backbone Validation
        'backbone.validation':       '../../bower_components/backbone-validation/dist/backbone-validation',

        // Templating
        handlebars:                  '../../bower_components/handlebars/handlebars',

        // Bootstrap
        bootstrap:                   '../../bower_components/bootstrap/dist/js/bootstrap',
        
        // requirejs-text
        text:                        '../../bower_components/requirejs-text/text',
        
        // chai
        chai:                        '../../node_modules/chai/chai',
        
        // app
        app:                         '../../src/js/app',
        
        // keel
        keel:                        '../../src/js/keel'
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
        },
        
        bootstrap: {
            deps: ['jquery']
        }
    }
});

// load and run the test modules
require([
    'domain/Market',
    'pages/Markets/MarketsPage'
], function() {
    if (window.mochaPhantomJS) { 
        mochaPhantomJS.run();
    } else {
        mocha.run();
    }
});