let assert = require('assert').strict;

let VectorMath = require('../../index');

module.exports = function() {
	let vector = [1, 2, 3];
	let otherVector = VectorMath.clone(vector);
	assert.notEqual(otherVector, vector);
	assert.deepEqual(otherVector, vector);
};
