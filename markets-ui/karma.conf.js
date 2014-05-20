module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'requirejs'],


    // list of files / patterns to load in the browser
    files: [
      {pattern: 'src/js/**/*.js', included: false},
      {pattern: 'src/js/**/*.html', included: false},
      {pattern: 'node_modules/chai/chai.js', included: false},
      {pattern: 'node_modules/sinon/pkg/sinon-1.9.1.js', included: false},
      {pattern: 'src/bower_components/jquery/dist/jquery.js', included: false},
      {pattern: 'src/bower_components/underscore/underscore.js', included: false},
      {pattern: 'src/bower_components/backbone/backbone.js', included: false},
      {pattern: 'src/bower_components/backbone.stickit/backbone.stickit.js', included: false},
      {pattern: 'src/bower_components/backbone-validation/dist/backbone-validation.js', included: false},
      {pattern: 'src/bower_components/bootstrap/dist/js/bootstrap.js', included: false},
      {pattern: 'src/bower_components/requirejs-text/text.js', included: false},
      {pattern: 'src/bower_components/handlebars/handlebars.js', included: false},
      {pattern: 'test/unit/domain/Market.js', included: false},
      {pattern: 'test/unit/pages/Markets/MarketsPage.js', included: false},
      'test/unit/config.js'
    ],


    // list of files to exclude
    exclude: [
      'src/js/app/main.js'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/js/app/**/*.js': ['coverage'] 
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec', 'coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,
    
    
    coverageReporter: {
      type : 'lcov'
    }
  });
};
