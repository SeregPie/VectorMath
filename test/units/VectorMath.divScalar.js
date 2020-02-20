let assert = require('assert').strict;

let VectorMath = require('../../index');

module.exports = function() {
	let x = 1 + Math.random();
	let y = 1 + Math.random();
	let s = 1 + Math.random();
	assert.deepEqual(
		VectorMath.divScalar([x, y], s),
		[x / s, y / s],
	);
};
