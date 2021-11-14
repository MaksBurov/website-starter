module.exports = function () {
    $.gulp.task('fonts', () => {
        return $.gulp.src($.paths.fonts.src + '*.ttf')
            .pipe($.gulp.dest($.paths.fonts.dist))

            .pipe($.glp.ttf2woff())
            .pipe($.gulp.dest($.paths.fonts.dist))

            .pipe($.gulp.src($.paths.fonts.src + '*.ttf'))
            .pipe($.glp.ttf2woff2())
            .pipe($.gulp.dest($.paths.fonts.dist))

            .pipe($.gulp.src($.paths.fonts.src + '*.woff'))
            .pipe($.gulp.dest($.paths.fonts.dist))
            .pipe($.gulp.src($.paths.fonts.src + '*.woff2'))
            .pipe($.gulp.dest($.paths.fonts.dist))
    })
}