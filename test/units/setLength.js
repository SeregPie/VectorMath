let {assert} = require('chai');

let VectorMath = require('../../');

module.exports = function() {
	assert.deepAlmostEqual(VectorMath.setLength([], 95), []);
	assert.deepAlmostEqual(VectorMath.setLength([79, 51, -7, 61], 0), [0, 0, -0, 0]);
	assert.deepAlmostEqual(VectorMath.setLength([58, -57, -1, 27], 36), [24.366532460, -23.946419831, -0.420112629, 11.343040973]);
};
