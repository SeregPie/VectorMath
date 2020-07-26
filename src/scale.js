import Math_scale from './core/Math/scale';

export default function(vector, oldMinVector, oldMaxVector, newMinVector, newMaxVector) {
	return vector.map((n, i) => Math_scale(n, oldMinVector[i], oldMaxVector[i], newMinVector[i], newMaxVector[i]));
}
