const TikTokScraper = require('tiktok-scraper');


const Tiktok = (url) => new Promise((resolve, reject) => {
    if (!url) { reject('pliese enter url') }

	const videoMeta = await TikTokScraper.getVideoMeta(url);
    resolve({
        code: 200,
        message: 'success',
        data: videoMeta.collector[0]
    })
})


module.exports = Headers
