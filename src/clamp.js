import Math_clamp from './@core/Math/clamp';

export default function(vector, minVector, maxVector) {
	return vector.map((n, i) => Math_clamp(n, minVector[i], maxVector[i]));
}
