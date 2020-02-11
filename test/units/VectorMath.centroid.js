let assert = require('assert').strict;

let VectorMath = require('../../index');

module.exports = function() {
	assert.deepEqual(VectorMath.centroid([[5, 3], [6, 1], [7, 8]]), [6, 4]);
	assert.deepEqual(VectorMath.centroid([[1, 2, 3]]), [1, 2, 3]);
};
