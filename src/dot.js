export default function(vector, otherVector) {
	return vector.reduce((r, n, i) => r + n * otherVector[i], 0);
}
