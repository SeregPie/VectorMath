import Math_sum from './core/Math/sum';

import abs from './abs';
import sub from './sub';

export default function(vector, otherVector) {
	return Math_sum(...abs(sub(vector, otherVector)));
}
