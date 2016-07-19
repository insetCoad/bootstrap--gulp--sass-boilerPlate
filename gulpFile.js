var gulp = require("gulp"),
        connect = require("gulp-connect"),
        plumber = require("gulp-plumber"),
        preFixCss = require("gulp-autoprefixer"),
        bundle = require("gulp-bundle-assets"),
        sass = require("gulp-sass");
/////////
var dir = {
    "bin":{
        "scss":"./bin/sass/**/*.sass",
        "ts":"./bin/ts/**/*.ts",
        "js":"./bin/ts/**/*.js"
    },
    "pub":{
        "css":"./pub/lib/css",
        "js":"./pub/lib/js"
    },
    "root":"./pub/"};
////////
gulp.task('default', function() {
    console.log("im in");
});
