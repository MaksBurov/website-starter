module.exports = function () {
    $.gulp.task("watch", () => {
        $.gulp.watch($.paths.views.watch, $.gulp.series('views'))
        $.gulp.watch($.paths.styles.watch, $.gulp.series('styles'))
        $.gulp.watch($.paths.scripts.watch, $.gulp.series('scripts'))
    })
}