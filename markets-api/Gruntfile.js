module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      
      jshint: {
        all: ['Gruntfile.js', 'src/*.js'],
      }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-shell');
    
    grunt.registerTask('default', ['jshint']);
};