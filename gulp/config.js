'use strict';

module.exports = {

  'serverport': 5000,

  'sass': {
    'app' : 'app/sass/**/*.scss',
    'public': 'public/css'
  },

  'scripts': {
    'app' : 'app/js/**/*.js',
    'ignore': 'app/js/templates.js',
    'public': 'public/js'
  },

  'images': {
    'app' : 'app/img/**/*',
    'public': 'public/img',
    'svg' : 'app/img/**/*.svg'
  },

  'fonts': {
    'app' : 'app/fonts/**/*',
    'public': 'public/fonts'
  },
  
  'nodemon' : {
    'entry' : 'index.js',
    'ignore' : ["gulp"," app", "app", "public", "gulpfile.js", ".openshift" , "node_modules" , "views"]
  },

  'views': {
    'watch': [
      'app/index.jade',
      'app/views/**/*.jade'
    ],
    'app': 'app/views/**/*',
    'public': 'app/js'
  },

  'browserify': {
    'app'   : ['./app/js/app.js'],
    'bundleName': 'app.js'
  }

};