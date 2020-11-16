const Genius = require("genius-lyrics");
const Client = new Genius.Client(process.env.gToken); // Scrapes if no key is provided


const Faker = (lagu) => new Promise((resolve, reject) => {
    if (!lagu) { reject('Song not found.') }
	const searches = await Client.songs.search("faded");
	const firstSong = searches[0];
	const lyrics = await firstSong.lyrics();
    resolve({
		lyrics
    })
})

module.exports = Faker

