const ig = require('instatouch');
const sID = process.env.sID;

const options = {
    // Number of posts to scrape: {int default: 0}
    count: 0,

    // Media type to scrape: ["image", "video", "all"]: {string default: 'all'}
    mediaType: 'all',
	
	timeout: 0,

    // Some endpoints do require a valid session cookie value
    // This value can be taken from the instagram web(you need to be authorized in the web version)
    // Open inspector(google chrome -> right click on the web page -> inspector->Network)
    // refresh page and in the "Network" section you will see the request, select it
    // scroll down to the "Request Headers" section and look for "cookie:" section
    // and there you will find this value "sessionid=BLAHLBAH"
    session: "sessionid="+sID
};

const IG = (url) => new Promise((resolve, reject) => {
    if (url === 'undefined') { reject('masukan text nya kak.') }
	url = url.split('?')[0];
    try {
		ig.getPostMeta(url, options).then(data =>
            resolve({
				code: 200,
				file: data.graphql.shortcode_media.display_url
			})
		)
	} 
	catch(err){
		try {
			ig.getPostMeta(url, options).then(data =>
				resolve({
					code: 200,
					file: data.graphql.shortcode_media.display_url
				})
			)
		}
		catch(err) {
			reject({
				code:400,
				message:"Sepertinya Link Tidak Valid"
			})
		}
	}
})

module.exports = IG