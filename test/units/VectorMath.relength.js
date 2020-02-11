let assert = require('assert').strict;

let VectorMath = require('../../index');

module.exports = function() {
	assert.deepEqual(VectorMath.relength([0, 1, 0], 3), [0, 3, 0]);
	assert.deepEqual(VectorMath.relength([0, 0, 0], 3), [0, 0, 0]);
	assert.deepEqual(VectorMath.relength([1, 2, 3], 0), [0, 0, 0]);
};
