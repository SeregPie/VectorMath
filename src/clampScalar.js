import Math_clamp from './@core/Math/clamp';

export default function(vector, minVector, maxVector) {
	return vector.map(n => Math_clamp(n, minVector, maxVector));
}
