let {assert} = require('chai');

let VectorMath = require('../../');

module.exports = function() {
	assert.almostEqual(VectorMath.distance([], []), 0);
	assert.almostEqual(VectorMath.distance([-47, -19, -79, -41], [-47, -19, -79, -41]), 0);
	assert.almostEqual(VectorMath.distance([51, -3, 62, -55], [-84, -24, -13, 86]), 210.171358658);
};
