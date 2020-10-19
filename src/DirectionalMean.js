import Math_mean from './@core/Math/mean';

import length from './length';
import mean from './mean';
import normalize from './normalize';
import setLength from './setLength';

export default function(...vectors) {
	return setLength(
		mean(...vectors.map(vector => normalize(vector))),
		Math_mean(...vectors.map(vector => length(vector))),
	);
}
