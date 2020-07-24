let {assert} = require('chai');

let VectorMath = require('../../index');

module.exports = function() {
	assert.equal(VectorMath.cosineSimilarity([], []), 0);
	//assert.equal(VectorMath.cosineSimilarity([-97, -33, 35, 36], [-97, -33, 35, 36]), 1);
	//assert.almostEqual(VectorMath.cosineSimilarity([90, -25, -90, -52], [80, 34, 40, 74]), -0.064954687);
};
