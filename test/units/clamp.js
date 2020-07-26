let {assert} = require('chai');

let VectorMath = require('../../index');

module.exports = function() {
	assert.deepEqual(VectorMath.clamp([], [], []), []);
	assert.deepAlmostEqual(VectorMath.clamp([46, -12, 35], [-98, -46, -65], [2, -8, 33]), [2, -12, 33]);
};
