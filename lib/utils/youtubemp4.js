const yt = require("ytdl-core")
const yts = require("yt-search")


async function getData(url) {
	const id = await yt.getVideoID(url)
    const yutub = await yt.getInfo(`https://www.youtube.com/watch?v=${id}`).catch(err => console.log(err));
	return yutub;
}

async function ytDownlodMp4(url) {
  let data = await getData(url);
  return new Promise((resolve, reject) => {
        let pormat = data.formats
        let video = []
        for (let i = 0; i < pormat.length; i++) {
          if (pormat[i].container == 'mp4' && pormat[i].hasVideo == true && pormat[i].hasAudio == true) {
            let vid = pormat[i]
            video.push(vid.url)
          }
        }
        const title = data.player_response.microformat.playerMicroformatRenderer.title.simpleText
        const thumb = data.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url
        const channel = data.player_response.microformat.playerMicroformatRenderer.ownerChannelName
        const views = data.player_response.microformat.playerMicroformatRenderer.viewCount
        const published = data.player_response.microformat.playerMicroformatRenderer.publishDate
        
        const result = {
          title: title,
          thumb: thumb,
          channel: channel,
          published: published,
          views: views,
          url: video[0]
        }
        resolve(result)
      })
}

module.exports = ytDownlodMp4;