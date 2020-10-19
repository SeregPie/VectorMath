let {assert} = require('chai');

let VectorMath = require('../../');

module.exports = function() {
	assert.deepAlmostEqual(VectorMath.clampLength([], -95, -49), []);
	assert.deepAlmostEqual(VectorMath.clampLength([79, -89, -29, 99], -95, -49), [-24.578892492, 27.690144706, 9.022631421, -30.801396920]);
};
