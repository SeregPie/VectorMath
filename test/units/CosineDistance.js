let {assert} = require('chai');

let VectorMath = require('../../');

module.exports = function() {
	assert.almostEqual(VectorMath.CosineDistance([], []), 1);
	assert.almostEqual(VectorMath.CosineDistance([-86, -53, 60, -41], [-86, -53, 60, -41]), 0);
	assert.almostEqual(VectorMath.CosineDistance([58, -1, -99, -14], [69, 2, -35, 75]), 0.48506629);
};
