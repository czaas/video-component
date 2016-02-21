var webpack = require('webpack');

module.exports = {
	entry: [
		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/only-dev-server',
		__dirname + '/app/mount'
	],
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js',
		publicPath: '/dist/'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin() // Hot reloading for react components
	],
	module: {
		loaders: [{
			test: /\.scss$/,
			loaders: ['style', 'css', 'sass', 'autoprefixer?browsers=last 3 versions', 'sass?outputStyle=expanded']
		},{
			test: /\.js$/,
			loaders: ['react-hot', 'babel-loader?presets[]=react,presets[]=es2015'],
			exclude: /node_modules/
		}]
	}
};