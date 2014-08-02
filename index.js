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

    emberTemplates: {
      path: 'templates/ember',
    },

    emailTemplates: {
      path: 'templates/email',
    },

    assetsFolderToCopy: 'assets/**/*',

    javascript: 'assets/js/scripts.js',

    stylesheet: 'assets/css/styles.css'

  }
};
