import divScalar from './divScalar';
import sum from './sum';

export default function(...vectors) {
	return divScalar(sum(...vectors), vectors.length);
}
