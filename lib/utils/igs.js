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

const IGStalk = (username) => new Promise((resolve, reject) => {
	if(username === undefined || !username) { reject('No Name Included.')}
	try {
		ig.getUserMeta(username, options).then(data =>
			resolve({
				code:200,
				data: {
					profile: data.graphql.user.profile_pic_url,
					profilehd: data.graphql.user.profile_pic_url_hd,
					fullname: data.graphql.user.full_name,
					private: data.graphql.user.is_private,
					verified: data.graphql.user.is_verified,
					bio: data.graphql.user.biography,
					follower: data.graphql.user.edge_followed_by.count,
					following: data.graphql.user.count,
					conneted_fb: data.graphql.user.connected_fb_page,
					videotimeline: data.graphql.user.edge_felix_video_timeline.count,
					timelime: data.graphql.user.edge_owner_to_timeline_media.count,
					savedmedia: data.graphql.user.edge_saved_media.count,
					collections: data.graphql.user.edge_media_collections.count
				}
			})
		)
	}catch(err) {reject(err)}
})

module.exports = IGStalk