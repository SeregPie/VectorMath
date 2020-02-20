let assert = require('assert').strict;

let VectorMath = require('../../index');

module.exports = function() {
	assert.deepEqual(VectorMath.add([1, 3, -1], [-2, 1, 6]), [-1, 4, 5]);
};
