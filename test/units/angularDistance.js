let {assert} = require('chai');

let VectorMath = require('../../index');

module.exports = function() {
	assert.equal(VectorMath.angularDistance([], []), 1/2);
	assert.equal(VectorMath.angularDistance([85, -3, 11, -34], [85, -3, 11, -34]), 0);
	assert.almostEqual(VectorMath.angularDistance([-53, -52, 39, 65], [-69, 72, -46, -63]), 0.646735849);
};
