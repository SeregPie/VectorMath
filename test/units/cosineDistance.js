let {assert} = require('chai');

let VectorMath = require('../../index');

module.exports = function() {
	assert.equal(VectorMath.CosineDistance([], []), 1);
	assert.equal(VectorMath.CosineDistance([85, 37, -73, 81], [85, 37, -73, 81]), 0);
	assert.almostEqual(VectorMath.CosineDistance([58, -1, -99, -14], [69, 2, -35, 75]), 0.485066295);
};
