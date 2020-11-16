const pornhub = require('pornhub');


const Pornhub = (link) => new Promise((resolve, reject) => {
    if (!link) { reject('Video not found.') }
	pornhub.details(link, function(err, details) {
		if(!err)
		{
			var _ = details.html
			console.log(_);
			resolve (_)
		}
		else
			reject (err)
	});
})

module.exports = Pornhub
