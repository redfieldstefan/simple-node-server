module.exports = function(grunt) {
	'use strict';
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.initConfig({
		jshint: {
			files: [
				"q2.js"
			],

			options: {
				jshintrc: true
			}
		},

		watch: {
			files: [
				'q2.js'
			],

			tasks: [
				'jshint'
			]
		} 

	});

	grunt.registerTask('default', [
		'jshint',
		'watch'
	]);

};

