const request = require('request');
const cheerio = require('cheerio');

const Nekopoi = url => {
  return new Promise((resolve, reject) => {
    request.get(url)
      .then(req => {
        try {
          const links = [];
          let soup = cheerio.load(req.data);
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
          resolve(data)
        } catch (err) {
          reject('Error : ' + err)
        }
      })
  });
};

module.exports = Nekopoi