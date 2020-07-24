import cosineSimilarity from './cosineSimilarity';

export default function(...args) {
	return 1 - cosineSimilarity(...args);
}
