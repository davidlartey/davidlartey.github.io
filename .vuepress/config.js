let path = require("path")

module.exports = {
	title: "David Lartey",
	description: "#LifeIsBeautiful",
	base : "",
	themeConfig : {
		homePage : {
			socialMediaLinks: [
				{
					"dest" : "https://twitter.com/dbilovd",
					"icon" : "twitter",
					"title" : "Twitter"
				},
				{
					"dest" : "https://medium.com/@dbilovd",
					"icon" : "medium",
					"title" : "Medium"
				},
				{
					"dest" : "https://www.linkedin.com/in/dbilovd",
					"icon" : "linkedin",
					"title" : "LinkedIn"
				},
				{
					"dest" : "https://github.com/dbilovd",
					"icon" : "github",
					"title" : "GitHub"
				}
			],
			projects: [
				{
					"image" : "",
					"home" : "https://gnghelp.org",
					"homeShort" : "gnghelp.org", 
					"title" : "GnG Help",
					"oneLiner" : "Service Organisation awareness platform"
				},
				{
					"image" : "",
					"home" : "https://ldtapp.com",
					"homeShort" : "ldtapp.com", 
					"title" : "LDT!",
					"oneLiner" : "Social Collaboration and Productivity app."
				}
			]
		}
	}
}