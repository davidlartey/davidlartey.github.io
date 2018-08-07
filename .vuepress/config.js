let tailwindcss = require("tailwindcss")

module.exports = {
	title: "David Lartey",
	description: "#LifeIsBeautiful",
  	
  	configureWebpack: {
    	resolve: {
      		alias: {
        		// '@alias': 'path/to/some/dir'
      		},
      		plugins: [
			    tailwindcss('./.vuepress/theme/tailwind-config.js'),
			    require('autoprefixer'),
			]
    	}
  	}
}