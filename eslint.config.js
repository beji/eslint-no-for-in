const local = require("./index.js");
//const noForIn = require("@berlwein/eslint-no-for-in");

module.exports = [
	{
		files: ["examples/*.js"],
		plugins: {
			local: local,
			//"berlwein": noForIn
		},
		rules: {
			"local/no-for-in": "error",
			//"berlwein/no-for-in": "error"
		},
	},
];
