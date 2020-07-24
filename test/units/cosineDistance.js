let {assert} = require('chai');

let VectorMath = require('../../index');

module.exports = function() {
	assert.equal(VectorMath.cosineDistance([], []), 1);
	assert.equal(VectorMath.cosineDistance([85, 37, -73, 81], [85, 37, -73, 81]), 0);
	assert.almostEqual(VectorMath.cosineDistance([58, -1, -99, -14], [69, 2, -35, 75]), 0.485066295);
};
