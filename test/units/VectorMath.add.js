let assert = require('assert').strict;

let VectorMath = require('../../index');

module.exports = function() {
	let x0 = 1 + Math.random();
	let y0 = 1 + Math.random();
	let x1 = 1 + Math.random();
	let y1 = 1 + Math.random();
	assert.deepEqual(
		VectorMath.add([x0, y0], [x1, y1]),
		[x0 + x1, y0 + y1],
	);
};
