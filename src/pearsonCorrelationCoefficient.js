import Math_standardDeviation from './core/Math/standardDeviation';

import covariance from './covariance';

export default function(vector, otherVector) {
	return covariance(vector, otherVector) / (Math_standardDeviation(...vector) * Math_standardDeviation(...otherVector));
}
