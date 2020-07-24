let {assert} = require('chai');

let VectorMath = require('../../index');

module.exports = function() {
	assert.deepEqual(VectorMath.divScalar([], -11), []);
	assert.deepAlmostEqual(VectorMath.divScalar([-7, 95, 15, -37], -11), [0.636363636, -8.636363636, -1.363636364, 3.363636364]);
};
