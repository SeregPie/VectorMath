let {assert} = require('chai');

let VectorMath = require('../../');

module.exports = function() {
	assert.deepEqual(VectorMath.addScalar([], -45), []);
	assert.deepEqual(VectorMath.addScalar([97, 93, -58, 10], -45), [52, 48, -103, -35]);
};
