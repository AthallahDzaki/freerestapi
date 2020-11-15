const TikTokScraper = require('tiktok-scraper');


async function Tiktok(url) { 
	new Promise((resolve, reject) => {
		if (!url) { reject('pliese enter url') }
	
		TikTokScraper.getVideoMeta(url);
		resolve({
			code: 200,
			message: 'success',
			data: videoMeta.collector[0]
		})
	})
}


module.exports = Tiktok
