export default function(vector, otherVector) {
	return vector.map((n, i) => n - otherVector[i]);
}
