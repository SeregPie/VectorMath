let {assert} = require('chai');

let VectorMath = require('../../index');

module.exports = function() {
	assert.equal(VectorMath.ManhattanDistance([], []), 0);
	assert.equal(VectorMath.ManhattanDistance([88, -62, 47, 54], [88, -62, 47, 54]), 0);
	assert.almostEqual(VectorMath.ManhattanDistance([-64, -45, -37, -36], [80, -10, -38, 9]), 225);
};
