import Math_clamp from './@core/Math/clamp';

import dot from './dot';
import length from './length';

export default function(vector, otherVector) {
	let denominator = length(vector) * length(otherVector);
	if (denominator) {
		let numerator = dot(vector, otherVector);
		return Math_clamp(numerator / denominator, -1, 1);
	}
	return 0;
}
