let assert = require('assert').strict;

let VectorMath = require('../../index');

module.exports = function() {
	let x = 1 + Math.random();
	let y = 1 + Math.random();
	assert.equal(
		VectorMath.length([x, y]),
		Math.hypot(x, y),
	);
};
