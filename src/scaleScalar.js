import Math_scale from './core/Math/scale';

export default function(vector, oldMinScalar, oldMaxScalar, newMinScalar, newMaxScalar) {
	return vector.map(n => Math_scale(n, oldMinScalar, oldMaxScalar, newMinScalar, newMaxScalar));
}
