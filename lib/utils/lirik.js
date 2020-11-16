const Genius = require("genius-lyrics");
const Client = new Genius.Client(process.env.gToken); // Scrapes if no key is provided

async function Find(musik) {
        const searches = await Client.songs.search(musik).catch(err => {return err});

        const firstSong = searches[0];

        lyrics = await firstSong.lyrics();
        return lyrics;
}

const Lirik = (musik) => new Promise((resolve, reject) => {
    if (!musik) { reject('Song not found.') }
    Lirik(musik).then(data => {
		resolve({
			data
		})
		.catch(err => {reject(err)})
	})
})

module.exports = Lirik
