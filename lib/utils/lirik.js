const Genius = require("genius-lyrics");
const Client = new Genius.Client(process.env.gToken); // Scrapes if no key is provided

async function Lirik(musik) {
        const searches = await Client.songs.search(musik).catch(err => {return err});

        const firstSong = searches[0];

        lyrics = await firstSong.lyrics();
        return lyrics;
}

module.exports = { Lirik };
