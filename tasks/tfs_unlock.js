/*
* grunt-tfs-unlock
* https://github.com/danactive/grunt-tfs-unlock
*
* Copyright (c) 2013 Dan BROOKS
* Licensed under the MIT license.
*/

'use strict';

module.exports = function(grunt) {

	// Please see the Grunt documentation for more information regarding task
	// creation: http://gruntjs.com/creating-tasks

	grunt.registerMultiTask('tfs_unlock', 'Checkout TFS files', function() {
		var tfs = require('./../tfs-unlock.js'),
			options = this.options();

		tfs.init({
			"callback": grunt.task.current.async(),
			"visualStudioPath": tfs.vs2010.bit64
		});

		// Iterate over all specified file groups.
		this.files.forEach(function(file) {
			file.src.filter(function(filepath) {
				// Warn on and remove invalid source files (if nonull was set).
				if (!grunt.file.exists(filepath)) {
					grunt.log.warn('Source file "' + filepath + '" not found.');
					return false;
				}

				tfs[options.action]([filepath]);
				return true;
			});
		});
	});
};
