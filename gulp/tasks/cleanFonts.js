module.exports = function () {
    $.gulp.task('cleanFonts', () => {
        return $.del(
            [
                $.paths.fonts.dist
            ],
            {
                force: true, //удаление файлов за пределами каталога
            },
        )
            .then(path => {
                console.log('Deleted directories:\n',path.join('\n '))
            })
            
    })
}