let assert = require('assert').strict;

let VectorMath = require('../../index');

module.exports = function() {
	{
		let x0 = 1 + Math.random();
		let y0 = 1 + Math.random();
		let x1 = 1 + Math.random();
		let y1 = 1 + Math.random();
		assert.equal(
			VectorMath.angle([x0, y0], [x1, y1]),
			Math.acos((x0 * x1 + y0 * y1) / (Math.hypot(x0, y0) * Math.hypot(x1, y1))),
		);
	}
	assert.equal(VectorMath.angle([1, 2, 3], [1, 2, 3]), 0);
	assert.equal(VectorMath.angle([1, 2, 3], [0, 0, 0]), Math.PI / 2);
};
