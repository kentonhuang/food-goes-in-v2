const config = {
	production: {
		YELP_KEY: process.env.YELP_KEY
	},
	development: {
		YELP_KEY: 'hey hey you you i dont like your girlfriend'
	}
}

exports.get = function get(env) {
	return config[env] || config.default;
}
