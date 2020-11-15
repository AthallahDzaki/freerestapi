const TikTokScraper = require('tiktok-scraper');

async function Tiktok(url) {
	try {
		if (!url) { reject('pliese enter url') }

		await TikTokScraper.getVideoMeta(url);
		resolve({
			code: 200,
			message: 'success',
			data: videoMeta.collector[0]
		})
	}
    catch (err) {
        console.log(err)
        return { code: 400 }
    }
}

/*
const Tiktok = (url) => new Promise((resolve, reject) => {
    if (!url) { reject('pliese enter url') }

    TikTokScraper.getVideoMeta(url);
    resolve({
        code: 200,
        message: 'success',
        data: videoMeta.collector[0]
    })
})*/


module.exports = Tiktok
