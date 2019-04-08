module.exports = {

	// define entry point
	entry: './src/script-1.js',

	// define output point
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},

	// dev server
	devServer: {
		inline: true,
		contentBase: __dirname,
		port: 3000
	},

	// Load module
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			},
			{
				test: /\.scss$/,
				loader: 'style-loader!css-loader!sass-loader'
			}
		]
	}
};