/**
 * Gruntfile.js
 *
 */

module.exports = function (grunt) {
  'use strict';

  var config = {
    // config: paths
    path: {
      bower: 'bower_components',
      templates: 'theme/templates',
      theme: 'theme',
      src: 'src'
    },

    // grunt-sass
    // https://github.com/sindresorhus/grunt-sass
    sass: {
      options: {
        includePaths: ['<%= path.src %>/sass'],
        outputStyle: 'compressed'
      },
      stylesheet: {
        files: {
          '<%= path.theme %>/stylesheet/styles.min.css' : '<%= path.src %>/sass/bootstrap.scss'
        }
      }
    }

  };

  // grunt config
  grunt.initConfig(config);

  // load all grunt tasks matching the `grunt-*` pattern
  require('load-grunt-tasks')(grunt);

  // task: default
  grunt.registerTask('default', ['sass']);

};
