let {assert} = require('chai');

let VectorMath = require('../../');

module.exports = function() {
	assert.deepEqual(VectorMath.mul([], []), []);
	assert.deepEqual(VectorMath.mul([0, -14, 47, -65], [-85, 28, -55, -17]), [-0, -392, -2585, 1105]);
};
