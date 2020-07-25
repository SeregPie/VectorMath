let {assert} = require('chai');

let VectorMath = require('../../index');

module.exports = function() {
	assert.isNaN(VectorMath.Covariance([], []));
	assert.almostEqual(VectorMath.Covariance([17, -27, 11, 95], [-47, 5, 5, -48]), -849.75);
};
