let assert = require('assert').strict;

let VectorMath = require('../../index');

module.exports = function() {
	assert.deepEqual(VectorMath.sub([-1, 3, 2], [2, 4, -5]), [-3, -1, 7]);
};
