let {assert} = require('chai');

let VectorMath = require('../../index');

module.exports = function() {
	assert.equal(VectorMath.PearsonCorrelationCoefficient([], []), 0);
	assert.equal(VectorMath.PearsonCorrelationCoefficient([-33, -23, 91, 71], [-33, -23, 91, 71]), 1);
	assert.almostEqual(VectorMath.PearsonCorrelationCoefficient([90, 21, -63, -99], [94, 36, -100, 40]), 0.590648646);
};
