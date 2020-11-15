const TikTokScraper = require('tiktok-scraper');


const Tiktok = (url) => new async Promise((resolve, reject) => {
    if (!url) { reject('pliese enter url') }

    await TikTokScraper.getVideoMeta(url);
    resolve({
        code: 200,
        message: 'success',
        data: videoMeta.collector[0]
    })
})


module.exports = Tiktok
