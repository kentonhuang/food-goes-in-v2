module.exports = {
	css: {
		loaderOptions: {
			sass: {
				data: '@import "src/style/base.scss";'
			}
		}
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
		config.module
			.rule('pcss')
			.use('postcss-loader')
			.tap(options =>
				merge(options, {
					sourceMap: false,
				})
			)
	}
}