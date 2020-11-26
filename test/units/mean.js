let {assert} = require('chai');

let VectorMath = require('../../');

module.exports = function() {
	assert.throws(() => {
		VectorMath.mean();
	});
	assert.deepAlmostEqual(VectorMath.mean([]), []);
	assert.deepAlmostEqual(VectorMath.mean([-4, 46, 95, 75]), [-4, 46, 95, 75]);
	assert.deepAlmostEqual(VectorMath.mean([58, 31, -39, -7], [82, 72, -20, 19], [-38, 77, -33, 57]), [34, 60, -30.66666667, 23]);
};
