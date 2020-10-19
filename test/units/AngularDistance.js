let {assert} = require('chai');

let VectorMath = require('../../');

module.exports = function() {
	assert.almostEqual(VectorMath.AngularDistance([], []), 1/2);
	assert.almostEqual(VectorMath.AngularDistance([85, -3, 11, -34], [85, -3, 11, -34]), 0);
	assert.almostEqual(VectorMath.AngularDistance([-53, -52, 39, 65], [-69, 72, -46, -63]), 0.646735849);
};
