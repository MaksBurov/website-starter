global.$ = {
    gulp: require('gulp'),
    glp: require('gulp-load-plugins')(), //Загружает подключаемые модули gulp из зависимостей пакетов и прикрепляет их к выбранному вами объекту.
    argv: require('yargs').argv, //Принимает аргументы при запуске
    browserSync: require('browser-sync').create('My server'),
    del: require('del'),

    paths: require('./gulp/config/paths'),
    tasks: require('./gulp/config/tasks.js'),
};

// Проходимся по массиву для вызова каждой функции
$.tasks.forEach( tasksPath => {
    require(tasksPath)()
})


exports.fonts = $.gulp.series('fonts', 'cleanFonts')

exports.build = $.gulp.series(
    $.gulp.parallel('clean'),
    $.gulp.parallel('views', 'styles', 'scripts')
)

exports.default = $.gulp.series(
    'clean',
    $.gulp.parallel('views', 'styles', 'scripts'),
    $.gulp.parallel('watch', 'serve')
)
