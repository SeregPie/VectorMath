let {assert} = require('chai');

let VectorMath = require('../../index');

module.exports = function() {
	assert.deepEqual(VectorMath.clone([14, -28, -65, 57]), [14, -28, -65, 57]);
};
