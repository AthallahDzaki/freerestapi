const TikTokScraper = require('tiktok-scraper');
const needle = require('needle')

let uri = 'https://toktokdownloader.glitch.me/?url='

async function Tiktok(url) {
	try {
		if (!url) { reject('pliese enter url') }
		await needle(uri + url, (err, resp, body) => {
			resolve({
				code: 200,
				message: 'success',
				data: body
			})
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
