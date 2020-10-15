let {assert} = require('chai');

let VectorMath = require('../../');

module.exports = function() {
	assert.deepEqual(VectorMath.scaleLength([], 15, 45, -26, -20), []);
	assert.deepAlmostEqual(VectorMath.scaleLength([73, -79, -93, -42], 15, 45, -26, -20), [0.321671218, -0.348109949, -0.409800319, -0.185071112]);
};
