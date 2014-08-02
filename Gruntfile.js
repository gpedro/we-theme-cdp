/**
 * Gruntfile.js
 *
 */

module.exports = function (grunt) {
  'use strict';

  // time-grunt
  // https://github.com/sindresorhus/time-grunt
  require('time-grunt')(grunt);

  var config = {
    // config: paths
    path: {
      bower: 'bower_components',
      assets: 'assets'
    },

    // grunt-sass
    // https://github.com/sindresorhus/grunt-sass
    sass: {
      options: {
        includePaths: ['<%= path.assets %>/sass'],
        outputStyle: 'nested'
      },
      stylesheet: {
        files: {
          '<%= path.assets %>/css/styles.css' : '<%= path.assets %>/sass/bootstrap.scss'
        }
      }
    },

    // grunt-contrib-concat
    // https://github.com/gruntjs/grunt-contrib-concat
    concat: {
      dist: {
        src: ['<%= path.bower %>/bootstrap/dist/js/bootstrap.js',
              '<%= path.assets %>/js/jquery-1.10.2.min.js',
              '<%= path.assets %>/js/jquery-ui-1.11.0.min.js'],
        dest: '<%= path.assets %>/js/scripts.js',
      },
    },

    // grunt-contrib-watch
    // https://github.com/gruntjs/grunt-contrib-watch
    watch: {
      stylesheet: {
        files: '<%= path.assets %>/sass/**/*.scss',
        tasks: ['sass']
      },
      javascript: {
        files: '<%= path.assets %>/js/**/*.js',
        tasks: ['concat']
      }
    },

    // grunt-bump
    // https://github.com/vojtajina/grunt-bump
    bump: {
      options: {
        files: ['package.json', 'bower.json'],
        commit: true,
        commitMessage: 'Release v%VERSION%',
        commitFiles: [
          'package.json',
          'bower.json',
          '<%= path.assets %>/css/styles.css',
          '<%= path.assets %>/js/scripts.js'
        ],
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
  grunt.registerTask('default', ['watch']);

};
