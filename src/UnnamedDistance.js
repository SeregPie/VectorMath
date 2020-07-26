import angle from './angle';
import length from './length';

export default function(vector, otherVector) {
	let vectorLength = length(vector);
	let otherVectorLength = length(otherVector);
	return Math.abs(vectorLength - otherVectorLength) + Math.min(vectorLength, otherVectorLength) * angle(vector, otherVector);
}
