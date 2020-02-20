let assert = require('assert').strict;

let VectorMath = require('../../index');

module.exports = function() {
	{
		let x = 1 + Math.random();
		let y = 1 + Math.random();
		let n = 1 + Math.random();
		assert.deepEqual(
			VectorMath.relength([x, y], n),
			[x * n / Math.hypot(x, y), y * n / Math.hypot(x, y)],
		);
	}
	assert.deepEqual(VectorMath.relength([0, 0, 0], 1), [0, 0, 0]);
	assert.deepEqual(VectorMath.relength([1, 2, 3], 0), [0, 0, 0]);
};
