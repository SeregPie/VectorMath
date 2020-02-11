export default function(vectors) {
	if (!Array.isArray(vectors)) {
		vectors = Array.from(vectors);
	}
	let ii = vectors.length;
	return vectors[0].map((n, i) => vectors.reduce((r, vector) => r + vector[i], 0) / ii);
}
