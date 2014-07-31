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
      src: 'assets/src',
      dist: 'assets/dist'
    },

    // grunt-sass
    // https://github.com/sindresorhus/grunt-sass
    sass: {
      options: {
        includePaths: ['<%= path.src %>/sass'],
        outputStyle: 'nested'
      },
      stylesheet: {
        files: {
          '<%= path.dist %>/css/styles.css' : '<%= path.src %>/sass/bootstrap.scss'
        }
      }
    },

    // grunt-contrib-imagemin
    // https://github.com/gruntjs/grunt-contrib-imagemin
    imagemin: {
      static: {
        options: {
          optimizationLevel: 3
        },
        files: [{
          expand: true,
          cwd: '<%= path.src %>/images/',
          src: ['**/*.{png,jpg,gif}'],
          dest: '<%= path.dist %>/img/'
        }]
      }
    },

    // grunt-contrib-copy
    // https://github.com/gruntjs/grunt-contrib-copy
    copy: {
      icons: {
        expand: true,
        cwd: '<%= path.src %>/icons/',
        src: '**',
        dest: '<%= path.dist %>/icons/'
      },
    },

    // grunt-contrib-concat
    // https://github.com/gruntjs/grunt-contrib-concat
    concat: {
      dist: {
        src: ['<%= path.src %>/javascript/bootstrap.js'],
        dest: '<%= path.dist %>/js/scripts.js',
      },
    },

    // grunt-contrib-watch
    // https://github.com/gruntjs/grunt-contrib-watch
    watch: {
      stylesheet: {
        files: '<%= path.src %>/sass/**/*.scss',
        tasks: ['sass'],
        options: {
          livereload: true
        }
      },
      javascript: {
        files: '<%= path.src %>/javascript/**/*.js',
        tasks: ['concat'],
        options: {
          livereload: true
        }
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
          '<%= path.dist %>'
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
