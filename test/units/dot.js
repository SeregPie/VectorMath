let {assert} = require('chai');

let VectorMath = require('../../');

module.exports = function() {
	assert.almostEqual(VectorMath.dot([], []), 0);
	assert.almostEqual(VectorMath.dot([60, -99, -36, 13], [55, 83, -57, 16]), -2657);
};
