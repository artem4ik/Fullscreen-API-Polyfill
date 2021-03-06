/*global module:false*/
module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		lint: {
			files: ["*.js"]
		},
		jshint: {
			options: {
				curly: true,
				eqeqeq: true,
				immed: true,
				latedef: true,
				newcap: true,
				noarg: true,
				sub: true,
				undef: true,
				boss: true,
				eqnull: true,
				browser: true
			}
		}
	});

	// Default task.
	grunt.registerTask( "default", "lint" );

};