(function () {
	QUnit.config.autostart = false;

	require.config({
		baseUrl: "../src",
	});

	var testModules = [
		"specs/widget.test.js"
	];

	require(testModules, QUnit.start);
}());