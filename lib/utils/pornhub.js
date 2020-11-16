const pornhub = require('pornhub');


const Pornhub = (link) => new Promise((resolve, reject) => {
    if (!link) { reject('Video not found.') }
	ph.details("http://www.pornhub.com/view_video.php?viewkey=591533139", function(err, details) {
		if(!err)
			resolve ({
				details.html
			})
		else
			reject (err)
	});
})

module.exports = Pornhub
