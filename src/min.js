export default function(...vectors) {
	return vectors[0].map((n, i) => Math.min(...vectors.map(vector => vector[i])));
}
