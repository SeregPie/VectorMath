let {assert} = require('chai');

let VectorMath = require('../../index');

module.exports = function() {
	assert.deepEqual(VectorMath.sub([], []), []);
	assert.deepAlmostEqual(VectorMath.sub([-34, -46, -85, 93], [1, -61, -83, -40]), [-35, 15, -2, 133]);
};