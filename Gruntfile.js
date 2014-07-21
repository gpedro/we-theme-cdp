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
    }

  };

  // grunt config
  grunt.initConfig(config);

  // task: default
  grunt.registerTask('default', []);

};
