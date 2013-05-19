/*
* grunt-tfs-unlock
* https://github.com/danactive/grunt-tfs-unlock
*
* Copyright (c) 2013 Dan BROOKS
* Licensed under the MIT license.
*/

'use strict';

module.exports = function(grunt) {
	var tfs = require('./../tfs-unlock.js');

	// Please see the Grunt documentation for more information regarding task
	// creation: http://gruntjs.com/creating-tasks

	grunt.registerMultiTask('tfs_unlock', 'Your task description goes here.', function() {
		var done = grunt.task.current.async();

		// Iterate over all specified file groups.
		this.files.forEach(function(file) {
			file.src.filter(function(filepath) {
				// Warn on and remove invalid source files (if nonull was set).
				if (!grunt.file.exists(filepath)) {
					grunt.log.warn('Source file "' + filepath + '" not found.');
					return false;
				}

				//console.log(tfs.checkout([filepath], done));
				console.log(tfs.undo([filepath], done));
				return true;
			});
		});
	});
};
