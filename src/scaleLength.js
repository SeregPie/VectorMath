import Math_scale from './core/Math/scale';

import length from './length';
import setLength from './setLength';

export default function(vector, oldMinLength, oldMaxLength, newMinLength, newMaxLength) {
	return setLength(vector, Math_scale(length(vector), oldMinLength, oldMaxLength, newMinLength, newMaxLength));
}
