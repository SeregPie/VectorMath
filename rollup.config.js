import {terser} from 'rollup-plugin-terser';

import {main} from './package.json';

export default {
	input: './src/index.js',
	plugins: [
		terser(),
	],
	output: {
		file: main,
		format: 'umd',
		name: 'VectorMath',
	},
};
