export default function(vector, ...otherVectors) {
	return vector.map((n, i) => otherVectors.reduce((n, otherVector) => n + otherVector[i], n));
}
