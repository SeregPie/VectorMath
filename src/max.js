export default function(...vectors) {
	return vectors[0].map((n, i) => Math.max(...vectors.map(vector => vector[i])));
}
