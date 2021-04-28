const gulp = require('gulp')
const sass = require('gulp-sass')
const concat = require('gulp-concat')
const autoprefixer = require('gulp-autoprefixer')
const uglify = require('gulp-uglify')
const cssmin = require('gulp-cssmin')

const autoprefixerOptions = {
	browsers: ['last 2 versions'],
	cascade: false
}

gulp.task('styles-primary', () => {
	return gulp.src([
		'../node_modules/bootstrap/scss/bootstrap.scss',
		
		'./assets/scss/**/*.scss'
	])
	.pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer(autoprefixerOptions))
	.pipe(cssmin())
	.pipe(concat('app-primary.min.css'))
	.pipe(gulp.dest('./dist/css'))
})


gulp.task('scripts', () => {
	return gulp.src([
		'../node_modules/jquery-mask-plugin/dist/jquery.mask.min.js',		

		'./assets/js/app.js'
	])
	.pipe(concat('app.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('./dist/js'))
})


gulp.task('default', ['styles-primary', 'scripts'], () => {
	gulp.watch('./assets/scss/**/*.scss', ['styles-primary'])
	gulp.watch('./assets/js/**/*.js', ['scripts'])
})
