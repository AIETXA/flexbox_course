const gulp = require( ' gulp ' );
 const browserSync = require( ' browser-sync ' ).create();
 const reload = browserSync.reload;

gulp.task( ' servir ' , función () {
  browserSync.init({
    servidor : {
       baseDir : " ./ "
    }
  });

  gulp.watch( " *.html " ).on( " cambiar " , recargar);
});