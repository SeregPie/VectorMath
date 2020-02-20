let assert = require('assert').strict;

let VectorMath = require('../../index');

module.exports = function() {
	let x = Math.random() * 2 - 1;
	let y = Math.random() * 2 - 1;
	assert.deepEqual(
		VectorMath.abs([x, y]),
		[Math.abs(x), Math.abs(y)],
	);
};
