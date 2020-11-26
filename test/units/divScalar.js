let {assert} = require('chai');

let VectorMath = require('../../');

module.exports = function() {
	assert.deepAlmostEqual(VectorMath.divScalar([], -11), []);
	assert.deepAlmostEqual(VectorMath.divScalar([-7, 95, 15, -37], -11), [0.63636364, -8.63636364, -1.36363636, 3.36363636]);
};
