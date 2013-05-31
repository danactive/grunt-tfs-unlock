/*
* grunt-tfs-unlock
* https://github.com/danactive/grunt-tfs-unlock
*
* Copyright (c) 2013 Dan BROOKS
* Licensed under the MIT license.
*/

'use strict';

module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		jshint: {
			all: [
				'Gruntfile.js',
				'tasks/*.js',
				'<%= nodeunit.tests %>'
			],
			options: {
				jshintrc: '.jshintrc'
			}
		},

		// Configuration to be run (and then tested).
		"tfs-unlock": {
			checkout: {
				options: {
					// TFS path
					action: 'checkout'
				},
				files: {
					src: []
				}
			},
			undo: {
				options: {
					// TFS path
					action: 'undo'
				},
				files: {
					src: []
				}
			}
		},

		// Unit tests.
		nodeunit: {
			tests: ['test/*-test.js']
		}

	});

	// Actually load this plugin's task(s).
	grunt.loadTasks('tasks');

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-nodeunit');

	grunt.registerTask('test', ['jshint', 'nodeunit']);

	grunt.registerTask('default', ['jshint', 'tfs-unlock:checkout']);

	grunt.registerTask('undo', ['jshint', 'tfs-unlock:undo']);

};
