let assert = require('assert').strict;

let VectorMath = require('../../index');

module.exports = function() {
	assert.equal(VectorMath.angle([-1, 2, -3, 4], [1, -2, 3, -4]), Math.PI);
	assert.equal(VectorMath.angle([1, 2, 3], [1, 2, 3]), 0);
	assert.equal(VectorMath.angle([1, 2, 3], [0, 0, 0]), Math.PI / 2);
};
