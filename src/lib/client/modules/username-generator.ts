/*
 * © 2023 Doriel Rivalet
 * Use of this source code is governed by a MIT license that can be
 * found in the LICENSE file.
 */

export function generateUsername(): string {
	return (
		randomChoice(names.types).toLowerCase() +
		'-' +
		randomChoice(names.monsters).toLowerCase()
	);
}

function randomChoice(arr: string[]): string {
	return arr[Math.floor(arr.length * Math.random())];
}

const names = {
	types: ['Zenith', 'Supremacy', 'Musou'],
	monsters: [
		'Rathian',
		'Fatalis',
		'Rathalos',
		'Diablos',
		'Gravios',
		'Plesioth',
		'Monoblos',
		'Kirin',
		'Rajang',
		'Chameleos',
		'Lunastra',
		'Teostra',
		'Tigrex',
		'Akantor',
		'Espinas',
		'Pariapuria',
		'Raviente',
		'Rukodiora',
		'Gogomoa',
		'Abiorugu',
		'Disufiroa',
		'Rebidiora',
		'Hyujikiki',
		'Midogaron',
		'Giaorugu',
		'Pokaradon',
		'Shantien',
		'Zerureusu',
		'Gougarf',
		'Diorex',
		'Inagami',
		'Duremudira',
		'Toridcless',
		'Zinogre',
		'Deviljho',
		'Brachydios',
		'Barioth',
		'Uragaan',
		'Guanzorumu',
		'Voljang',
		'Nargacuga',
		'Zenaserisu',
		'Amatsu',
		'Elzelion',
		'Seregios',
		'Ukanlos',
		'Agnaktor',
		'Lagiacrus',
		'Qurupeco',
		'Alatreon',
		'Ceadeus',
		'Duramboros',
		'Lagombi',
		'Volvidon',
		'Najarala',
		'Zamtrios',
		'Dalamadur',
		'Gogmazios',
		'Astalos',
		'Glavenus',
		'Malfestio',
		'Nakarkos',
		'Valstrax',
		'Legiana',
		'Odogaron',
		'Nergigante',
		'Velkhana',
		'Magnamalo',
		'Lunagaron',
		'Malzeno',
	],
};
