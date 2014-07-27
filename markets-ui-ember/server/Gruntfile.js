module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
      
        jshint: {
            all: ['Gruntfile.js', 'src/*.js'],
        },

        shell: {
            'mocha': {
                command: 'mocha --reporter spec',
                options: {
                    stdout: true,
                    stderr: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-shell');
    
    grunt.registerTask('default', ['jshint']);
    grunt.registerTask('test', ['shell:mocha']);
};