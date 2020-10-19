let {assert} = require('chai');

let VectorMath = require('../../');

module.exports = function() {
	assert.throws(() => {
		VectorMath.max();
	});
	assert.deepAlmostEqual(VectorMath.max([]), []);
	assert.deepAlmostEqual(VectorMath.max([79, -39, -56, -6]), [79, -39, -56, -6]);
	assert.deepAlmostEqual(VectorMath.max([-26, 5, 3, 66], [41, -59, -96, -56], [22, 92, 63, 61]), [41, 92, 63, 66]);
};
