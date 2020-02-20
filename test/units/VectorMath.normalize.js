let assert = require('assert').strict;

let VectorMath = require('../../index');

module.exports = function() {
	{
		let x = 1 + Math.random();
		let y = 1 + Math.random();
		assert.deepEqual(
			VectorMath.normalize([x, y]),
			[x / Math.hypot(x, y), y / Math.hypot(x, y)],
		);
	}
	assert.deepEqual(VectorMath.normalize([0, 0, 0]), [0, 0, 0]);
};
