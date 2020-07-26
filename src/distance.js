import length from './length';
import sub from './sub';

export default function(vector, otherVector) {
	return length(sub(vector, otherVector));
}
