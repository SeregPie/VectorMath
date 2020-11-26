let {assert} = require('chai');

let VectorMath = require('../../');

module.exports = function() {
	assert.deepEqual(VectorMath.sub([], []), []);
	assert.deepEqual(VectorMath.sub([-34, -46, -85, 93], [1, -61, -83, -40]), [-35, 15, -2, 133]);
};
