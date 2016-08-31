'use strict';

// fckyah studio gulp file

// errors and the config file...

var config          = require('./config.js');
var errors          = require('./errors.js');


// the requires needed to run this shit

var browserify      = require('browserify');
var ngAnnotate      = require('browserify-ngannotate');
var del             = require('del');
var gulp            = require('gulp');
var templateCache   = require('gulp-angular-templatecache');
var autoprefix      = require('gulp-autoprefixer');
var changed         = require('gulp-changed');
var gulpif          = require('gulp-if');
var imagemin        = require('gulp-imagemin');
var jade            = require('gulp-jade');
var jshint          = require('gulp-jshint');
var livereload      = require('gulp-livereload');
var nodemon         = require('gulp-nodemon');
var sass            = require('gulp-sass');
var sourcemaps      = require('gulp-sourcemaps');
var streamify       = require('gulp-streamify');
var svg2png         = require('gulp-svg2png');
var uglify          = require('gulp-uglify');
var jadeify         = require("jadeify");
var runSequence     = require('run-sequence');
var source          = require('vinyl-source-stream');
var watchify        = require('watchify');



// `gulp prod` for server push
// the isprod flag is the only important factor of that really.
// you'll see that shit sprinkled through out.

gulp.task('prod', ['clean'], function(cb) {
  global.isProd = true;
  runSequence('sass', 'images', 'views','js', 'fonts', 'server', 'watch', cb);
});



// just write `gulp` to get dat dev

gulp.task('default', [ 'development']);



// or write `gulp development` if you want to be a dick about it.

gulp.task('development', function(cb) {
  global.isProd = false;
  runSequence('sass', 'images', 'views', 'js', 'fonts', 'server', 'watch', cb);
});



// this is for shit that has to do with the browser.
// boots the livereload server (download the chrome plug-in)
// I don't need live updates for other browsers.. because I know how to code.

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch(config.scripts.app, ['js']);
  gulp.watch(config.sass.app, ['sass']);
  gulp.watch(config.images.app, ['images']);
  gulp.watch(config.views.watch, ['views','js'])
});



// this ignores and only watches server stuff excluding gulp.
// ignore stuff speeds up the whole process as well. Only watch what's neccesary.

gulp.task('server', function(){
  nodemon({
    script: config.nodemon.entry,
    ignore: config.nodemon.ignore
  })
  .on('restart', function () { })
});



//
// it's fucking linting.. make crockford happy, don't be a dick.

gulp.task('lint', function(){
  return gulp.src([config.scripts.app, '!app/js/templates.js',  '!public'])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});



// js
// this shit is mad confusing... look it up.
// browserify the jade templates into an angular cached file... seriously.
// mad confusing... but works somehow.

function buildScript(file) {
  var bundler = browserify({
    entries: config.browserify.app,
    cache: {},
    packageCache: {},
    fullPaths: true,
    debug: true
    }, watchify.args);

  if ( !global.isProd ) {
    bundler = watchify(bundler);
    bundler.on('update', function() {
     rebundle();
    });
  }

  bundler.transform(ngAnnotate);
  bundler.transform(jadeify)
    .on('error', errors);
  bundler.transform('brfs');

  function rebundle() {
    var stream = bundler.bundle();
    return stream.on('error', errors)
      .pipe(source(file))
      .pipe(gulpif(global.isProd, streamify(uglify())))
      .on('error', errors)
      .pipe(gulp.dest(config.scripts.public))
  }
  return rebundle();
}



// this runs that whole mess and reloads the browser

gulp.task('js', function() {
  return buildScript(config.browserify.bundleName)
    .pipe(gulpif(!global.isProd, livereload()));
});



// sass
// don't use this whole thing if this below doesn't make sense.
// it's just sass compiled and pushed to the browser.
// I don't do source maps because... I know how to write code. fuckin' amateurs.

gulp.task('sass', function() { 
  return gulp.src(config.sass.app)
    .pipe(sass({
      outputStyle:'compressed'
    }))
    .on('error', errors)
    .pipe(autoprefix("last 2 versions", "> 1%", "ie 6"))
    .pipe(gulp.dest(config.sass.public))
    .pipe(gulpif(!global.isProd, livereload()))
});



// images
// compress themshits and dump it into the public folder

gulp.task('images', function() {
  return gulp.src(config.images.app)
    .pipe(changed(config.images.public))
    .pipe(gulpif(global.isProd,
      imagemin({
        progressive: true,
        optimizationLevel: 6,
        svgoPlugins: [{removeViewBox: false}]
      })))
    .on('error', errors)
    .pipe(gulp.dest(config.images.public))
    .pipe(gulpif(!global.isProd, livereload()));
});



// fonts
// if you have typography.com fonts, it'll copy them over.

gulp.task('fonts', function() {
  return gulp.src(config.fonts.app)
    .pipe(gulp.dest(config.fonts.public));
});



// views
// jade shit and template cache shit... it's all confusing.

gulp.task('views', function() {
  gulp.src('app/index.jade')
    .pipe(gulp.dest('views'));
  return gulp.src(config.views.app)
    .pipe(jade())
    .on('error', errors)
    .pipe(templateCache({ standalone: true }))
    .pipe(gulp.dest(config.views.public))
    .pipe(gulpif(!global.isProd, livereload()));
});



// clean
// go fuck yourself.

gulp.task('clean', function() {
  del(['public']);
});



// not really... but it's funny to write as a note.
