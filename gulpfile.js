const gulp = require( ' gulp ' );
 const browserSync = require( ' browser-sync ' ).create();
 const reload = browserSync.reload;

gulp.task( ' servir ' , function () {
  browserSync.init({
    servidor : {
       baseDir : " ./ "
    }
  });

  gulp.watch( " *.html " ).on( " cambiar " , reload);
});