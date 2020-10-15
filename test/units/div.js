let {assert} = require('chai');

let VectorMath = require('../../');

module.exports = function() {
	assert.deepEqual(VectorMath.div([], []), []);
	assert.deepAlmostEqual(VectorMath.div([-52, 44, -69, -88], [-18, 69, 31, -75]), [2.888888889, 0.637681159, -2.225806452,  1.173333333]);
};
