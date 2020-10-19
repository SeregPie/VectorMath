import Math_clamp from './@core/Math/clamp';
import Math_standardDeviation from './@core/Math/standardDeviation';

import Covariance from './Covariance';

export default function(vector, otherVector) {
	let denominator = Math_standardDeviation(...vector) * Math_standardDeviation(...otherVector);
	if (denominator) {
		let numerator = Covariance(vector, otherVector);
		return Math_clamp(numerator / denominator, -1, 1);
	}
	return 0;
}
