import angularDistance from './angularDistance';

export default function(...args) {
	return 1 - angularDistance(...args);
}
