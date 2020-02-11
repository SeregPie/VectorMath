let assert = require('assert').strict;

let VectorMath = require('../../index');

module.exports = function() {
	let originalVector = [1, 2, 3];
	let vector = VectorMath.clone(originalVector);
	assert.notEqual(vector, originalVector);
	assert.deepEqual(vector, originalVector);
};
