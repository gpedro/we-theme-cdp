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
      path: 'theme/templates/sails',
      layout: 'theme/templates/sails/layouts/default.ejs',
      filesToInjectCssJs: 'theme/templates/sails/**/*.ejs',
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
        'theme/stylesheet/styles.min.css'
      ]
    }

  }
};
