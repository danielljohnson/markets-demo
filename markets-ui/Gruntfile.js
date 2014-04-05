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
        all: ['Gruntfile.js', 'src/js/app/**/*.js'],
      },
        
      watch: {
        files: ['<%= jshint.files %>'],
        tasks: ['jshint']
      }
    });
    
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-shell');
    
    grunt.registerTask('default', ['jshint', 'concat', 'uglify']);
};