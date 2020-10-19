let {assert} = require('chai');

let VectorMath = require('../../');

module.exports = function() {
	assert.deepAlmostEqual(VectorMath.abs([]), []);
	assert.deepAlmostEqual(VectorMath.abs([-7, 95, 15, -37]), [7, 95, 15, 37]);
};
