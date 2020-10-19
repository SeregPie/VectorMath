let {assert} = require('chai');

let VectorMath = require('../../');

module.exports = function() {
	assert.deepAlmostEqual(VectorMath.mulScalar([], -61), []);
	assert.deepAlmostEqual(VectorMath.mulScalar([74, -67, -8, -63], -61), [-4514, 4087, 488, 3843]);
};
