let {assert} = require('chai');

let VectorMath = require('../../');

module.exports = function() {
	assert.throws(() => {
		VectorMath.DirectionalMean();
	});
	assert.deepEqual(VectorMath.DirectionalMean([]), []);
	assert.deepAlmostEqual(VectorMath.DirectionalMean([39, 4, 78, -92]), [39, 4, 78, -92]);
	assert.deepAlmostEqual(VectorMath.DirectionalMean([23, -5, -63, -88], [88, -79, -94, 97], [-57, -45, -30, 80]), [14.97442365174127, -70.04472816009196, -107.45391480959377, 36.283253286063335]);
};
