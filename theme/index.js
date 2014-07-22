/**
 * @module       :: Theme
 * @name         :: we-theme-default
 * @description  :: We.js theme default
 * @docs         :: http://docs.wejs.org/theme/default
 */

module.exports = {
  // theme config
  configs: {
    // sails views
    views: {
      path: 'templates/sails',
      layout: 'templates/sails/layouts/default.ejs',
      filesToInjectCssJs: 'templates/sails/**/*.ejs',
    },

    // email views
    emailTemplates: {
      path: 'templates/email',
    },

    // javascript assets
    javascript: {
      files: [
        'javascript/scripts.min.js'
      ]
    },

    // stylesheet assets
    stylesheet: {
      files: [
        'stylesheet/styles.min.css'
      ]
    }

  }
};
