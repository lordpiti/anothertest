// include plug-ins
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var del = require('del');
var less = require('gulp-less');
var path = require('path');
var minifyCss = require('gulp-minify-css');
var merge = require('merge2');
var rename = require('gulp-rename');
var util = require('gulp-util');
var config = require('config');

var projectFiles=[
  'app/services/**/*.js',
  'app/components/**/*.js',
  'app/app.js',
    ];

var lessFiles =[
        'app/less/styles.less'
    ]

gulp.task('clean', function () {
    //del is an async function and not a gulp plugin (just standard nodejs)
    //It returns a promise, so make sure you return that from this task function
    //  so gulp knows when the delete is complete
    console.log('deleting files in /app/dist output folder');
    return del(['app/dist/*.*']);
});

gulp.task('scriptsProjectPages', [], function () {
    console.log('bundle scripts');
    return gulp.src(projectFiles)
      .pipe(uglify().on('error', function () { util.log; }))
      .pipe(concat('projectScripts.min.js'))
      .pipe(gulp.dest('app/dist/'));
});

gulp.task('minifyProject-less', function () {
    return gulp.src(lessFiles)
        .pipe(less())
        .pipe(minifyCss().on('error', function () { util.log; }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('app/dist'));
});

var htmlreplace = require('gulp-html-replace');
 
gulp.task('replaceBundlesInHTML', function() {
    var deploymentMode = config.get('deploymentMode');
    
    if (deploymentMode=="rel"){
        gulp.src('index.html')
        .pipe(
            htmlreplace({'css': 'styles.min.css',
            'js': 'dist/projectScripts.min.js'})
        )
        .pipe(gulp.dest('app'));
    }
    else
    {
        gulp.src('index.html')
        .pipe(gulp.dest('app'));
    }

});

gulp.task('default', ['clean','scriptsProjectPages','minifyProject-less','replaceBundlesInHTML'], function () { });