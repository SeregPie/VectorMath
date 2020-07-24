let {assert} = require('chai');

let VectorMath = require('../../index');

module.exports = function() {
	assert.equal(VectorMath.pearsonCorrelationCoefficient([], []), 0);
	assert.equal(VectorMath.pearsonCorrelationCoefficient([-33, -23, 91, 71], [-33, -23, 91, 71]), 1);
	assert.almostEqual(VectorMath.pearsonCorrelationCoefficient([90, 21, -63, -99], [94, 36, -100, 40]), 0.590648646);
};
