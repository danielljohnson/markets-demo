module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      
      concat: {
        options: {
          separator: ';'
        },
        
        app: {
          src: ['src/js/app/**/*.js'],
          dest: 'dist/<%= pkg.name %>-app.js'
        },
        
        vendor: {
          src: ['src/js/vendor/*.js'],
          dest: 'dist/<%= pkg.name %>-vendor.js'
        }
      },
      
      uglify: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
        },
        dist: {
          files: {
            'dist/<%= pkg.name %>-app.min.js': ['<%= concat.vendor.dest %>', '<%= concat.app.dest %>']
          }
        }
      },
      
      jshint: {
        all: ['Gruntfile.js', 'src/js/app/**/*.js', 'test/**/*.js'],
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
        
        'mocha-phantomjs': {
          command: 'mocha-phantomjs -R spec http://127.0.0.1/~djohn3/markets-demo/markets-ui/test/unit/specRunner.html',
            options: {
              stdout: true,
              stderr: true
            }
         }
      }
    });
    
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
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
    grunt.registerTask('unit', ['shell:mocha-phantomjs']);
};