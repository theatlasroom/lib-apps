var gulp = require('gulp');
var bowerFiles = require('main-bower-files');
var sequence = require('run-sequence');
var changed = require('gulp-changed');
var uglify = require('gulp-uglify');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var striplog = require('gulp-strip-debug');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-ruby-sass');
var minfycss = require('gulp-minify-css');
var gutil = require('gulp-util');
var template = require('gulp-template-compile');
var autoprefix = require('gulp-autoprefixer');

var watch = require('gulp-watch');
var notify = require('gulp-notify');

// config paths
var config = {
  sassPath: './sass',
  bowerDir: './components'
};

// My custom JS
gulp.task('scripts', function() {
  var js_src = [
  	'js/app.js',
  	'js/models/**/*.js',
  	'js/collections/**/*.js',
  	'js/views/**/*.js',
  	'js/routers/**/*.js',
  	'js/templates/**/*.js'
  ]; 
  var js_dest = 'dist/js';

  // Add the newer pipe to pass through newer images only
  return gulp.src(js_src)
  	.pipe(sourcemaps.init())
      .pipe(striplog())
      .pipe(concat('training.min.js')) // concat all files in the src
	.pipe(sourcemaps.write())      
    .pipe(uglify())	// uglify them all
    .pipe(gulp.dest(js_dest)) // save the file
    .on('error', gutil.log); 
});

// My custom JS
gulp.task('scripts-libs', function() {
  var js_src = [
  	'dist/libs/jquery.js',
  	'dist/libs/underscore.js',
  	'dist/libs/backbone.js',
  	'dist/libs/backbone.marionette.js',
  	'dist/libs/bootstrap.js',
  	'components/form2js/src/*.js',
  	'dist/libs/velocity.js'
  ]; 
  var js_dest = 'dist/js';

  // Add the newer pipe to pass through newer images only
  return gulp.src(js_src)
  	  .pipe(sourcemaps.init())
      	.pipe(striplog())
      	.pipe(concat('libs.min.js')) // concat all files in the src
      .pipe(sourcemaps.write())
      .pipe(uglify())	// uglify them all
      .pipe(gulp.dest(js_dest)) // save the file
      .on('error', gutil.log); 
});


// compile the bower files into a libs folder
gulp.task('bower-compile', function(){
	return gulp.src(bowerFiles())
	  .pipe(gulp.dest('dist/libs')) // save the file
	  .on('error', gutil.log); 
});

// CSS Libs
gulp.task('styles', function() {
  var css_libs_src = [
    'css/*.css'
  ];
  var css_dest = 'dist/css';

  // Add the newer pipe to pass through newer images only
  return gulp.src(css_libs_src)
  	  .pipe(sourcemaps.init())
      	.pipe(minfycss()) // uglify them all
      .pipe(sourcemaps.write())
      .pipe(concat('training.min.css')) // concat all files in the src
      .pipe(gulp.dest(css_dest)) // save the ile
      .on('error', gutil.log); 
});

gulp.task('sass', function(){
    return gulp.src(config.sassPath + '/app.scss')
        .pipe(sass({
            style: 'uncompressed',
            loadPath: [
                //'./resources/sass',
                //config.bowerDir + '/bootstrap-sass-official/assets/stylesheets',
                config.bowerDir + '/foundation/scss',
                config.bowerDir + '/fontawesome/scss',
                config.bowerDir + '/fontawesome/fonts',
            ]
        })
        .on("error", notify.onError(function (error) {
            return "Error: " + error.message;
        })))
        //.pipe(autoprefix('last 2 version'))
        .pipe(gulp.dest('./css'));
});

gulp.task('sass-dist', function(){
    return gulp.src(config.sassPath + '/app.scss')
        .pipe(sass({
            style: 'compressed',
            loadPath: [
                //'./resources/sass',
                //config.bowerDir + '/bootstrap-sass-official/assets/stylesheets',
                config.bowerDir + '/foundation/scss',
                config.bowerDir + '/fontawesome/scss',
                config.bowerDir + '/fontawesome/fonts',
            ]
        })
        .on("error", notify.onError(function (error) {
            return "Error: " + error.message;
        })))
        //.pipe(autoprefix('last 2 version'))
        .pipe(gulp.dest('./css'));
});


// CSS Libs
gulp.task('styles-libs', function() {
  var css_libs_src = [
    'dist/libs/*.css'
  ];
  var css_dest = 'dist/css';

  // Add the newer pipe to pass through newer images only
  return gulp.src(css_libs_src)
	.pipe(sourcemaps.init())  
      .pipe(minfycss()) // uglify them all
	.pipe(sourcemaps.write())    
    .pipe(concat('libs.min.css')) // concat all files in the src
    .pipe(gulp.dest(css_dest)) // save the ile
    .on('error', gutil.log); 
});

// precompile the templates
gulp.task('tmpl', function(){
  return gulp.src('js/templates/**/*.html')
    .pipe(template({namespace: 'feedback_templates'}))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('js/templates'));
});


// Clean the templates
gulp.task('clean-templates', function() {
  return gulp.src(['js/templates/**/*.js'], {read: false})
    .pipe(clean());
});


// Clean the templates
gulp.task('clean-build', function() {
  return gulp.src(['dist'], {read: false})
    .pipe(clean());
});

gulp.task('clean-libs', function() {
  return gulp.src(['dist/libs'], {read: false})
    .pipe(clean());
});

gulp.task('templates', ['clean-templates'], function(){
   gulp.start('tmpl');
});

gulp.task('bower', ['clean-build'], function(){
	gulp.start('bower-compile');
});

gulp.task('clean-css', [], function(){
  return gulp.src(['dist/css'], {read: false})
    .pipe(clean());	
});

gulp.task('clean-js', [], function(){
  return gulp.src(['dist/js'], {read: false})
    .pipe(clean());		
});

gulp.task('libs', ['clean-libs','bower-compile'], function(){
	gulp.start('styles-libs');
	gulp.start('scripts-libs');	
});

gulp.task('build', ['clean-build'], function(){
	sequence(
		'libs',
		'tmpl',
		'styles',
		'scripts'
	);
});


gulp.task('watch', function () {
   gulp.watch('./sass/**/*.scss', ['sass']);
   gulp.watch('./js/templates/**/*.html', ['tmpl']);
});