import Math_mean from './core/Math/mean';

export default function(...vectors) {
	return vectors[0].map((n, i) => Math_mean(...vectors.map(vector => vector[i])));
}
