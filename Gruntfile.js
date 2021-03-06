module.exports = function (grunt) {

// Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            css: {
                files: [
                    '**/*.sass',
                    '**/*.scss'
                ],
                tasks: ['compass']
            },
            js: {
                files: [
                    'public/js/*.js',
                    'Gruntfile.js'
                ],
                tasks: ['jshint']
            }
        },
        compass: {
            dist: {
                options: {
                    sassDir: 'public/sass',
                    cssDir: 'public/css',
                    outputStyle: 'compressed'
                }
            }
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: ['Gruntfile.js', 'public/js/*.js']
        }
    });

// Load the Grunt plugins.
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');

// Register the default tasks.
    grunt.registerTask('default', ['compass']);
};