let assert = require('assert').strict;

let VectorMath = require('../../index');

module.exports = function() {
	assert.deepEqual(VectorMath.mulScalar([1, -2, 3, -4], 2), [2, -4, 6, -8]);
};
