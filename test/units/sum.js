let {assert} = require('chai');

let VectorMath = require('../../');

module.exports = function() {
	assert.throws(() => {
		VectorMath.sum();
	});
	assert.deepAlmostEqual(VectorMath.sum([]), []);
	assert.deepAlmostEqual(VectorMath.sum([60, 67, -24, -51]), [60, 67, -24, -51]);
	assert.deepAlmostEqual(VectorMath.sum([60, 67, -24, -51], [48, -41, 48, -68], [98, 40, -8, 98]), [206, 66, 16, -21]);
};
