let {assert} = require('chai');

let VectorMath = require('../../index');

module.exports = function() {
	assert.deepEqual(VectorMath.clampScalar([], -75, 8), []);
	assert.deepAlmostEqual(VectorMath.clampScalar([-31, -58, 31, 95], -75, 8), [-31, -58, 8, 8]);
};
