var fs = require("fs");
const base64_encode = (file) => {
	return new Promise((resolve, reject) => {
		var bitmap = fs.readFileSync(file, { encoding: 'base64' });
		return resolve(bitmap);
	})
}

module.exports = {
	base64_encode
}