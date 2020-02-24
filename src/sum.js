import Math_sum from './core/Math/sum';

export default function(...vectors) {
	return vectors[0].map((n, i) => Math_sum(...vectors.map(vector => vector[i])));
}
