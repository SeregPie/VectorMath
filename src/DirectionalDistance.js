import angle from './angle';
import length from './length';

export default function(vector, otherVector) {
	let vectorLength = length(vector);
	let otherVectorLength = length(otherVector);
	let a = angle(vector, otherVector);
	let l = Math.abs(vectorLength - otherVectorLength);
	let r = Math.min(vectorLength, otherVectorLength);
	return l + r * a;
}
