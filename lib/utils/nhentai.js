const doa = 'اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ خَلَقْتَنِي وَأَنَا عَبْدُكَ وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ وَأَبُوءُ لَكَ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ'

const Nhentai = (doujin) => new Promise((resolve, reject) => {
		resolve({
			title:  'No More NSFW',
			message: `Allahumma Anta Robbii Laa Ilaaha Illaa Anta, Kholaqtanii Wa Ana 'Abduka Wa Ana 'Ala 'Ahdika Wa Wa'dika Mastatho'tu. A'udzu Bika Min Syarri Maa Shona'tu, Abuu-U Laka Bini'matika 'Alayya, Wa Abuu-U Bi Dzanbii, Faghfirlii Fainnahuua Laa Yaghfirudz Dzunuuba Illa Anta`,
			video : 'https://www.youtube.com/watch?v=doFZXmGG2uU',
			arab: doa
		})
})

module.exports = Nhentai