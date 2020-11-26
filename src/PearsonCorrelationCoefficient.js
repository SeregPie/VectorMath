import Math_clamp from './@core/Math/clamp';
import Math_standardDeviation from './@core/Math/standardDeviation';
import Number_isAlmostEqual from './@core/Number/isAlmostEqual';

import Covariance from './Covariance';

export default function(vector, otherVector) {
	let denominator = Math_standardDeviation(...vector) * Math_standardDeviation(...otherVector);
	if (denominator) {
		let numerator = Covariance(vector, otherVector);
		let n = Math_clamp(numerator / denominator, -1, 1);
		return Number_isAlmostEqual(1, n) ? 1 : n;
	}
	return 0;
}
