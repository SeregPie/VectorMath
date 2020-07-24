let {assert} = require('chai');

let VectorMath = require('../../index');

module.exports = function() {
	assert.deepEqual(VectorMath.mul([], []), []);
	assert.deepAlmostEqual(VectorMath.mul([0, -14, 47, -65], [-85, 28, -55, -17]), [-0, -392, -2585, 1105]);
};