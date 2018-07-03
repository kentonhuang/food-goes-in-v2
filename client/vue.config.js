module.exports = {
	css: {
		loaderOptions: {
			sass: {
				data: '@import "src/style/base.scss";'
			}
		}
	},
	loader: 'postcss-loader',
		options: {
			sourceMap: true,
			plugins: function() { return []; }
			},
	devServer: {
		proxy: {
	  	'/api/*': {
	  		target: 'http://localhost:3001',
				changeOrigin: true,
	  	}
	  }
	},
	chainWebpack: config => {
		config.module.rules.delete("svg");
	},
	configureWebpack: {
		module: {
			rules: [{
				test: /\.svg$/,
				loader: 'vue-svg-loader',
			}, ],
		}
	}
}