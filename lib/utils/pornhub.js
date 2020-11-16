const pornhub = require('pornhub');


const Pornhub = (link) => new Promise((resolve, reject) => {
    if (!link) { reject('Video not found.') }
	ph.details("http://www.pornhub.com/view_video.php?viewkey=591533139", function(err, details) {
		if(!err)
			var _ = details.html
			resolve ({
				_
			})
		else
			reject (err)
	});
})

module.exports = Pornhub
