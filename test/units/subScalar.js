let {assert} = require('chai');

let VectorMath = require('../../');

module.exports = function() {
	assert.deepAlmostEqual(VectorMath.subScalar([], -70), []);
	assert.deepAlmostEqual(VectorMath.subScalar([68, 68, -88, 48], -70), [138, 138, -18, 118]);
};
