let {assert} = require('chai');

let VectorMath = require('../../');

module.exports = function() {
	assert.almostEqual(VectorMath.CosineSimilarity([], []), 0);
	assert.almostEqual(VectorMath.CosineSimilarity([22, 24, 63, -9], [22, 24, 63, -9]), 1);
	assert.almostEqual(VectorMath.CosineSimilarity([90, -25, -90, -52], [80, 34, 40, 74]), -0.06495469);
};
