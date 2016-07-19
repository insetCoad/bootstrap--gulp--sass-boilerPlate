var gulp = require("gulp"),
        connect = require("gulp-connect"),
        preFixCss = require("gulp-autoprefixer"),
        sass = require("gulp-sass"),
//debug and production tools
    plumber = require("gulp-plumber"),
    reName = require("gulp-rename"),
    concat = require("gulp-concat"),
    uglify = require("gulp-uglify"),
    sourcemaps = require('gulp-sourcemaps');
/////////
var dir = {
    "bin":{
        "scss":"./bin/scss/**/*.scss",
        "ts":"./bin/ts/**/*.ts",
        "js":"./bin/ts/**/*.js"
    },
    "pub":{
        "css":"./pub/css",
        "js":"./pub/js",
        "jsLib":"./pub/js/lib"
    },
    "root":"./pub/"};
////////
gulp.task('default', function() {
    console.log("im in");
});

/*| makeing dist ... for js |*/
gulp.task('pack', function() {
    gulp.src([
       'bower_components/jquery/dist/jquery.js',
        'bower_components/bootstrap-sass/assets/javascripts/bootstrap.js'
    ])
    .pipe(sourcemaps.init())
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest(dir.pub.jsLib))
    .pipe(reName('bundle.min.js'))
    .pipe(uglify('same.min.js'))
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest(dir.pub.jsLib))
});

/*| compile scss | */
gulp.task('compileSass', function() {
   return gulp.src(dir.bin.scss)
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest(dir.pub.css))
});