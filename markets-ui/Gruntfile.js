module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      
      jshint: {
        all: ['Gruntfile.js', 'src/js/app/**/*.js', 'test/**/*.js'],
        options: {
          ignores: ['src/js/app/**/*Template.html.js']
        }
      },
        
      watch: {
        files: ['<%= jshint.files %>'],
        tasks: ['jshint']
      },
      
      casper: {
        all: {
          options: {
            test: true
          },
          src: 'test/casperjs/test.js'
        }
      },
      
      webdriver: {
        options: {
          bail: true,
          desiredCapabilities: {
            browserName: 'chrome',
            options: {
              stdout: true,
              stderr: true
            }
          }
        },
        all: {
          tests: ['test/webdriverjs/*.js']
        }
      },
      
      shell: {
        'cucumberjs': {
          command: 'cucumber.js test/cucumberjs -f pretty',
            options: {
            stdout: true,
            stderr: true
          }
        },
         
        'karma': {
          command: 'karma start',
          options: {
            stdout: true,
            stderr: true
          }
        },
        
        'plato': {
            command: 'plato -r -d report -l .jshintrc src/js/app',
            options: {
              stdout: true,
              stderr: true
            }
        }
      }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-webdriver');
    grunt.loadNpmTasks('grunt-casper');
    
    // default
    grunt.registerTask('default', ['jshint']);
    
    // webdriver selenium
    grunt.registerTask('_webdriverjs', ['webdriver:all']);
    
    // grunt webdriverjs --browser=chrome
    grunt.registerTask('webdriverjs', function() {
      var browser = grunt.option('browser') || 'phantomjs';
      
      grunt.config.set('webdriver.options.desiredCapabilities.browserName', browser);
      
      grunt.task.run('_webdriverjs');
    });
    
    // cucumberjs
    grunt.registerTask('cucumber', ['shell:cucumberjs']);
    
    // run unit tests using mocha and phantom
    grunt.registerTask('unit', ['shell:karma']);
    
    // plato
    grunt.registerTask('plato', ['shell:plato']);
};