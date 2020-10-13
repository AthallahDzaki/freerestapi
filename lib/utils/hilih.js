const lower = /[aiueo]/g
const upper = /[AIUEO]/g

const Hilih = (str) => new Promise((resolve, reject) => {
    const hasil = str.replace(lower, 'i').replace(upper, 'I')
        resolve({
            code: 200,
            result: hasil
       })
})

module.exports = Hilih
