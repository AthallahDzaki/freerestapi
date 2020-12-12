var amamama = require("../include/base64.js");

const Nulis = (text, nama, kelas) => new Promise((resolve, reject) => {
    //resolve("API Ini Bermasalah Silahkan Gunakan Website https://freerestapi-backend-py.herokuapp.com/nulis?text="+text);
	if(nulis == undefined || nulis == "") return reject("Text?");
	const diNama = nama
	const diKelas = kelas
	const diTulis = text
	const panjangKalimat = diTulis.replace(/(\S+\s*){1,10}/g, '$&\n')
	const panjangNama = diNama.replace(/(\S+\s*){1,10}/g, '$&\n')
	const panjangKelas = diKelas.replace(/(\S+\s*){1,10}/g, '$&\n')
	const panjangBaris = panjangKalimat.split('\n').slice(0, 30).join('\n')
	const panjangBarisNama = panjangNama.split('\n').slice(0, 30).join('\n')
	const panjangBarisKelas = panjangKelas.split('\n').slice(0, 30).join('\n')
	var months = ['- 1 -', '- 2 -', '- 3 -', '- 4 -', '- 5 -', '- 6 -', '- 7 -', '- 8 -', '- 9 -', '- 10 -', '- 11 -', '- 12 -'];
	var myDays = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
	var date = new Date();
	var day = date.getDate();
	var month = date.getMonth();
	var thisDay = date.getDay(),
		thisDay = myDays[thisDay];
	var yy = date.getYear();
	var year = (yy < 1000) ? yy + 1900 : yy;
	const waktu = (day + ' ' + months[month] + ' ' + year)
	const hari = (thisDay)
	spawn('convert', [
		'../data/base.jpg',
		'-font',
		'../include/font/font.ttf',
		'-size',
		'700x960',
		'-pointsize',
		'20',
		'-interline-spacing',
		'1',
		'-annotate',
		'+806+78',
		hari,
		'-font',
		'../include/font/font.ttf',
		'-size',
		'700x960',
		'-pointsize',
		'18',
		'-interline-spacing',
		'1',
		'-annotate',
		'+806+102',
		waktu,
		'-font',
		'../include/font/font.ttf',
		'-size',
		'700x960',
		'-pointsize',
		'18',
		'-interline-spacing',
		'1',
		'-annotate',
		'+360+100',
		panjangBarisNama,
		'-font',
		'../include/font/font.ttf',
		'-size',
		'700x960',
		'-pointsize',
		'18',
		'-interline-spacing',
		'1',
		'-annotate',
		'+360+120',
		panjangBarisKelas, 
		'-font',
		'../include/font/font.ttf',
		'-size',
		'700x960',
		'-pointsize',
		'20',
		'-interline-spacing',
		'-7.5',
		'-annotate',
		'+344+142',
		panjangBaris,
		'../data/img.jpg'
	])
	.on('error', () => reject(err))
	.on('exit', () => {
		amamama.base64_encode('../data/img.jpg');
	})
})

module.exports = Nulis
