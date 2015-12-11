/*
 * grunt-angular-jsx
 * https://github.com/albertboada/grunt-angular-jsx
 *
 * Copyright (c) 2015 Albert Boada
 * Licensed under the MIT license.
 */

'use strict';

var angularjsx = require("angular-jsx");

module.exports = function(grunt) {

  grunt.registerMultiTask('angular_jsx', 'Grunt plugin for angular-jsx.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({});

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      });

      var file_contents = grunt.file.read(f.src);
      var result = angularjsx.convert(file_contents);

      // Write the destination file.
      grunt.file.write(f.dest, result);

      // Print a success message.
      grunt.log.writeln('File "' + f.dest + '" created.');
    });
  });

};
