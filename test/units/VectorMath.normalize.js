let assert = require('assert').strict;

let VectorMath = require('../../index');

module.exports = function() {
	assert.deepEqual(VectorMath.normalize([0, 3, 0]), [0, 1, 0]);
	assert.deepEqual(VectorMath.normalize([0, 0, 0]), [0, 0, 0]);
};
