const Genius = require("genius-lyrics");
const Client = new Genius.Client(process.env.gToken); // Scrapes if no key is provided

async function Find(music)
{
	const searches = await Client.songs.search(music);
	const firstSong = searches[0];
	const lyrics = await firstSong.lyrics();
	return lyrics;
}

const Faker = (lagu) => new Promise((resolve, reject) => {
    if (!lagu) { reject('Song not found.') }
	Find(lagu).then( data => {
		resolve({
			lyrics
		})
	})
})

module.exports = Faker

