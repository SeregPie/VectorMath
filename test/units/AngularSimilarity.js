let {assert} = require('chai');

let VectorMath = require('../../');

module.exports = function() {
	assert.almostEqual(VectorMath.AngularSimilarity([], []), 1/2);
	assert.almostEqual(VectorMath.AngularSimilarity([2, 30, -7, 19], [2, 30, -7, 19]), 1);
	assert.almostEqual(VectorMath.AngularSimilarity([-14, -37, -14, -29], [-36, 78, -18, 44]), 0.26195014);
};
