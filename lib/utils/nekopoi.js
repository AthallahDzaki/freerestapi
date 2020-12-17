const fetch = require('node-fetch');
const cheerio = require('cheerio');

const Nekopoi = async (url) => {
  return new Promise(async (resolve, reject) => {
    try{
      const response = await fetch(url);

      const body = await response.text();

      const $ = cheerio.load(body);
      const links = [];
	  
      const soup = $;
      let title = soup("title").text();
      soup('div.liner').each(function(i, e) {
        soup(e).find('div.listlink').each(function(j, s) {
          links.push(soup(s).find('a').attr('href'))
        });
      });
      const data = {
        "title": title,
        "links": links
      };
      resolve(data);
    }catch(e){
      reject(e)
    }
  })
};

module.exports = Nekopoi