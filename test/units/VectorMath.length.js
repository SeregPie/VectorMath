let assert = require('assert').strict;

let VectorMath = require('../../index');

module.exports = function() {
	assert.equal(VectorMath.length([12, 3, 4]), 13);
};
