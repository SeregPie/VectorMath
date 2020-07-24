import cosineSimilarity from './cosineSimilarity';

export default function(...args) {
	return Math.acos(cosineSimilarity(...args));
}
