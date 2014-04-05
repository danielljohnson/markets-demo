require(
    [
        'app/framework/App',
        'app/framework/HandlebarsUtil',
        'jquery'
    ], 
    function(App, HandlebarsUtil, $) {
        'use strict';

        // Set default timeout for AJAX requests to 20 seconds
        // This should be done before instantiating the AppRouter,
        // because the initialization sequence fires AJAX requests
        $.ajaxSetup({timeout: 20000});

        // Register Handlebars helpers
        HandlebarsUtil.registerHelpers();

        // Kick off the application by requiring in the app and starting it
        App.start();
    }
);