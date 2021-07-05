require('dotenv').config()
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
	if(process.env.USING_HEROKU)
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
	const videoMeta = await TikTokScraper.getVideoMeta(url);
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
