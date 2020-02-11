let assert = require('assert').strict;

let VectorMath = require('../../index');

module.exports = function() {
	assert.equal(VectorMath.dot([1, 3, -5], [4, -2, -1]), 3);
	assert.equal(VectorMath.dot([1, 2, 3], [0, 0, 0]), 0);
};
