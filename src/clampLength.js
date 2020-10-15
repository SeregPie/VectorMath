import Math_clamp from './@core/Math/clamp';

import length from './length';
import setLength from './setLength';

export default function(vector, minLength, maxLength) {
	return setLength(vector, Math_clamp(length(vector), minLength, maxLength));
}
