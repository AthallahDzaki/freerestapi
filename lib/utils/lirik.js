const Genius = require("genius-lyrics");
const Client = new Genius.Client(process.env.gToken); // Scrapes if no key is provided
var searches;

async function Find(music)
{
	searches = await Client.songs.search(music);
}

const Faker = (lagu) => new Promise((resolve, reject) => {
    if (!lagu) { reject('Song not found.') }
	Find(lagu).then( data => {
		const firstSong = searches[0];
		const lyrics = await firstSong.lyrics();
		resolve({
			lyrics
		})
	})
})

module.exports = Faker

