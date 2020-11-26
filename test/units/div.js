let {assert} = require('chai');

let VectorMath = require('../../');

module.exports = function() {
	assert.deepAlmostEqual(VectorMath.div([], []), []);
	assert.deepAlmostEqual(VectorMath.div([-52, 44, -69, -88], [-18, 69, 31, -75]), [2.88888889, 0.63768116, -2.22580645,  1.17333333]);
};
