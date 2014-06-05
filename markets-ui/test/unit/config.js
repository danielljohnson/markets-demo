// Set up the "require" variable which RequireJS will pick up when it is loaded in main.js.
// This ensures that the configuration loads before any other scripts are required in.
require.config({
    //urlArgs: "v="+(new Date()).getTime(),
    
    baseUrl: (function() {
      if (window.__karma__) {
        return '/base';
      } else {
        return '../';
      }
    })(),
  
    paths: {
        // jQuery
        jquery:                      'src/bower_components/jquery/dist/jquery',

        // Underscore
        underscore:                  'src/bower_components/underscore/underscore',

        // Backbone
        backbone:                    'src/bower_components/backbone/backbone',
        
        // Backbone Stickit
        'backbone.stickit':          'src/bower_components/backbone.stickit/backbone.stickit',
        
        // Backbone Validation
        'backbone.validation':       'src/bower_components/backbone-validation/dist/backbone-validation',

        // Templating
        handlebars:                  'src/bower_components/handlebars/handlebars',

        // Bootstrap
        bootstrap:                   'src/bower_components/bootstrap/dist/js/bootstrap',
        
        // requirejs-text
        text:                        'src/bower_components/requirejs-text/text',
        
        // chai
        chai:                        'node_modules/chai/chai',
        
        // sinon
        sinon:                       'node_modules/sinon/pkg/sinon-1.10.1',
        
        // app
        app:                         'src/js/app',
        
        // keel
        keel:                        'src/js/keel'
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
        },
        
        sinon: {
             exports: 'sinon'
        }
    },
    
    deps: [
      'test/unit/domain/Market',
      'test/unit/pages/Markets/MarketsPage'
    ],
    
    callback: function() {
      if (window.__karma__) {
        window.__karma__.start();
      }
      
      /*if (window.mochaPhantomJS) { 
        mochaPhantomJS.run();
      } else {
        mocha.run();
      }*/
    }
});