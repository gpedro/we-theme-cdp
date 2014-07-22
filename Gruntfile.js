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
    },

    // grunt-contrib-uglify
    // https://github.com/gruntjs/grunt-contrib-uglify
    uglify: {
      dist: {
        files: {
          '<%= path.theme %>/javascript/scripts.min.js': ['<%= path.src %>/js/jquery.js', '<%= path.src %>/js/bootstrap.js']
        }
      }
    },

    // grunt-bump
    // https://github.com/vojtajina/grunt-bump
    bump: {
      options: {
        files: ['package.json', 'bower.json'],
        commit: true,
        commitMessage: 'v%VERSION%',
        commitFiles: ['package.json', 'bower.json'],
        createTag: true,
        tagName: 'v%VERSION%',
        tagMessage: '',
        push: false,
        gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d'
      }
    }

  };

  // grunt config
  grunt.initConfig(config);

  // load all grunt tasks matching the `grunt-*` pattern
  require('load-grunt-tasks')(grunt);

  // task: default
  grunt.registerTask('default', ['sass', 'uglify']);

};
