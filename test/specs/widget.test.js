define(["widget"], function (widget) {
	module("widget");

	test("widget object API", function () {
		expect(1);
		deepEqual(typeof widget.test, "string", "widget.test should be a string");
	});
});
