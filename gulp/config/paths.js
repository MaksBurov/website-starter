module.exports = {
    views: {
        src: "./src/views/pages/**/*.pug",
        dist: "./dist",
        watch: "./src/views/**/*.pug"
    },
    styles: {
        src: "./src/styles/pages/*.{scss,sass}",
        dist: "./dist/public/styles/",
        watch: "./src/styles/**/*.{scss,sass}"
    },
    scripts: {
        src: './src/scripts/*.js',
        dist: './dist/public/scripts/',
        watch: './src/scripts/**/*.js'
    },
    fonts: {
        src: './src/assets/fonts/',
        dist: './dist/public/assets/fonts/',
        watch: './src/assets/fonts/*.{ttf,woff,woff2}'
    }
}

