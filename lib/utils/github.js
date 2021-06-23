var gs = require('github-scraper');

const GH = (data, type) => new Promise((resolve, reject) => {
	if(!data || data == undefined) return reject({
		code : 400,
		description : 'Value data is null or undefined'
	});
	if(!type || type == undefined || (type != 'repo' && type != 'user')) return reject({
		code : 400,
		description : 'Value data is null or undefined or not user or repo'
	});
	
	gs(url, function(err, d) {
		console.log(url);
		console.log(d);
		resolve({
			code : 200,
			data : d
		}); // or what ever you want to do with the data
	}).catch(err => reject(err));

})

module.exports = GH;