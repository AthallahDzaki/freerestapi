const TikTokScraper = require('tiktok-scraper');

const Tiktok = (url) => new Promise((resolve, reject) => {
    if (url === 'undefined') { reject('masukan text nya kak.') }
    try {
        const videoMeta = await TikTokScraper.getVideoMeta(url);
        resolve({
			Status: 200,
			Judul: videoMeta.collector[0].text,
			Video_URL: [
				WithWM: videoMeta.collector[0].videoUrl,
				WithoutWM: videoMeta.collector[0].videoUrlNoWaterMark
			]
		});
    } catch (error) {
        reject({
			code:400,
			message: error
		});
    }
})

module.exports = Tiktok
