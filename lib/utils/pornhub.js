const Pornhub = (link, pixel) => new Promise((resolve, reject) => {
    if (!link) { reject('Video not found.') }
	if (!pixel) { reject ('Pixel not found')}
    needle('http://128.199.136.3/ph?url='+link+"&p="+pixel, (err, resp, body) => {
        if (!err) {
            resolve(body);
        }
		else
		{
			reject(err);
		}
    })
})

module.exports = Pornhub
