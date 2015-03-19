module.exports = function(grunt) {
	'use strict';
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-jscs');

	grunt.initConfig({
		jshint: {
			files: [
				"server.js"
			],

			options: {
				jshintrc: true
			}
		},

		watch: {
			files: [
				'server.js'
			],

			tasks: [
				'jshint',
				'jscs'
			]
		},

		jscs: {
			src: ['server.js'],

			options: {
				config: '.jscsrc'
			}
		}

	});

	grunt.registerTask('default', [
		'jshint',
		'jscs',
		'watch'
	]);

};

