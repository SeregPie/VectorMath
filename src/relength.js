import clone from './clone';
import length from './length';
import mulScalar from './mulScalar';

export default function(vector, newLength) {
	let oldLength = length(vector);
	return oldLength ? mulScalar(vector, newLength / oldLength) : clone(vector);
}
