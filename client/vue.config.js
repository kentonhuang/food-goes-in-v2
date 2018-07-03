module.exports = {
	css: {
		loaderOptions: {
			sass: {
				data: '@import "src/style/base.scss";'
			},
			postcss: {
				loader: `postcss-loader`,
					options: {
						options: {},
						plugins: () => {
							autoprefixer({
								browsers: ['last 2 versions']
							});
						}
					}
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
	
}