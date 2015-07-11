"use strict";

var gg = require("gore-gulp"),
    gulp = require("gulp");

gg(__dirname).setup(gulp);

gulp.task("build", ["webpack.development"]);
