import external from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
import babel from "rollup-plugin-babel";

export default [
	{
		input: "./lib/index.tsx", //source
		output: [
			{
				file: "dist/index.es.js", //ecma module
				format: "es",
				exports: "named",
			},
		],
		plugins: [
			//bundles css into js and minifys
			postcss({
				plugins: [],
				minimize: true,
			}),
			typescript({
				tsconfig: "./tsconfig.json", // Path to your tsconfig.json file
			}),
			//makes react work
			babel({
				exclude: "node_modules/**",
				presets: ["@babel/preset-react"],
			}),
			//ensures our peer deps are always required
			external(),
			//ensures we can find the users node_modules
			resolve(),
			//resolves commonjs modules
			commonjs(),
			//minifys our js
			terser(),
		],
	},
];
