import Math_mean from './core/Math/mean';

import mul from './mul';

export default function(vector, otherVector) {
	return Math_mean(...mul(vector, otherVector)) - Math_mean(...vector) * Math_mean(...otherVector);
}
