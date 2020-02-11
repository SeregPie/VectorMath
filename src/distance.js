import length from './length';

export default function(vector, otherVector) {
	return length(vector.map((n, i) => n - otherVector[i]));
}
