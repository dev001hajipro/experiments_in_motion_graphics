var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('init', function() {
    browserSync.init({
        server: {
            baseDir: 'src',
            index: 'index.html'
        }
    });
});

gulp.task('reload', function() {
    browserSync.reload();
});

gulp.task('default', ['init'], function() {
    gulp.watch('src/*.css', ['reload']);
    gulp.watch('src/*.js', ['reload']);
    gulp.watch('src/*.html', ['reload']);
});