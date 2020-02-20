let assert = require('assert').strict;

let VectorMath = require('../../index');

module.exports = function() {
	assert.deepEqual(VectorMath.divScalar([2, -4, 6, -8], 2), [1, -2, 3, -4]);
};
