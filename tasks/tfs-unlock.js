/*
* grunt-tfs-unlock
* https://github.com/danactive/grunt-tfs-unlock
*
* Copyright (c) 2013 Dan BROOKS
* Licensed under the MIT license.
*/

'use strict';

module.exports = function(grunt) {
	grunt.registerMultiTask('tfs-unlock', 'Checkout TFS files', function () {
		var tfs = require('tfs-unlock'),
			options = this.options(),
			done = this.async();

		if (options.tfsPath && options.tfsPath.length >= 2) {
			tfs.init({
				"callback": done,
				"visualStudioPath": tfs[options.tfsPath[0]][options.tfsPath[1]]
			});
		} else if (options.customTfsPath && options.customTfsPath.length >= 2) {
			tfs.init({
				"callback": done,
				"visualStudioPath": options.customTfsPath
			});
		} else {
			tfs.init({
				"callback": done
			});
		}

		// Iterate over all specified file groups.
		var files = this.filesSrc.filter(function(file) {
			if (!grunt.file.exists(file)) {
				grunt.log.warn('Source file "' + file + '" not found.');
				return false;
			}
			return true;
		});

		tfs[options.action](files).catch(function(e) {
			grunt.log.error(e.message);
			done(false);
		});
	});
};
