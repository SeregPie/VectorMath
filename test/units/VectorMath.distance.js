let assert = require('assert').strict;

let VectorMath = require('../../index');

module.exports = function() {
	assert.equal(VectorMath.distance([2, 3, 4, 2], [1, -2, 1, 3]), 6);
	assert.equal(VectorMath.distance([1, 2, 3], [1, 2, 3]), 0);
};
