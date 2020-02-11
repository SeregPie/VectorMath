import clone from './clone';
import length from './length';
import multiplyScalar from './multiplyScalar';

export default function(vector, newLength) {
	let oldLength = length(vector);
	return oldLength ? multiplyScalar(vector, newLength / oldLength) : clone(vector);
}
