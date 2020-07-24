let {assert} = require('chai');

let VectorMath = require('../../index');

module.exports = function() {
	assert.deepEqual(VectorMath.add([], []), []);
	assert.deepAlmostEqual(VectorMath.add([-25, -53, -81, 71], [-67, -68, -23, -42]), [-92, -121, -104, 29]);
};