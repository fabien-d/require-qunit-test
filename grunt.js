module.exports = function (grunt) {
	"use strict";

	// Project configuration.
	grunt.initConfig({
		qunit : {
			files : ["test/index.html"]
		}
	});

	// Default task.
	grunt.registerTask("default", "qunit");
};