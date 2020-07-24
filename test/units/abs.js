let {assert} = require('chai');

let VectorMath = require('../../index');

module.exports = function() {
	assert.deepEqual(VectorMath.abs([]), []);
	assert.deepAlmostEqual(VectorMath.abs([-7, 95, 15, -37]), [7, 95, 15, 37]);
};
