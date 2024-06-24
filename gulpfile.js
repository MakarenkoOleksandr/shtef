const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssbeautify = require("gulp-cssbeautify");
const ftp = require("vinyl-ftp"); // Изменил импорт

gulp.task("sass", function () {
  return gulp
    .src("src/style/scss/**/*.scss") //Scss file directory
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(cssbeautify())
    .pipe(gulp.dest("src/style")); //Css file directory
});

// Отправка CSS файлов на сервер по FTP
// gulp.task("deploy", function () {
//   const conn = ftp.create({
//     host: "",
//     user: "",
//     password: "",
//     parallel: 10,
//     log: console.log,
//   });

//   const globs = ["/**/*.css"];

//   return gulp
//     .src(globs, { base: ".", buffer: false })
//     .pipe(conn.newer(""))
//     .pipe(conn.dest(""));
// });

gulp.task("watch", function () {
  gulp.watch("src/style/scss/**/*.scss", gulp.series("sass")); //UPDATE DIR
});

gulp.task("default", gulp.series("sass", "watch"));
