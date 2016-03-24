var gulp = require('gulp');
var react = require('gulp-react');
 
gulp.task('default', function () {
	return gulp.src('js/components/*.jsx')//src('js/**/*.jsx')
		.pipe(react())
		.pipe(gulp.dest('js/components/js'));
});