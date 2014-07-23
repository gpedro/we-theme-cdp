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

    // grunt-templater
    // https://github.com/rockwood/grunt-templater
    data: grunt.file.readJSON('demo/data.json'),
    template: {
      default: {
        src: ['<%= path.templates %>/sails/layouts/default.ejs'],
        dest: 'demo/index.html',
        variables: '<%= data.variables %>'
      }
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

    // grunt-contrib-watch
    // https://github.com/gruntjs/grunt-contrib-watch
    watch: {
      template: {
        files: '<%= path.templates %>/**/*.ejs',
        tasks: ['template'],
        options: {
          livereload: true
        }
      },
      stylesheet: {
        files: '<%= path.src %>/sass/**/*.scss',
        tasks: ['sass'],
        options: {
          livereload: true
        }
      },
      javascript: {
        files: '<%= path.src %>/js/**/*.js',
        tasks: ['uglify'],
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
        commitMessage: 'v%VERSION%',
        commitFiles: ['package.json', 'bower.json', '<%= path.templates %>', 'demo/'],
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
