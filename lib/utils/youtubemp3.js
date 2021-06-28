const yt = require("ytdl-core")
const yts = require("yt-search")


async function getData(url) {
	const id = await yt.getVideoID(url)
    const yutub = await yt.getInfo(`https://www.youtube.com/watch?v=${id}`).catch(err => console.log(err));
	return yutub;
}

async function ytDownlodMp4(url) {
  let data = await getData(url);
  console.log(url);
  console.log(data);
  return new Promise((resolve, reject) => {
        let pormat = data.formats
        let audio = []
        for (let i = 0; i < pormat.length; i++) {
          if (pormat[i].mimeType == 'audio/webm; codecs=\"opus\"') {
            let aud = pormat[i]
            audio.push(aud.url)
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
          url: audio[1]
        }
        resolve(result)
      })
}

module.exports = ytDownlodMp4;