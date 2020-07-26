import Math_mean from './core/Math/mean';

import length from './length';
import mean from './mean';
import setLength from './setLength';

export default function(...vectors) {
	return setLength(mean(...vectors), Math_mean(...vectors.map(vector => length(vector))));
}
