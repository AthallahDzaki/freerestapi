const cheerio = require('cheerio')
const axios = require('axios')

const Gempa = () => new Promise((resolve, reject) => {
	axios.get('https://www.bmkg.go.id/gempabumi/gempabumi-dirasakan.bmkg').then((response) => {
  // Load the web page source code into a cheerio instance
  const $ = cheerio.load(response.data)

  // The pre.highlight.shell CSS selector matches all `pre` elements
  // that have both the `highlight` and `shell` class
  const urlElems = $('table.table-hover.table-striped')

  // We now loop through all the elements found
  for (let i = 0; i < urlElems.length; i++) {
    // Since the URL is within the span element, we can use the find method
    // To get all span elements with the `s1` class that are contained inside the
    // pre element. We select the first such element we find (since we have seen that the first span
    // element contains the URL)
    const urlSpan = $(urlElems[i]).find('tbody')[0]

    // We proceed, only if the element exists
    if (urlSpan) {
      // We wrap the span in `$` to create another cheerio instance of only the span
      // and use the `text` method to get only the text (ignoring the HTML)
      // of the span element
      const urlData = $(urlSpan).find('tr')[0]
      var Kapan = $(urlData).find('td')[1]
      var Letak = $(urlData).find('td')[2]
      var Magnitudo = $(urlData).find('td')[3]
      var Kedalaman = $(urlData).find('td')[4]
      var Wilayah = $(urlData).find('td')[5]
      var lintang = $(Letak).text().split(' ')[0]
      var bujur = $(Letak).text().split(' ')[2]
      var hasil = {
        Waktu: $(Kapan).text(),
        Lintang: lintang,
        Bujur: bujur,
        Magnitudo: $(Magnitudo).text(),
        Kedalaman: $(Kedalaman).text().replace(/\t/g, '').replace(/I/g, ''),
        Wilayah: $(Wilayah).text().replace(/\t/g, '').replace(/I/g, '').replace('-','').split('\n')[0],
      }
      // We then print the text on to the console
      resolve(hasil);
    }
  }
  }).catch(err => reject(err))
})

module.exports = Gempa