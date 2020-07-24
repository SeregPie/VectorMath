let {assert} = require('chai');

let VectorMath = require('../../index');

module.exports = function() {
	assert.deepEqual(VectorMath.normalize([]), []);
	assert.deepAlmostEqual(VectorMath.normalize([93, -69, -45, 86]), [0.615489263, -0.456653324, -0.297817386, 0.569162115]);
};
