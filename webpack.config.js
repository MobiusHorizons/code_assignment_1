let webpack = require('webpack');
let path    = require('path');

const isDev = /webpack-dev-server/.test(process.argv[1]);

// Plugins
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: path.join(__dirname, 'src/index.js'),
	output: {
		path: __dirname,
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader', 'eslint-loader'],
			},
			{
				test: /\.css$/,
				use : isDev ? (
					[ 'style-loader', 'css-loader', 'postcss-loader' ]
				) : (
					ExtractTextPlugin.extract({
						fallback : 'style-loader',
						use      : ['css-loader', 'postcss-loader'],
					})
				),
			},
		],
	},
	devtool: "sourcemap",
	plugins : [
		new ExtractTextPlugin('styles.css'),
		new HtmlWebpackPlugin(),
	],
};
