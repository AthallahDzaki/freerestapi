const TikTokScraper = require('tiktok-scraper');

const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

async function nowm(url) {
	const browsers = await puppeteer.launch({
                  headless: true,
                  args: ['--no-sandbox','--disable-setuid-sandbox']
                });
	try {
		const page = await browsers.newPage();
		await page.goto('https://musicallydown.com/');
		await page.type('#link_url', `${url}`)
		await page.click('#submit-form > div > div:nth-child(2) > button');
		await page.waitForTimeout(5000)
		const bodyHandler = await page.$('body');
		const html = await page.evaluate(body => body.innerHTML, bodyHandler);
		await bodyHandler.dispose();
		const $ = cheerio.load(html);
		const directLink = $('body > div.welcome.section > div > div:nth-child(2) > div.col.s12.l8 > a:nth-child(8)').attr('href');
		await browsers.close();
		return directLink;
	} catch (err) {
		await browsers.close();
		return err
	}
}

async function TiktokData(url, type) {
	
	if(url.indexOf('?'))
		url = url.split('?')[0];
	console.log(process.env.USING_HEROKU);
	if(process.env.USING_HEROKU == 'true')
	{
		let a = await nowm(url);
		return ({
		//debug : videoMeta,
		Status: 200,
		Judul: 'None',
		Video_URL: {
			WithWM: 'disabled',
			WithoutWM: a
		}
	});
	}
	const headers = {
		"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.80 Safari/537.36",
		"referer": "https://www.tiktok.com/",
		"cookie": "tt_webid_v2=6976616234927080962"
	}
	
	const options = {
    // Number of posts to scrape: {int default: 20}
    number: 50,

    // Set session: {string[] default: ['']}
    // Authenticated session cookie value is required to scrape user/trending/music/hashtag feed
    // You can put here any number of sessions, each request will select random session from the list
    sessionList: ['sid_tt=21312213'],

    // Set proxy {string[] | string default: ''}
    // http proxy: 127.0.0.1:8080
    // socks proxy: socks5://127.0.0.1:8080
    // You can pass proxies as an array and scraper will randomly select a proxy from the array to execute the requests
    proxy: '["socks5://172.104.56.209:9050"]',

    // Set to {true} to search by user id: {boolean default: false}
    by_user_id: false,

    // How many post should be downloaded asynchronously. Only if {download:true}: {int default: 5}
    asyncDownload: 5,

    // How many post should be scraped asynchronously: {int default: 3}
    // Current option will be applied only with current types: music and hashtag
    // With other types it is always 1 because every request response to the TikTok API is providing the "maxCursor" value
    // that is required to send the next request
    asyncScraping: 3,

    // File path where all files will be saved: {string default: 'CURRENT_DIR'}
    filepath: `CURRENT_DIR`,

    // Custom file name for the output files: {string default: ''}
    fileName: `CURRENT_DIR`,

    // Output with information can be saved to a CSV or JSON files: {string default: 'na'}
    // 'csv' to save in csv
    // 'json' to save in json
    // 'all' to save in json and csv
    // 'na' to skip this step
    filetype: `na`,

    // Set custom headers: user-agent, cookie and etc
    // NOTE: When you parse video feed or single video metadata then in return you will receive {headers} object
    // that was used to extract the information and in order to access and download video through received {videoUrl} value you need to use same headers
    headers : {
		"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.80 Safari/537.36",
		"referer": "https://www.tiktok.com/",
		"cookie": "tt_webid_v2=6976616234927080962"
	},

    // Download video without the watermark: {boolean default: false}
    // Set to true to download without the watermark
    // This option will affect the execution speed
    noWaterMark: false,

    // Create link to HD video: {boolean default: false}
    // This option will only work if {noWaterMark} is set to {true}
    hdVideo: false,

    // verifyFp is used to verify the request and avoid captcha
    // When you are using proxy then there are high chances that the request will be
    // blocked with captcha
    // You can set your own verifyFp value or default(hardcoded) will be used
    verifyFp: '',

    // Switch main host to Tiktok test enpoint.
    // When your requests are blocked by captcha you can try to use Tiktok test endpoints.
    useTestEndpoints: false
};
	const videoMeta = await TikTokScraper.getVideoMeta(url, {headers});
	let a = type == 1 ? await nowm(url) : 'disabled';
    return ({
		//debug : videoMeta,
		Status: 200,
		Judul: videoMeta.collector[0].text,
		Video_URL: {
			WithWM: videoMeta.collector[0].videoUrl,
			WithoutWM: a
		}
	});
}

const Tiktok = (url, wm) => new Promise((resolve, reject) => {
    if (url === 'undefined') { reject('masukan text nya kak.') }
    try {
		TiktokData(url, wm).then(data => {
			resolve(data);
		});
    } catch (error) {
        reject({
			code:400,
			message: error
		});
    }
})

module.exports = Tiktok
