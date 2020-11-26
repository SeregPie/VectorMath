let {assert} = require('chai');

let VectorMath = require('../../');

module.exports = function() {
	assert.deepEqual(VectorMath.abs([]), []);
	assert.deepEqual(VectorMath.abs([-7, 95, 15, -37]), [7, 95, 15, 37]);
};
