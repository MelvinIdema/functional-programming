/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/camelcase/index.js":
/*!*****************************************!*\
  !*** ./node_modules/camelcase/index.js ***!
  \*****************************************/
/***/ ((module) => {

"use strict";


const preserveCamelCase = (string, locale) => {
	let isLastCharLower = false;
	let isLastCharUpper = false;
	let isLastLastCharUpper = false;

	for (let i = 0; i < string.length; i++) {
		const character = string[i];

		if (isLastCharLower && /[\p{Lu}]/u.test(character)) {
			string = string.slice(0, i) + '-' + string.slice(i);
			isLastCharLower = false;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = true;
			i++;
		} else if (isLastCharUpper && isLastLastCharUpper && /[\p{Ll}]/u.test(character)) {
			string = string.slice(0, i - 1) + '-' + string.slice(i - 1);
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = false;
			isLastCharLower = true;
		} else {
			isLastCharLower = character.toLocaleLowerCase(locale) === character && character.toLocaleUpperCase(locale) !== character;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = character.toLocaleUpperCase(locale) === character && character.toLocaleLowerCase(locale) !== character;
		}
	}

	return string;
};

const preserveConsecutiveUppercase = input => {
	return input.replace(/^[\p{Lu}](?![\p{Lu}])/gu, m1 => m1.toLowerCase());
};

const postProcess = (input, options) => {
	return input.replace(/[_.\- ]+([\p{Alpha}\p{N}_]|$)/gu, (_, p1) => p1.toLocaleUpperCase(options.locale))
		.replace(/\d+([\p{Alpha}\p{N}_]|$)/gu, m => m.toLocaleUpperCase(options.locale));
};

const camelCase = (input, options) => {
	if (!(typeof input === 'string' || Array.isArray(input))) {
		throw new TypeError('Expected the input to be `string | string[]`');
	}

	options = {
		pascalCase: false,
		preserveConsecutiveUppercase: false,
		...options
	};

	if (Array.isArray(input)) {
		input = input.map(x => x.trim())
			.filter(x => x.length)
			.join('-');
	} else {
		input = input.trim();
	}

	if (input.length === 0) {
		return '';
	}

	if (input.length === 1) {
		return options.pascalCase ? input.toLocaleUpperCase(options.locale) : input.toLocaleLowerCase(options.locale);
	}

	const hasUpperCase = input !== input.toLocaleLowerCase(options.locale);

	if (hasUpperCase) {
		input = preserveCamelCase(input, options.locale);
	}

	input = input.replace(/^[_.\- ]+/, '');

	if (options.preserveConsecutiveUppercase) {
		input = preserveConsecutiveUppercase(input);
	} else {
		input = input.toLocaleLowerCase();
	}

	if (options.pascalCase) {
		input = input.charAt(0).toLocaleUpperCase(options.locale) + input.slice(1);
	}

	return postProcess(input, options);
};

module.exports = camelCase;
// TODO: Remove this for the next major release
module.exports["default"] = camelCase;


/***/ }),

/***/ "./node_modules/colornames/colors.js":
/*!*******************************************!*\
  !*** ./node_modules/colornames/colors.js ***!
  \*******************************************/
/***/ ((module) => {

module.exports = [
  {
    "value":"#B0171F",
    "name":"indian red"
  },
  {
    "value":"#DC143C",
    "css":true,
    "name":"crimson"
  },
  {
    "value":"#FFB6C1",
    "css":true,
    "name":"lightpink"
  },
  {
    "value":"#FFAEB9",
    "name":"lightpink 1"
  },
  {
    "value":"#EEA2AD",
    "name":"lightpink 2"
  },
  {
    "value":"#CD8C95",
    "name":"lightpink 3"
  },
  {
    "value":"#8B5F65",
    "name":"lightpink 4"
  },
  {
    "value":"#FFC0CB",
    "css":true,
    "name":"pink"
  },
  {
    "value":"#FFB5C5",
    "name":"pink 1"
  },
  {
    "value":"#EEA9B8",
    "name":"pink 2"
  },
  {
    "value":"#CD919E",
    "name":"pink 3"
  },
  {
    "value":"#8B636C",
    "name":"pink 4"
  },
  {
    "value":"#DB7093",
    "css":true,
    "name":"palevioletred"
  },
  {
    "value":"#FF82AB",
    "name":"palevioletred 1"
  },
  {
    "value":"#EE799F",
    "name":"palevioletred 2"
  },
  {
    "value":"#CD6889",
    "name":"palevioletred 3"
  },
  {
    "value":"#8B475D",
    "name":"palevioletred 4"
  },
  {
    "value":"#FFF0F5",
    "name":"lavenderblush 1"
  },
  {
    "value":"#FFF0F5",
    "css":true,
    "name":"lavenderblush"
  },
  {
    "value":"#EEE0E5",
    "name":"lavenderblush 2"
  },
  {
    "value":"#CDC1C5",
    "name":"lavenderblush 3"
  },
  {
    "value":"#8B8386",
    "name":"lavenderblush 4"
  },
  {
    "value":"#FF3E96",
    "name":"violetred 1"
  },
  {
    "value":"#EE3A8C",
    "name":"violetred 2"
  },
  {
    "value":"#CD3278",
    "name":"violetred 3"
  },
  {
    "value":"#8B2252",
    "name":"violetred 4"
  },
  {
    "value":"#FF69B4",
    "css":true,
    "name":"hotpink"
  },
  {
    "value":"#FF6EB4",
    "name":"hotpink 1"
  },
  {
    "value":"#EE6AA7",
    "name":"hotpink 2"
  },
  {
    "value":"#CD6090",
    "name":"hotpink 3"
  },
  {
    "value":"#8B3A62",
    "name":"hotpink 4"
  },
  {
    "value":"#872657",
    "name":"raspberry"
  },
  {
    "value":"#FF1493",
    "name":"deeppink 1"
  },
  {
    "value":"#FF1493",
    "css":true,
    "name":"deeppink"
  },
  {
    "value":"#EE1289",
    "name":"deeppink 2"
  },
  {
    "value":"#CD1076",
    "name":"deeppink 3"
  },
  {
    "value":"#8B0A50",
    "name":"deeppink 4"
  },
  {
    "value":"#FF34B3",
    "name":"maroon 1"
  },
  {
    "value":"#EE30A7",
    "name":"maroon 2"
  },
  {
    "value":"#CD2990",
    "name":"maroon 3"
  },
  {
    "value":"#8B1C62",
    "name":"maroon 4"
  },
  {
    "value":"#C71585",
    "css":true,
    "name":"mediumvioletred"
  },
  {
    "value":"#D02090",
    "name":"violetred"
  },
  {
    "value":"#DA70D6",
    "css":true,
    "name":"orchid"
  },
  {
    "value":"#FF83FA",
    "name":"orchid 1"
  },
  {
    "value":"#EE7AE9",
    "name":"orchid 2"
  },
  {
    "value":"#CD69C9",
    "name":"orchid 3"
  },
  {
    "value":"#8B4789",
    "name":"orchid 4"
  },
  {
    "value":"#D8BFD8",
    "css":true,
    "name":"thistle"
  },
  {
    "value":"#FFE1FF",
    "name":"thistle 1"
  },
  {
    "value":"#EED2EE",
    "name":"thistle 2"
  },
  {
    "value":"#CDB5CD",
    "name":"thistle 3"
  },
  {
    "value":"#8B7B8B",
    "name":"thistle 4"
  },
  {
    "value":"#FFBBFF",
    "name":"plum 1"
  },
  {
    "value":"#EEAEEE",
    "name":"plum 2"
  },
  {
    "value":"#CD96CD",
    "name":"plum 3"
  },
  {
    "value":"#8B668B",
    "name":"plum 4"
  },
  {
    "value":"#DDA0DD",
    "css":true,
    "name":"plum"
  },
  {
    "value":"#EE82EE",
    "css":true,
    "name":"violet"
  },
  {
    "value":"#FF00FF",
    "vga":true,
    "name":"magenta"
  },
  {
    "value":"#FF00FF",
    "vga":true,
    "css":true,
    "name":"fuchsia"
  },
  {
    "value":"#EE00EE",
    "name":"magenta 2"
  },
  {
    "value":"#CD00CD",
    "name":"magenta 3"
  },
  {
    "value":"#8B008B",
    "name":"magenta 4"
  },
  {
    "value":"#8B008B",
    "css":true,
    "name":"darkmagenta"
  },
  {
    "value":"#800080",
    "vga":true,
    "css":true,
    "name":"purple"
  },
  {
    "value":"#BA55D3",
    "css":true,
    "name":"mediumorchid"
  },
  {
    "value":"#E066FF",
    "name":"mediumorchid 1"
  },
  {
    "value":"#D15FEE",
    "name":"mediumorchid 2"
  },
  {
    "value":"#B452CD",
    "name":"mediumorchid 3"
  },
  {
    "value":"#7A378B",
    "name":"mediumorchid 4"
  },
  {
    "value":"#9400D3",
    "css":true,
    "name":"darkviolet"
  },
  {
    "value":"#9932CC",
    "css":true,
    "name":"darkorchid"
  },
  {
    "value":"#BF3EFF",
    "name":"darkorchid 1"
  },
  {
    "value":"#B23AEE",
    "name":"darkorchid 2"
  },
  {
    "value":"#9A32CD",
    "name":"darkorchid 3"
  },
  {
    "value":"#68228B",
    "name":"darkorchid 4"
  },
  {
    "value":"#4B0082",
    "css":true,
    "name":"indigo"
  },
  {
    "value":"#8A2BE2",
    "css":true,
    "name":"blueviolet"
  },
  {
    "value":"#9B30FF",
    "name":"purple 1"
  },
  {
    "value":"#912CEE",
    "name":"purple 2"
  },
  {
    "value":"#7D26CD",
    "name":"purple 3"
  },
  {
    "value":"#551A8B",
    "name":"purple 4"
  },
  {
    "value":"#9370DB",
    "css":true,
    "name":"mediumpurple"
  },
  {
    "value":"#AB82FF",
    "name":"mediumpurple 1"
  },
  {
    "value":"#9F79EE",
    "name":"mediumpurple 2"
  },
  {
    "value":"#8968CD",
    "name":"mediumpurple 3"
  },
  {
    "value":"#5D478B",
    "name":"mediumpurple 4"
  },
  {
    "value":"#483D8B",
    "css":true,
    "name":"darkslateblue"
  },
  {
    "value":"#8470FF",
    "name":"lightslateblue"
  },
  {
    "value":"#7B68EE",
    "css":true,
    "name":"mediumslateblue"
  },
  {
    "value":"#6A5ACD",
    "css":true,
    "name":"slateblue"
  },
  {
    "value":"#836FFF",
    "name":"slateblue 1"
  },
  {
    "value":"#7A67EE",
    "name":"slateblue 2"
  },
  {
    "value":"#6959CD",
    "name":"slateblue 3"
  },
  {
    "value":"#473C8B",
    "name":"slateblue 4"
  },
  {
    "value":"#F8F8FF",
    "css":true,
    "name":"ghostwhite"
  },
  {
    "value":"#E6E6FA",
    "css":true,
    "name":"lavender"
  },
  {
    "value":"#0000FF",
    "vga":true,
    "css":true,
    "name":"blue"
  },
  {
    "value":"#0000EE",
    "name":"blue 2"
  },
  {
    "value":"#0000CD",
    "name":"blue 3"
  },
  {
    "value":"#0000CD",
    "css":true,
    "name":"mediumblue"
  },
  {
    "value":"#00008B",
    "name":"blue 4"
  },
  {
    "value":"#00008B",
    "css":true,
    "name":"darkblue"
  },
  {
    "value":"#000080",
    "vga":true,
    "css":true,
    "name":"navy"
  },
  {
    "value":"#191970",
    "css":true,
    "name":"midnightblue"
  },
  {
    "value":"#3D59AB",
    "name":"cobalt"
  },
  {
    "value":"#4169E1",
    "css":true,
    "name":"royalblue"
  },
  {
    "value":"#4876FF",
    "name":"royalblue 1"
  },
  {
    "value":"#436EEE",
    "name":"royalblue 2"
  },
  {
    "value":"#3A5FCD",
    "name":"royalblue 3"
  },
  {
    "value":"#27408B",
    "name":"royalblue 4"
  },
  {
    "value":"#6495ED",
    "css":true,
    "name":"cornflowerblue"
  },
  {
    "value":"#B0C4DE",
    "css":true,
    "name":"lightsteelblue"
  },
  {
    "value":"#CAE1FF",
    "name":"lightsteelblue 1"
  },
  {
    "value":"#BCD2EE",
    "name":"lightsteelblue 2"
  },
  {
    "value":"#A2B5CD",
    "name":"lightsteelblue 3"
  },
  {
    "value":"#6E7B8B",
    "name":"lightsteelblue 4"
  },
  {
    "value":"#778899",
    "css":true,
    "name":"lightslategray"
  },
  {
    "value":"#708090",
    "css":true,
    "name":"slategray"
  },
  {
    "value":"#C6E2FF",
    "name":"slategray 1"
  },
  {
    "value":"#B9D3EE",
    "name":"slategray 2"
  },
  {
    "value":"#9FB6CD",
    "name":"slategray 3"
  },
  {
    "value":"#6C7B8B",
    "name":"slategray 4"
  },
  {
    "value":"#1E90FF",
    "name":"dodgerblue 1"
  },
  {
    "value":"#1E90FF",
    "css":true,
    "name":"dodgerblue"
  },
  {
    "value":"#1C86EE",
    "name":"dodgerblue 2"
  },
  {
    "value":"#1874CD",
    "name":"dodgerblue 3"
  },
  {
    "value":"#104E8B",
    "name":"dodgerblue 4"
  },
  {
    "value":"#F0F8FF",
    "css":true,
    "name":"aliceblue"
  },
  {
    "value":"#4682B4",
    "css":true,
    "name":"steelblue"
  },
  {
    "value":"#63B8FF",
    "name":"steelblue 1"
  },
  {
    "value":"#5CACEE",
    "name":"steelblue 2"
  },
  {
    "value":"#4F94CD",
    "name":"steelblue 3"
  },
  {
    "value":"#36648B",
    "name":"steelblue 4"
  },
  {
    "value":"#87CEFA",
    "css":true,
    "name":"lightskyblue"
  },
  {
    "value":"#B0E2FF",
    "name":"lightskyblue 1"
  },
  {
    "value":"#A4D3EE",
    "name":"lightskyblue 2"
  },
  {
    "value":"#8DB6CD",
    "name":"lightskyblue 3"
  },
  {
    "value":"#607B8B",
    "name":"lightskyblue 4"
  },
  {
    "value":"#87CEFF",
    "name":"skyblue 1"
  },
  {
    "value":"#7EC0EE",
    "name":"skyblue 2"
  },
  {
    "value":"#6CA6CD",
    "name":"skyblue 3"
  },
  {
    "value":"#4A708B",
    "name":"skyblue 4"
  },
  {
    "value":"#87CEEB",
    "css":true,
    "name":"skyblue"
  },
  {
    "value":"#00BFFF",
    "name":"deepskyblue 1"
  },
  {
    "value":"#00BFFF",
    "css":true,
    "name":"deepskyblue"
  },
  {
    "value":"#00B2EE",
    "name":"deepskyblue 2"
  },
  {
    "value":"#009ACD",
    "name":"deepskyblue 3"
  },
  {
    "value":"#00688B",
    "name":"deepskyblue 4"
  },
  {
    "value":"#33A1C9",
    "name":"peacock"
  },
  {
    "value":"#ADD8E6",
    "css":true,
    "name":"lightblue"
  },
  {
    "value":"#BFEFFF",
    "name":"lightblue 1"
  },
  {
    "value":"#B2DFEE",
    "name":"lightblue 2"
  },
  {
    "value":"#9AC0CD",
    "name":"lightblue 3"
  },
  {
    "value":"#68838B",
    "name":"lightblue 4"
  },
  {
    "value":"#B0E0E6",
    "css":true,
    "name":"powderblue"
  },
  {
    "value":"#98F5FF",
    "name":"cadetblue 1"
  },
  {
    "value":"#8EE5EE",
    "name":"cadetblue 2"
  },
  {
    "value":"#7AC5CD",
    "name":"cadetblue 3"
  },
  {
    "value":"#53868B",
    "name":"cadetblue 4"
  },
  {
    "value":"#00F5FF",
    "name":"turquoise 1"
  },
  {
    "value":"#00E5EE",
    "name":"turquoise 2"
  },
  {
    "value":"#00C5CD",
    "name":"turquoise 3"
  },
  {
    "value":"#00868B",
    "name":"turquoise 4"
  },
  {
    "value":"#5F9EA0",
    "css":true,
    "name":"cadetblue"
  },
  {
    "value":"#00CED1",
    "css":true,
    "name":"darkturquoise"
  },
  {
    "value":"#F0FFFF",
    "name":"azure 1"
  },
  {
    "value":"#F0FFFF",
    "css":true,
    "name":"azure"
  },
  {
    "value":"#E0EEEE",
    "name":"azure 2"
  },
  {
    "value":"#C1CDCD",
    "name":"azure 3"
  },
  {
    "value":"#838B8B",
    "name":"azure 4"
  },
  {
    "value":"#E0FFFF",
    "name":"lightcyan 1"
  },
  {
    "value":"#E0FFFF",
    "css":true,
    "name":"lightcyan"
  },
  {
    "value":"#D1EEEE",
    "name":"lightcyan 2"
  },
  {
    "value":"#B4CDCD",
    "name":"lightcyan 3"
  },
  {
    "value":"#7A8B8B",
    "name":"lightcyan 4"
  },
  {
    "value":"#BBFFFF",
    "name":"paleturquoise 1"
  },
  {
    "value":"#AEEEEE",
    "name":"paleturquoise 2"
  },
  {
    "value":"#AEEEEE",
    "css":true,
    "name":"paleturquoise"
  },
  {
    "value":"#96CDCD",
    "name":"paleturquoise 3"
  },
  {
    "value":"#668B8B",
    "name":"paleturquoise 4"
  },
  {
    "value":"#2F4F4F",
    "css":true,
    "name":"darkslategray"
  },
  {
    "value":"#97FFFF",
    "name":"darkslategray 1"
  },
  {
    "value":"#8DEEEE",
    "name":"darkslategray 2"
  },
  {
    "value":"#79CDCD",
    "name":"darkslategray 3"
  },
  {
    "value":"#528B8B",
    "name":"darkslategray 4"
  },
  {
    "value":"#00FFFF",
    "name":"cyan"
  },
  {
    "value":"#00FFFF",
    "css":true,
    "name":"aqua"
  },
  {
    "value":"#00EEEE",
    "name":"cyan 2"
  },
  {
    "value":"#00CDCD",
    "name":"cyan 3"
  },
  {
    "value":"#008B8B",
    "name":"cyan 4"
  },
  {
    "value":"#008B8B",
    "css":true,
    "name":"darkcyan"
  },
  {
    "value":"#008080",
    "vga":true,
    "css":true,
    "name":"teal"
  },
  {
    "value":"#48D1CC",
    "css":true,
    "name":"mediumturquoise"
  },
  {
    "value":"#20B2AA",
    "css":true,
    "name":"lightseagreen"
  },
  {
    "value":"#03A89E",
    "name":"manganeseblue"
  },
  {
    "value":"#40E0D0",
    "css":true,
    "name":"turquoise"
  },
  {
    "value":"#808A87",
    "name":"coldgrey"
  },
  {
    "value":"#00C78C",
    "name":"turquoiseblue"
  },
  {
    "value":"#7FFFD4",
    "name":"aquamarine 1"
  },
  {
    "value":"#7FFFD4",
    "css":true,
    "name":"aquamarine"
  },
  {
    "value":"#76EEC6",
    "name":"aquamarine 2"
  },
  {
    "value":"#66CDAA",
    "name":"aquamarine 3"
  },
  {
    "value":"#66CDAA",
    "css":true,
    "name":"mediumaquamarine"
  },
  {
    "value":"#458B74",
    "name":"aquamarine 4"
  },
  {
    "value":"#00FA9A",
    "css":true,
    "name":"mediumspringgreen"
  },
  {
    "value":"#F5FFFA",
    "css":true,
    "name":"mintcream"
  },
  {
    "value":"#00FF7F",
    "css":true,
    "name":"springgreen"
  },
  {
    "value":"#00EE76",
    "name":"springgreen 1"
  },
  {
    "value":"#00CD66",
    "name":"springgreen 2"
  },
  {
    "value":"#008B45",
    "name":"springgreen 3"
  },
  {
    "value":"#3CB371",
    "css":true,
    "name":"mediumseagreen"
  },
  {
    "value":"#54FF9F",
    "name":"seagreen 1"
  },
  {
    "value":"#4EEE94",
    "name":"seagreen 2"
  },
  {
    "value":"#43CD80",
    "name":"seagreen 3"
  },
  {
    "value":"#2E8B57",
    "name":"seagreen 4"
  },
  {
    "value":"#2E8B57",
    "css":true,
    "name":"seagreen"
  },
  {
    "value":"#00C957",
    "name":"emeraldgreen"
  },
  {
    "value":"#BDFCC9",
    "name":"mint"
  },
  {
    "value":"#3D9140",
    "name":"cobaltgreen"
  },
  {
    "value":"#F0FFF0",
    "name":"honeydew 1"
  },
  {
    "value":"#F0FFF0",
    "css":true,
    "name":"honeydew"
  },
  {
    "value":"#E0EEE0",
    "name":"honeydew 2"
  },
  {
    "value":"#C1CDC1",
    "name":"honeydew 3"
  },
  {
    "value":"#838B83",
    "name":"honeydew 4"
  },
  {
    "value":"#8FBC8F",
    "css":true,
    "name":"darkseagreen"
  },
  {
    "value":"#C1FFC1",
    "name":"darkseagreen 1"
  },
  {
    "value":"#B4EEB4",
    "name":"darkseagreen 2"
  },
  {
    "value":"#9BCD9B",
    "name":"darkseagreen 3"
  },
  {
    "value":"#698B69",
    "name":"darkseagreen 4"
  },
  {
    "value":"#98FB98",
    "css":true,
    "name":"palegreen"
  },
  {
    "value":"#9AFF9A",
    "name":"palegreen 1"
  },
  {
    "value":"#90EE90",
    "name":"palegreen 2"
  },
  {
    "value":"#90EE90",
    "css":true,
    "name":"lightgreen"
  },
  {
    "value":"#7CCD7C",
    "name":"palegreen 3"
  },
  {
    "value":"#548B54",
    "name":"palegreen 4"
  },
  {
    "value":"#32CD32",
    "css":true,
    "name":"limegreen"
  },
  {
    "value":"#228B22",
    "css":true,
    "name":"forestgreen"
  },
  {
    "value":"#00FF00",
    "vga":true,
    "name":"green 1"
  },
  {
    "value":"#00FF00",
    "vga":true,
    "css":true,
    "name":"lime"
  },
  {
    "value":"#00EE00",
    "name":"green 2"
  },
  {
    "value":"#00CD00",
    "name":"green 3"
  },
  {
    "value":"#008B00",
    "name":"green 4"
  },
  {
    "value":"#008000",
    "vga":true,
    "css":true,
    "name":"green"
  },
  {
    "value":"#006400",
    "css":true,
    "name":"darkgreen"
  },
  {
    "value":"#308014",
    "name":"sapgreen"
  },
  {
    "value":"#7CFC00",
    "css":true,
    "name":"lawngreen"
  },
  {
    "value":"#7FFF00",
    "name":"chartreuse 1"
  },
  {
    "value":"#7FFF00",
    "css":true,
    "name":"chartreuse"
  },
  {
    "value":"#76EE00",
    "name":"chartreuse 2"
  },
  {
    "value":"#66CD00",
    "name":"chartreuse 3"
  },
  {
    "value":"#458B00",
    "name":"chartreuse 4"
  },
  {
    "value":"#ADFF2F",
    "css":true,
    "name":"greenyellow"
  },
  {
    "value":"#CAFF70",
    "name":"darkolivegreen 1"
  },
  {
    "value":"#BCEE68",
    "name":"darkolivegreen 2"
  },
  {
    "value":"#A2CD5A",
    "name":"darkolivegreen 3"
  },
  {
    "value":"#6E8B3D",
    "name":"darkolivegreen 4"
  },
  {
    "value":"#556B2F",
    "css":true,
    "name":"darkolivegreen"
  },
  {
    "value":"#6B8E23",
    "css":true,
    "name":"olivedrab"
  },
  {
    "value":"#C0FF3E",
    "name":"olivedrab 1"
  },
  {
    "value":"#B3EE3A",
    "name":"olivedrab 2"
  },
  {
    "value":"#9ACD32",
    "name":"olivedrab 3"
  },
  {
    "value":"#9ACD32",
    "css":true,
    "name":"yellowgreen"
  },
  {
    "value":"#698B22",
    "name":"olivedrab 4"
  },
  {
    "value":"#FFFFF0",
    "name":"ivory 1"
  },
  {
    "value":"#FFFFF0",
    "css":true,
    "name":"ivory"
  },
  {
    "value":"#EEEEE0",
    "name":"ivory 2"
  },
  {
    "value":"#CDCDC1",
    "name":"ivory 3"
  },
  {
    "value":"#8B8B83",
    "name":"ivory 4"
  },
  {
    "value":"#F5F5DC",
    "css":true,
    "name":"beige"
  },
  {
    "value":"#FFFFE0",
    "name":"lightyellow 1"
  },
  {
    "value":"#FFFFE0",
    "css":true,
    "name":"lightyellow"
  },
  {
    "value":"#EEEED1",
    "name":"lightyellow 2"
  },
  {
    "value":"#CDCDB4",
    "name":"lightyellow 3"
  },
  {
    "value":"#8B8B7A",
    "name":"lightyellow 4"
  },
  {
    "value":"#FAFAD2",
    "css":true,
    "name":"lightgoldenrodyellow"
  },
  {
    "value":"#FFFF00",
    "vga":true,
    "name":"yellow 1"
  },
  {
    "value":"#FFFF00",
    "vga":true,
    "css":true,
    "name":"yellow"
  },
  {
    "value":"#EEEE00",
    "name":"yellow 2"
  },
  {
    "value":"#CDCD00",
    "name":"yellow 3"
  },
  {
    "value":"#8B8B00",
    "name":"yellow 4"
  },
  {
    "value":"#808069",
    "name":"warmgrey"
  },
  {
    "value":"#808000",
    "vga":true,
    "css":true,
    "name":"olive"
  },
  {
    "value":"#BDB76B",
    "css":true,
    "name":"darkkhaki"
  },
  {
    "value":"#FFF68F",
    "name":"khaki 1"
  },
  {
    "value":"#EEE685",
    "name":"khaki 2"
  },
  {
    "value":"#CDC673",
    "name":"khaki 3"
  },
  {
    "value":"#8B864E",
    "name":"khaki 4"
  },
  {
    "value":"#F0E68C",
    "css":true,
    "name":"khaki"
  },
  {
    "value":"#EEE8AA",
    "css":true,
    "name":"palegoldenrod"
  },
  {
    "value":"#FFFACD",
    "name":"lemonchiffon 1"
  },
  {
    "value":"#FFFACD",
    "css":true,
    "name":"lemonchiffon"
  },
  {
    "value":"#EEE9BF",
    "name":"lemonchiffon 2"
  },
  {
    "value":"#CDC9A5",
    "name":"lemonchiffon 3"
  },
  {
    "value":"#8B8970",
    "name":"lemonchiffon 4"
  },
  {
    "value":"#FFEC8B",
    "name":"lightgoldenrod 1"
  },
  {
    "value":"#EEDC82",
    "name":"lightgoldenrod 2"
  },
  {
    "value":"#CDBE70",
    "name":"lightgoldenrod 3"
  },
  {
    "value":"#8B814C",
    "name":"lightgoldenrod 4"
  },
  {
    "value":"#E3CF57",
    "name":"banana"
  },
  {
    "value":"#FFD700",
    "name":"gold 1"
  },
  {
    "value":"#FFD700",
    "css":true,
    "name":"gold"
  },
  {
    "value":"#EEC900",
    "name":"gold 2"
  },
  {
    "value":"#CDAD00",
    "name":"gold 3"
  },
  {
    "value":"#8B7500",
    "name":"gold 4"
  },
  {
    "value":"#FFF8DC",
    "name":"cornsilk 1"
  },
  {
    "value":"#FFF8DC",
    "css":true,
    "name":"cornsilk"
  },
  {
    "value":"#EEE8CD",
    "name":"cornsilk 2"
  },
  {
    "value":"#CDC8B1",
    "name":"cornsilk 3"
  },
  {
    "value":"#8B8878",
    "name":"cornsilk 4"
  },
  {
    "value":"#DAA520",
    "css":true,
    "name":"goldenrod"
  },
  {
    "value":"#FFC125",
    "name":"goldenrod 1"
  },
  {
    "value":"#EEB422",
    "name":"goldenrod 2"
  },
  {
    "value":"#CD9B1D",
    "name":"goldenrod 3"
  },
  {
    "value":"#8B6914",
    "name":"goldenrod 4"
  },
  {
    "value":"#B8860B",
    "css":true,
    "name":"darkgoldenrod"
  },
  {
    "value":"#FFB90F",
    "name":"darkgoldenrod 1"
  },
  {
    "value":"#EEAD0E",
    "name":"darkgoldenrod 2"
  },
  {
    "value":"#CD950C",
    "name":"darkgoldenrod 3"
  },
  {
    "value":"#8B6508",
    "name":"darkgoldenrod 4"
  },
  {
    "value":"#FFA500",
    "name":"orange 1"
  },
  {
    "value":"#FF8000",
    "css":true,
    "name":"orange"
  },
  {
    "value":"#EE9A00",
    "name":"orange 2"
  },
  {
    "value":"#CD8500",
    "name":"orange 3"
  },
  {
    "value":"#8B5A00",
    "name":"orange 4"
  },
  {
    "value":"#FFFAF0",
    "css":true,
    "name":"floralwhite"
  },
  {
    "value":"#FDF5E6",
    "css":true,
    "name":"oldlace"
  },
  {
    "value":"#F5DEB3",
    "css":true,
    "name":"wheat"
  },
  {
    "value":"#FFE7BA",
    "name":"wheat 1"
  },
  {
    "value":"#EED8AE",
    "name":"wheat 2"
  },
  {
    "value":"#CDBA96",
    "name":"wheat 3"
  },
  {
    "value":"#8B7E66",
    "name":"wheat 4"
  },
  {
    "value":"#FFE4B5",
    "css":true,
    "name":"moccasin"
  },
  {
    "value":"#FFEFD5",
    "css":true,
    "name":"papayawhip"
  },
  {
    "value":"#FFEBCD",
    "css":true,
    "name":"blanchedalmond"
  },
  {
    "value":"#FFDEAD",
    "name":"navajowhite 1"
  },
  {
    "value":"#FFDEAD",
    "css":true,
    "name":"navajowhite"
  },
  {
    "value":"#EECFA1",
    "name":"navajowhite 2"
  },
  {
    "value":"#CDB38B",
    "name":"navajowhite 3"
  },
  {
    "value":"#8B795E",
    "name":"navajowhite 4"
  },
  {
    "value":"#FCE6C9",
    "name":"eggshell"
  },
  {
    "value":"#D2B48C",
    "css":true,
    "name":"tan"
  },
  {
    "value":"#9C661F",
    "name":"brick"
  },
  {
    "value":"#FF9912",
    "name":"cadmiumyellow"
  },
  {
    "value":"#FAEBD7",
    "css":true,
    "name":"antiquewhite"
  },
  {
    "value":"#FFEFDB",
    "name":"antiquewhite 1"
  },
  {
    "value":"#EEDFCC",
    "name":"antiquewhite 2"
  },
  {
    "value":"#CDC0B0",
    "name":"antiquewhite 3"
  },
  {
    "value":"#8B8378",
    "name":"antiquewhite 4"
  },
  {
    "value":"#DEB887",
    "css":true,
    "name":"burlywood"
  },
  {
    "value":"#FFD39B",
    "name":"burlywood 1"
  },
  {
    "value":"#EEC591",
    "name":"burlywood 2"
  },
  {
    "value":"#CDAA7D",
    "name":"burlywood 3"
  },
  {
    "value":"#8B7355",
    "name":"burlywood 4"
  },
  {
    "value":"#FFE4C4",
    "name":"bisque 1"
  },
  {
    "value":"#FFE4C4",
    "css":true,
    "name":"bisque"
  },
  {
    "value":"#EED5B7",
    "name":"bisque 2"
  },
  {
    "value":"#CDB79E",
    "name":"bisque 3"
  },
  {
    "value":"#8B7D6B",
    "name":"bisque 4"
  },
  {
    "value":"#E3A869",
    "name":"melon"
  },
  {
    "value":"#ED9121",
    "name":"carrot"
  },
  {
    "value":"#FF8C00",
    "css":true,
    "name":"darkorange"
  },
  {
    "value":"#FF7F00",
    "name":"darkorange 1"
  },
  {
    "value":"#EE7600",
    "name":"darkorange 2"
  },
  {
    "value":"#CD6600",
    "name":"darkorange 3"
  },
  {
    "value":"#8B4500",
    "name":"darkorange 4"
  },
  {
    "value":"#FFA54F",
    "name":"tan 1"
  },
  {
    "value":"#EE9A49",
    "name":"tan 2"
  },
  {
    "value":"#CD853F",
    "name":"tan 3"
  },
  {
    "value":"#CD853F",
    "css":true,
    "name":"peru"
  },
  {
    "value":"#8B5A2B",
    "name":"tan 4"
  },
  {
    "value":"#FAF0E6",
    "css":true,
    "name":"linen"
  },
  {
    "value":"#FFDAB9",
    "name":"peachpuff 1"
  },
  {
    "value":"#FFDAB9",
    "css":true,
    "name":"peachpuff"
  },
  {
    "value":"#EECBAD",
    "name":"peachpuff 2"
  },
  {
    "value":"#CDAF95",
    "name":"peachpuff 3"
  },
  {
    "value":"#8B7765",
    "name":"peachpuff 4"
  },
  {
    "value":"#FFF5EE",
    "name":"seashell 1"
  },
  {
    "value":"#FFF5EE",
    "css":true,
    "name":"seashell"
  },
  {
    "value":"#EEE5DE",
    "name":"seashell 2"
  },
  {
    "value":"#CDC5BF",
    "name":"seashell 3"
  },
  {
    "value":"#8B8682",
    "name":"seashell 4"
  },
  {
    "value":"#F4A460",
    "css":true,
    "name":"sandybrown"
  },
  {
    "value":"#C76114",
    "name":"rawsienna"
  },
  {
    "value":"#D2691E",
    "css":true,
    "name":"chocolate"
  },
  {
    "value":"#FF7F24",
    "name":"chocolate 1"
  },
  {
    "value":"#EE7621",
    "name":"chocolate 2"
  },
  {
    "value":"#CD661D",
    "name":"chocolate 3"
  },
  {
    "value":"#8B4513",
    "name":"chocolate 4"
  },
  {
    "value":"#8B4513",
    "css":true,
    "name":"saddlebrown"
  },
  {
    "value":"#292421",
    "name":"ivoryblack"
  },
  {
    "value":"#FF7D40",
    "name":"flesh"
  },
  {
    "value":"#FF6103",
    "name":"cadmiumorange"
  },
  {
    "value":"#8A360F",
    "name":"burntsienna"
  },
  {
    "value":"#A0522D",
    "css":true,
    "name":"sienna"
  },
  {
    "value":"#FF8247",
    "name":"sienna 1"
  },
  {
    "value":"#EE7942",
    "name":"sienna 2"
  },
  {
    "value":"#CD6839",
    "name":"sienna 3"
  },
  {
    "value":"#8B4726",
    "name":"sienna 4"
  },
  {
    "value":"#FFA07A",
    "name":"lightsalmon 1"
  },
  {
    "value":"#FFA07A",
    "css":true,
    "name":"lightsalmon"
  },
  {
    "value":"#EE9572",
    "name":"lightsalmon 2"
  },
  {
    "value":"#CD8162",
    "name":"lightsalmon 3"
  },
  {
    "value":"#8B5742",
    "name":"lightsalmon 4"
  },
  {
    "value":"#FF7F50",
    "css":true,
    "name":"coral"
  },
  {
    "value":"#FF4500",
    "name":"orangered 1"
  },
  {
    "value":"#FF4500",
    "css":true,
    "name":"orangered"
  },
  {
    "value":"#EE4000",
    "name":"orangered 2"
  },
  {
    "value":"#CD3700",
    "name":"orangered 3"
  },
  {
    "value":"#8B2500",
    "name":"orangered 4"
  },
  {
    "value":"#5E2612",
    "name":"sepia"
  },
  {
    "value":"#E9967A",
    "css":true,
    "name":"darksalmon"
  },
  {
    "value":"#FF8C69",
    "name":"salmon 1"
  },
  {
    "value":"#EE8262",
    "name":"salmon 2"
  },
  {
    "value":"#CD7054",
    "name":"salmon 3"
  },
  {
    "value":"#8B4C39",
    "name":"salmon 4"
  },
  {
    "value":"#FF7256",
    "name":"coral 1"
  },
  {
    "value":"#EE6A50",
    "name":"coral 2"
  },
  {
    "value":"#CD5B45",
    "name":"coral 3"
  },
  {
    "value":"#8B3E2F",
    "name":"coral 4"
  },
  {
    "value":"#8A3324",
    "name":"burntumber"
  },
  {
    "value":"#FF6347",
    "name":"tomato 1"
  },
  {
    "value":"#FF6347",
    "css":true,
    "name":"tomato"
  },
  {
    "value":"#EE5C42",
    "name":"tomato 2"
  },
  {
    "value":"#CD4F39",
    "name":"tomato 3"
  },
  {
    "value":"#8B3626",
    "name":"tomato 4"
  },
  {
    "value":"#FA8072",
    "css":true,
    "name":"salmon"
  },
  {
    "value":"#FFE4E1",
    "name":"mistyrose 1"
  },
  {
    "value":"#FFE4E1",
    "css":true,
    "name":"mistyrose"
  },
  {
    "value":"#EED5D2",
    "name":"mistyrose 2"
  },
  {
    "value":"#CDB7B5",
    "name":"mistyrose 3"
  },
  {
    "value":"#8B7D7B",
    "name":"mistyrose 4"
  },
  {
    "value":"#FFFAFA",
    "name":"snow 1"
  },
  {
    "value":"#FFFAFA",
    "css":true,
    "name":"snow"
  },
  {
    "value":"#EEE9E9",
    "name":"snow 2"
  },
  {
    "value":"#CDC9C9",
    "name":"snow 3"
  },
  {
    "value":"#8B8989",
    "name":"snow 4"
  },
  {
    "value":"#BC8F8F",
    "css":true,
    "name":"rosybrown"
  },
  {
    "value":"#FFC1C1",
    "name":"rosybrown 1"
  },
  {
    "value":"#EEB4B4",
    "name":"rosybrown 2"
  },
  {
    "value":"#CD9B9B",
    "name":"rosybrown 3"
  },
  {
    "value":"#8B6969",
    "name":"rosybrown 4"
  },
  {
    "value":"#F08080",
    "css":true,
    "name":"lightcoral"
  },
  {
    "value":"#CD5C5C",
    "css":true,
    "name":"indianred"
  },
  {
    "value":"#FF6A6A",
    "name":"indianred 1"
  },
  {
    "value":"#EE6363",
    "name":"indianred 2"
  },
  {
    "value":"#8B3A3A",
    "name":"indianred 4"
  },
  {
    "value":"#CD5555",
    "name":"indianred 3"
  },
  {
    "value":"#A52A2A",
    "css":true,
    "name":"brown"
  },
  {
    "value":"#FF4040",
    "name":"brown 1"
  },
  {
    "value":"#EE3B3B",
    "name":"brown 2"
  },
  {
    "value":"#CD3333",
    "name":"brown 3"
  },
  {
    "value":"#8B2323",
    "name":"brown 4"
  },
  {
    "value":"#B22222",
    "css":true,
    "name":"firebrick"
  },
  {
    "value":"#FF3030",
    "name":"firebrick 1"
  },
  {
    "value":"#EE2C2C",
    "name":"firebrick 2"
  },
  {
    "value":"#CD2626",
    "name":"firebrick 3"
  },
  {
    "value":"#8B1A1A",
    "name":"firebrick 4"
  },
  {
    "value":"#FF0000",
    "vga":true,
    "name":"red 1"
  },
  {
    "value":"#FF0000",
    "vga":true,
    "css":true,
    "name":"red"
  },
  {
    "value":"#EE0000",
    "name":"red 2"
  },
  {
    "value":"#CD0000",
    "name":"red 3"
  },
  {
    "value":"#8B0000",
    "name":"red 4"
  },
  {
    "value":"#8B0000",
    "css":true,
    "name":"darkred"
  },
  {
    "value":"#800000",
    "vga":true,
    "css":true,
    "name":"maroon"
  },
  {
    "value":"#8E388E",
    "name":"sgi beet"
  },
  {
    "value":"#7171C6",
    "name":"sgi slateblue"
  },
  {
    "value":"#7D9EC0",
    "name":"sgi lightblue"
  },
  {
    "value":"#388E8E",
    "name":"sgi teal"
  },
  {
    "value":"#71C671",
    "name":"sgi chartreuse"
  },
  {
    "value":"#8E8E38",
    "name":"sgi olivedrab"
  },
  {
    "value":"#C5C1AA",
    "name":"sgi brightgray"
  },
  {
    "value":"#C67171",
    "name":"sgi salmon"
  },
  {
    "value":"#555555",
    "name":"sgi darkgray"
  },
  {
    "value":"#1E1E1E",
    "name":"sgi gray 12"
  },
  {
    "value":"#282828",
    "name":"sgi gray 16"
  },
  {
    "value":"#515151",
    "name":"sgi gray 32"
  },
  {
    "value":"#5B5B5B",
    "name":"sgi gray 36"
  },
  {
    "value":"#848484",
    "name":"sgi gray 52"
  },
  {
    "value":"#8E8E8E",
    "name":"sgi gray 56"
  },
  {
    "value":"#AAAAAA",
    "name":"sgi lightgray"
  },
  {
    "value":"#B7B7B7",
    "name":"sgi gray 72"
  },
  {
    "value":"#C1C1C1",
    "name":"sgi gray 76"
  },
  {
    "value":"#EAEAEA",
    "name":"sgi gray 92"
  },
  {
    "value":"#F4F4F4",
    "name":"sgi gray 96"
  },
  {
    "value":"#FFFFFF",
    "vga":true,
    "css":true,
    "name":"white"
  },
  {
    "value":"#F5F5F5",
    "name":"white smoke"
  },
  {
    "value":"#F5F5F5",
    "name":"gray 96"
  },
  {
    "value":"#DCDCDC",
    "css":true,
    "name":"gainsboro"
  },
  {
    "value":"#D3D3D3",
    "css":true,
    "name":"lightgrey"
  },
  {
    "value":"#C0C0C0",
    "vga":true,
    "css":true,
    "name":"silver"
  },
  {
    "value":"#A9A9A9",
    "css":true,
    "name":"darkgray"
  },
  {
    "value":"#808080",
    "vga":true,
    "css":true,
    "name":"gray"
  },
  {
    "value":"#696969",
    "css":true,
    "name":"dimgray"
  },
  {
    "value":"#696969",
    "name":"gray 42"
  },
  {
    "value":"#000000",
    "vga":true,
    "css":true,
    "name":"black"
  },
  {
    "value":"#FCFCFC",
    "name":"gray 99"
  },
  {
    "value":"#FAFAFA",
    "name":"gray 98"
  },
  {
    "value":"#F7F7F7",
    "name":"gray 97"
  },
  {
    "value":"#F2F2F2",
    "name":"gray 95"
  },
  {
    "value":"#F0F0F0",
    "name":"gray 94"
  },
  {
    "value":"#EDEDED",
    "name":"gray 93"
  },
  {
    "value":"#EBEBEB",
    "name":"gray 92"
  },
  {
    "value":"#E8E8E8",
    "name":"gray 91"
  },
  {
    "value":"#E5E5E5",
    "name":"gray 90"
  },
  {
    "value":"#E3E3E3",
    "name":"gray 89"
  },
  {
    "value":"#E0E0E0",
    "name":"gray 88"
  },
  {
    "value":"#DEDEDE",
    "name":"gray 87"
  },
  {
    "value":"#DBDBDB",
    "name":"gray 86"
  },
  {
    "value":"#D9D9D9",
    "name":"gray 85"
  },
  {
    "value":"#D6D6D6",
    "name":"gray 84"
  },
  {
    "value":"#D4D4D4",
    "name":"gray 83"
  },
  {
    "value":"#D1D1D1",
    "name":"gray 82"
  },
  {
    "value":"#CFCFCF",
    "name":"gray 81"
  },
  {
    "value":"#CCCCCC",
    "name":"gray 80"
  },
  {
    "value":"#C9C9C9",
    "name":"gray 79"
  },
  {
    "value":"#C7C7C7",
    "name":"gray 78"
  },
  {
    "value":"#C4C4C4",
    "name":"gray 77"
  },
  {
    "value":"#C2C2C2",
    "name":"gray 76"
  },
  {
    "value":"#BFBFBF",
    "name":"gray 75"
  },
  {
    "value":"#BDBDBD",
    "name":"gray 74"
  },
  {
    "value":"#BABABA",
    "name":"gray 73"
  },
  {
    "value":"#B8B8B8",
    "name":"gray 72"
  },
  {
    "value":"#B5B5B5",
    "name":"gray 71"
  },
  {
    "value":"#B3B3B3",
    "name":"gray 70"
  },
  {
    "value":"#B0B0B0",
    "name":"gray 69"
  },
  {
    "value":"#ADADAD",
    "name":"gray 68"
  },
  {
    "value":"#ABABAB",
    "name":"gray 67"
  },
  {
    "value":"#A8A8A8",
    "name":"gray 66"
  },
  {
    "value":"#A6A6A6",
    "name":"gray 65"
  },
  {
    "value":"#A3A3A3",
    "name":"gray 64"
  },
  {
    "value":"#A1A1A1",
    "name":"gray 63"
  },
  {
    "value":"#9E9E9E",
    "name":"gray 62"
  },
  {
    "value":"#9C9C9C",
    "name":"gray 61"
  },
  {
    "value":"#999999",
    "name":"gray 60"
  },
  {
    "value":"#969696",
    "name":"gray 59"
  },
  {
    "value":"#949494",
    "name":"gray 58"
  },
  {
    "value":"#919191",
    "name":"gray 57"
  },
  {
    "value":"#8F8F8F",
    "name":"gray 56"
  },
  {
    "value":"#8C8C8C",
    "name":"gray 55"
  },
  {
    "value":"#8A8A8A",
    "name":"gray 54"
  },
  {
    "value":"#878787",
    "name":"gray 53"
  },
  {
    "value":"#858585",
    "name":"gray 52"
  },
  {
    "value":"#828282",
    "name":"gray 51"
  },
  {
    "value":"#7F7F7F",
    "name":"gray 50"
  },
  {
    "value":"#7D7D7D",
    "name":"gray 49"
  },
  {
    "value":"#7A7A7A",
    "name":"gray 48"
  },
  {
    "value":"#787878",
    "name":"gray 47"
  },
  {
    "value":"#757575",
    "name":"gray 46"
  },
  {
    "value":"#737373",
    "name":"gray 45"
  },
  {
    "value":"#707070",
    "name":"gray 44"
  },
  {
    "value":"#6E6E6E",
    "name":"gray 43"
  },
  {
    "value":"#666666",
    "name":"gray 40"
  },
  {
    "value":"#636363",
    "name":"gray 39"
  },
  {
    "value":"#616161",
    "name":"gray 38"
  },
  {
    "value":"#5E5E5E",
    "name":"gray 37"
  },
  {
    "value":"#5C5C5C",
    "name":"gray 36"
  },
  {
    "value":"#595959",
    "name":"gray 35"
  },
  {
    "value":"#575757",
    "name":"gray 34"
  },
  {
    "value":"#545454",
    "name":"gray 33"
  },
  {
    "value":"#525252",
    "name":"gray 32"
  },
  {
    "value":"#4F4F4F",
    "name":"gray 31"
  },
  {
    "value":"#4D4D4D",
    "name":"gray 30"
  },
  {
    "value":"#4A4A4A",
    "name":"gray 29"
  },
  {
    "value":"#474747",
    "name":"gray 28"
  },
  {
    "value":"#454545",
    "name":"gray 27"
  },
  {
    "value":"#424242",
    "name":"gray 26"
  },
  {
    "value":"#404040",
    "name":"gray 25"
  },
  {
    "value":"#3D3D3D",
    "name":"gray 24"
  },
  {
    "value":"#3B3B3B",
    "name":"gray 23"
  },
  {
    "value":"#383838",
    "name":"gray 22"
  },
  {
    "value":"#363636",
    "name":"gray 21"
  },
  {
    "value":"#333333",
    "name":"gray 20"
  },
  {
    "value":"#303030",
    "name":"gray 19"
  },
  {
    "value":"#2E2E2E",
    "name":"gray 18"
  },
  {
    "value":"#2B2B2B",
    "name":"gray 17"
  },
  {
    "value":"#292929",
    "name":"gray 16"
  },
  {
    "value":"#262626",
    "name":"gray 15"
  },
  {
    "value":"#242424",
    "name":"gray 14"
  },
  {
    "value":"#212121",
    "name":"gray 13"
  },
  {
    "value":"#1F1F1F",
    "name":"gray 12"
  },
  {
    "value":"#1C1C1C",
    "name":"gray 11"
  },
  {
    "value":"#1A1A1A",
    "name":"gray 10"
  },
  {
    "value":"#171717",
    "name":"gray 9"
  },
  {
    "value":"#141414",
    "name":"gray 8"
  },
  {
    "value":"#121212",
    "name":"gray 7"
  },
  {
    "value":"#0F0F0F",
    "name":"gray 6"
  },
  {
    "value":"#0D0D0D",
    "name":"gray 5"
  },
  {
    "value":"#0A0A0A",
    "name":"gray 4"
  },
  {
    "value":"#080808",
    "name":"gray 3"
  },
  {
    "value":"#050505",
    "name":"gray 2"
  },
  {
    "value":"#030303",
    "name":"gray 1"
  },
  {
    "value":"#F5F5F5",
    "css":true,
    "name":"whitesmoke"
  }
]


/***/ }),

/***/ "./node_modules/colornames/index.js":
/*!******************************************!*\
  !*** ./node_modules/colornames/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Module dependencies
 */
var colors = __webpack_require__(/*! ./colors */ "./node_modules/colornames/colors.js")

var cssColors = colors.filter(function(color){
  return !! color.css
})

var vgaColors = colors.filter(function(color){
  return !! color.vga
})


/**
 * Get color value for a certain name.
 * @param name {String}
 * @return {String} Hex color value
 * @api public
 */

module.exports = function(name) {
  var color = module.exports.get(name)
  return color && color.value
}

/**
 * Get color object.
 *
 * @param name {String}
 * @return {Object} Color object
 * @api public
 */

module.exports.get = function(name) {
  name = name || ''
  name = name.trim().toLowerCase()
  return colors.filter(function(color){
    return color.name.toLowerCase() === name
  }).pop()
}

/**
 * Get all color object.
 *
 * @return {Array}
 * @api public
 */

module.exports.all = module.exports.get.all = function() {
 return colors
}

/**
 * Get color object compatible with CSS.
 *
 * @return {Array}
 * @api public
 */

module.exports.get.css = function(name) {
  if (!name) return cssColors
  name = name || ''
  name = name.trim().toLowerCase()
  return cssColors.filter(function(color){
    return color.name.toLowerCase() === name
  }).pop()
}



module.exports.get.vga = function(name) {
  if (!name) return vgaColors
  name = name || ''
  name = name.trim().toLowerCase()
  return vgaColors.filter(function(color){
    return color.name.toLowerCase() === name
  }).pop()
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var camelcase = __webpack_require__(/*! camelcase */ "./node_modules/camelcase/index.js");

var toHex = __webpack_require__(/*! colornames */ "./node_modules/colornames/index.js");

fetch("https://raw.githubusercontent.com/cmda-tt/course-21-22/main/tech-track-dataset.json").then(function (res) {
  return res.json();
}).then(function (data) {
  return filterData(data);
});

function translate(word) {
  switch (word.toLowerCase()) {
    case "bruin":
      return "brown";

    case "blauw":
      return "blue";

    case "groen":
      return "green";

    case "donkerbruin":
      return "brown";

    case "grijs":
      return "gray";

    case "groengrijs":
      return "palegreen";

    case "groenblauw":
      return "darkseagreen";
  }
}

function insertRow(id, color) {
  var eyeColorTableBody = document.querySelector("#eyeColorTable tbody");
  var tableRow = "\n        <tr>\n            <td>".concat(id, "</td>\n            <td>").concat(color, "</td>\n            <td><div class=\"visualisation\" style=\"background-color: ").concat(color, "\"></div></td>\n        <tr>\n    ");
  eyeColorTableBody.innerHTML += tableRow;
}

function filterData(data) {
  var reduced = data.reduce(function (previousValue, currentValue) {
    return [].concat(_toConsumableArray(previousValue), [currentValue['Wat is je oogkleur?']]);
  }, []);
  var camelCased = reduced.map(function (color) {
    return camelcase(color);
  });
  var translated = camelCased.map(function (dutch) {
    return translate(dutch);
  });
  var hexed = translated.map(function (colorName) {
    return toHex(colorName);
  });
  hexed.forEach(function (color, index) {
    return insertRow(index, color);
  });
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLG1CQUFtQjtBQUNwQzs7QUFFQSw4QkFBOEIsR0FBRztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx3REFBd0QsR0FBRztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsR0FBRyxRQUFRLEdBQUc7QUFDMUM7O0FBRUE7QUFDQSxvQ0FBb0MsTUFBTSxHQUFHLEVBQUU7QUFDL0Msb0JBQW9CLE1BQU0sR0FBRyxFQUFFO0FBQy9COztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUFzQjs7Ozs7Ozs7Ozs7QUMxRnRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDdCtFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1CQUFPLENBQUMscURBQVU7O0FBRS9CO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLFlBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixZQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUEsa0JBQWtCLEdBQUcsc0JBQXNCO0FBQzNDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUEsc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7QUFJQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7OztVQzlFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QkEsSUFBTUEsU0FBUyxHQUFHQyxtQkFBTyxDQUFDLG9EQUFELENBQXpCOztBQUNBLElBQU1DLEtBQUssR0FBR0QsbUJBQU8sQ0FBQyxzREFBRCxDQUFyQjs7QUFFQUUsS0FBSyxDQUFDLHFGQUFELENBQUwsQ0FDS0MsSUFETCxDQUNVLFVBQUFDLEdBQUc7QUFBQSxTQUFJQSxHQUFHLENBQUNDLElBQUosRUFBSjtBQUFBLENBRGIsRUFFS0YsSUFGTCxDQUVVLFVBQUFHLElBQUk7QUFBQSxTQUFJQyxVQUFVLENBQUNELElBQUQsQ0FBZDtBQUFBLENBRmQ7O0FBSUEsU0FBU0UsU0FBVCxDQUFtQkMsSUFBbkIsRUFBeUI7QUFDckIsVUFBT0EsSUFBSSxDQUFDQyxXQUFMLEVBQVA7QUFDSSxTQUFLLE9BQUw7QUFDSSxhQUFPLE9BQVA7O0FBQ0osU0FBSyxPQUFMO0FBQ0ksYUFBTyxNQUFQOztBQUNKLFNBQUssT0FBTDtBQUNJLGFBQU8sT0FBUDs7QUFDSixTQUFLLGFBQUw7QUFDSSxhQUFPLE9BQVA7O0FBQ0osU0FBSyxPQUFMO0FBQ0ksYUFBTyxNQUFQOztBQUNKLFNBQUssWUFBTDtBQUNJLGFBQU8sV0FBUDs7QUFDSixTQUFLLFlBQUw7QUFDSSxhQUFPLGNBQVA7QUFkUjtBQWdCSDs7QUFFRCxTQUFTQyxTQUFULENBQW1CQyxFQUFuQixFQUF1QkMsS0FBdkIsRUFBOEI7QUFDMUIsTUFBTUMsaUJBQWlCLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixzQkFBdkIsQ0FBMUI7QUFDQSxNQUFNQyxRQUFRLDZDQUVBTCxFQUZBLG9DQUdBQyxLQUhBLDJGQUlvREEsS0FKcEQsdUNBQWQ7QUFPQUMsRUFBQUEsaUJBQWlCLENBQUNJLFNBQWxCLElBQStCRCxRQUEvQjtBQUNIOztBQUVELFNBQVNWLFVBQVQsQ0FBb0JELElBQXBCLEVBQTBCO0FBQ3RCLE1BQU1hLE9BQU8sR0FBR2IsSUFBSSxDQUFDYyxNQUFMLENBQVksVUFBQ0MsYUFBRCxFQUFnQkMsWUFBaEI7QUFBQSx3Q0FBcUNELGFBQXJDLElBQW9EQyxZQUFZLENBQUMscUJBQUQsQ0FBaEU7QUFBQSxHQUFaLEVBQXNHLEVBQXRHLENBQWhCO0FBQ0EsTUFBTUMsVUFBVSxHQUFHSixPQUFPLENBQUNLLEdBQVIsQ0FBWSxVQUFBWCxLQUFLO0FBQUEsV0FBSWQsU0FBUyxDQUFDYyxLQUFELENBQWI7QUFBQSxHQUFqQixDQUFuQjtBQUNBLE1BQU1ZLFVBQVUsR0FBR0YsVUFBVSxDQUFDQyxHQUFYLENBQWUsVUFBQUUsS0FBSztBQUFBLFdBQUlsQixTQUFTLENBQUNrQixLQUFELENBQWI7QUFBQSxHQUFwQixDQUFuQjtBQUNBLE1BQU1DLEtBQUssR0FBR0YsVUFBVSxDQUFDRCxHQUFYLENBQWUsVUFBQUksU0FBUztBQUFBLFdBQUkzQixLQUFLLENBQUMyQixTQUFELENBQVQ7QUFBQSxHQUF4QixDQUFkO0FBQ0FELEVBQUFBLEtBQUssQ0FBQ0UsT0FBTixDQUFjLFVBQUNoQixLQUFELEVBQVFpQixLQUFSO0FBQUEsV0FBa0JuQixTQUFTLENBQUNtQixLQUFELEVBQVFqQixLQUFSLENBQTNCO0FBQUEsR0FBZDtBQUNILEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdW5jdGlvbmFsLXByb2dyYW1taW5nLy4vbm9kZV9tb2R1bGVzL2NhbWVsY2FzZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9mdW5jdGlvbmFsLXByb2dyYW1taW5nLy4vbm9kZV9tb2R1bGVzL2NvbG9ybmFtZXMvY29sb3JzLmpzIiwid2VicGFjazovL2Z1bmN0aW9uYWwtcHJvZ3JhbW1pbmcvLi9ub2RlX21vZHVsZXMvY29sb3JuYW1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9mdW5jdGlvbmFsLXByb2dyYW1taW5nL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Z1bmN0aW9uYWwtcHJvZ3JhbW1pbmcvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwcmVzZXJ2ZUNhbWVsQ2FzZSA9IChzdHJpbmcsIGxvY2FsZSkgPT4ge1xuXHRsZXQgaXNMYXN0Q2hhckxvd2VyID0gZmFsc2U7XG5cdGxldCBpc0xhc3RDaGFyVXBwZXIgPSBmYWxzZTtcblx0bGV0IGlzTGFzdExhc3RDaGFyVXBwZXIgPSBmYWxzZTtcblxuXHRmb3IgKGxldCBpID0gMDsgaSA8IHN0cmluZy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IGNoYXJhY3RlciA9IHN0cmluZ1tpXTtcblxuXHRcdGlmIChpc0xhc3RDaGFyTG93ZXIgJiYgL1tcXHB7THV9XS91LnRlc3QoY2hhcmFjdGVyKSkge1xuXHRcdFx0c3RyaW5nID0gc3RyaW5nLnNsaWNlKDAsIGkpICsgJy0nICsgc3RyaW5nLnNsaWNlKGkpO1xuXHRcdFx0aXNMYXN0Q2hhckxvd2VyID0gZmFsc2U7XG5cdFx0XHRpc0xhc3RMYXN0Q2hhclVwcGVyID0gaXNMYXN0Q2hhclVwcGVyO1xuXHRcdFx0aXNMYXN0Q2hhclVwcGVyID0gdHJ1ZTtcblx0XHRcdGkrKztcblx0XHR9IGVsc2UgaWYgKGlzTGFzdENoYXJVcHBlciAmJiBpc0xhc3RMYXN0Q2hhclVwcGVyICYmIC9bXFxwe0xsfV0vdS50ZXN0KGNoYXJhY3RlcikpIHtcblx0XHRcdHN0cmluZyA9IHN0cmluZy5zbGljZSgwLCBpIC0gMSkgKyAnLScgKyBzdHJpbmcuc2xpY2UoaSAtIDEpO1xuXHRcdFx0aXNMYXN0TGFzdENoYXJVcHBlciA9IGlzTGFzdENoYXJVcHBlcjtcblx0XHRcdGlzTGFzdENoYXJVcHBlciA9IGZhbHNlO1xuXHRcdFx0aXNMYXN0Q2hhckxvd2VyID0gdHJ1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aXNMYXN0Q2hhckxvd2VyID0gY2hhcmFjdGVyLnRvTG9jYWxlTG93ZXJDYXNlKGxvY2FsZSkgPT09IGNoYXJhY3RlciAmJiBjaGFyYWN0ZXIudG9Mb2NhbGVVcHBlckNhc2UobG9jYWxlKSAhPT0gY2hhcmFjdGVyO1xuXHRcdFx0aXNMYXN0TGFzdENoYXJVcHBlciA9IGlzTGFzdENoYXJVcHBlcjtcblx0XHRcdGlzTGFzdENoYXJVcHBlciA9IGNoYXJhY3Rlci50b0xvY2FsZVVwcGVyQ2FzZShsb2NhbGUpID09PSBjaGFyYWN0ZXIgJiYgY2hhcmFjdGVyLnRvTG9jYWxlTG93ZXJDYXNlKGxvY2FsZSkgIT09IGNoYXJhY3Rlcjtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gc3RyaW5nO1xufTtcblxuY29uc3QgcHJlc2VydmVDb25zZWN1dGl2ZVVwcGVyY2FzZSA9IGlucHV0ID0+IHtcblx0cmV0dXJuIGlucHV0LnJlcGxhY2UoL15bXFxwe0x1fV0oPyFbXFxwe0x1fV0pL2d1LCBtMSA9PiBtMS50b0xvd2VyQ2FzZSgpKTtcbn07XG5cbmNvbnN0IHBvc3RQcm9jZXNzID0gKGlucHV0LCBvcHRpb25zKSA9PiB7XG5cdHJldHVybiBpbnB1dC5yZXBsYWNlKC9bXy5cXC0gXSsoW1xccHtBbHBoYX1cXHB7Tn1fXXwkKS9ndSwgKF8sIHAxKSA9PiBwMS50b0xvY2FsZVVwcGVyQ2FzZShvcHRpb25zLmxvY2FsZSkpXG5cdFx0LnJlcGxhY2UoL1xcZCsoW1xccHtBbHBoYX1cXHB7Tn1fXXwkKS9ndSwgbSA9PiBtLnRvTG9jYWxlVXBwZXJDYXNlKG9wdGlvbnMubG9jYWxlKSk7XG59O1xuXG5jb25zdCBjYW1lbENhc2UgPSAoaW5wdXQsIG9wdGlvbnMpID0+IHtcblx0aWYgKCEodHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJyB8fCBBcnJheS5pc0FycmF5KGlucHV0KSkpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCB0aGUgaW5wdXQgdG8gYmUgYHN0cmluZyB8IHN0cmluZ1tdYCcpO1xuXHR9XG5cblx0b3B0aW9ucyA9IHtcblx0XHRwYXNjYWxDYXNlOiBmYWxzZSxcblx0XHRwcmVzZXJ2ZUNvbnNlY3V0aXZlVXBwZXJjYXNlOiBmYWxzZSxcblx0XHQuLi5vcHRpb25zXG5cdH07XG5cblx0aWYgKEFycmF5LmlzQXJyYXkoaW5wdXQpKSB7XG5cdFx0aW5wdXQgPSBpbnB1dC5tYXAoeCA9PiB4LnRyaW0oKSlcblx0XHRcdC5maWx0ZXIoeCA9PiB4Lmxlbmd0aClcblx0XHRcdC5qb2luKCctJyk7XG5cdH0gZWxzZSB7XG5cdFx0aW5wdXQgPSBpbnB1dC50cmltKCk7XG5cdH1cblxuXHRpZiAoaW5wdXQubGVuZ3RoID09PSAwKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0aWYgKGlucHV0Lmxlbmd0aCA9PT0gMSkge1xuXHRcdHJldHVybiBvcHRpb25zLnBhc2NhbENhc2UgPyBpbnB1dC50b0xvY2FsZVVwcGVyQ2FzZShvcHRpb25zLmxvY2FsZSkgOiBpbnB1dC50b0xvY2FsZUxvd2VyQ2FzZShvcHRpb25zLmxvY2FsZSk7XG5cdH1cblxuXHRjb25zdCBoYXNVcHBlckNhc2UgPSBpbnB1dCAhPT0gaW5wdXQudG9Mb2NhbGVMb3dlckNhc2Uob3B0aW9ucy5sb2NhbGUpO1xuXG5cdGlmIChoYXNVcHBlckNhc2UpIHtcblx0XHRpbnB1dCA9IHByZXNlcnZlQ2FtZWxDYXNlKGlucHV0LCBvcHRpb25zLmxvY2FsZSk7XG5cdH1cblxuXHRpbnB1dCA9IGlucHV0LnJlcGxhY2UoL15bXy5cXC0gXSsvLCAnJyk7XG5cblx0aWYgKG9wdGlvbnMucHJlc2VydmVDb25zZWN1dGl2ZVVwcGVyY2FzZSkge1xuXHRcdGlucHV0ID0gcHJlc2VydmVDb25zZWN1dGl2ZVVwcGVyY2FzZShpbnB1dCk7XG5cdH0gZWxzZSB7XG5cdFx0aW5wdXQgPSBpbnB1dC50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuXHR9XG5cblx0aWYgKG9wdGlvbnMucGFzY2FsQ2FzZSkge1xuXHRcdGlucHV0ID0gaW5wdXQuY2hhckF0KDApLnRvTG9jYWxlVXBwZXJDYXNlKG9wdGlvbnMubG9jYWxlKSArIGlucHV0LnNsaWNlKDEpO1xuXHR9XG5cblx0cmV0dXJuIHBvc3RQcm9jZXNzKGlucHV0LCBvcHRpb25zKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY2FtZWxDYXNlO1xuLy8gVE9ETzogUmVtb3ZlIHRoaXMgZm9yIHRoZSBuZXh0IG1ham9yIHJlbGVhc2Vcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBjYW1lbENhc2U7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFtcbiAge1xuICAgIFwidmFsdWVcIjpcIiNCMDE3MUZcIixcbiAgICBcIm5hbWVcIjpcImluZGlhbiByZWRcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0RDMTQzQ1wiLFxuICAgIFwiY3NzXCI6dHJ1ZSxcbiAgICBcIm5hbWVcIjpcImNyaW1zb25cIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0ZGQjZDMVwiLFxuICAgIFwiY3NzXCI6dHJ1ZSxcbiAgICBcIm5hbWVcIjpcImxpZ2h0cGlua1wiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjRkZBRUI5XCIsXG4gICAgXCJuYW1lXCI6XCJsaWdodHBpbmsgMVwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjRUVBMkFEXCIsXG4gICAgXCJuYW1lXCI6XCJsaWdodHBpbmsgMlwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjQ0Q4Qzk1XCIsXG4gICAgXCJuYW1lXCI6XCJsaWdodHBpbmsgM1wiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjOEI1RjY1XCIsXG4gICAgXCJuYW1lXCI6XCJsaWdodHBpbmsgNFwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjRkZDMENCXCIsXG4gICAgXCJjc3NcIjp0cnVlLFxuICAgIFwibmFtZVwiOlwicGlua1wiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjRkZCNUM1XCIsXG4gICAgXCJuYW1lXCI6XCJwaW5rIDFcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0VFQTlCOFwiLFxuICAgIFwibmFtZVwiOlwicGluayAyXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNDRDkxOUVcIixcbiAgICBcIm5hbWVcIjpcInBpbmsgM1wiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjOEI2MzZDXCIsXG4gICAgXCJuYW1lXCI6XCJwaW5rIDRcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0RCNzA5M1wiLFxuICAgIFwiY3NzXCI6dHJ1ZSxcbiAgICBcIm5hbWVcIjpcInBhbGV2aW9sZXRyZWRcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0ZGODJBQlwiLFxuICAgIFwibmFtZVwiOlwicGFsZXZpb2xldHJlZCAxXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNFRTc5OUZcIixcbiAgICBcIm5hbWVcIjpcInBhbGV2aW9sZXRyZWQgMlwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjQ0Q2ODg5XCIsXG4gICAgXCJuYW1lXCI6XCJwYWxldmlvbGV0cmVkIDNcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzhCNDc1RFwiLFxuICAgIFwibmFtZVwiOlwicGFsZXZpb2xldHJlZCA0XCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNGRkYwRjVcIixcbiAgICBcIm5hbWVcIjpcImxhdmVuZGVyYmx1c2ggMVwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjRkZGMEY1XCIsXG4gICAgXCJjc3NcIjp0cnVlLFxuICAgIFwibmFtZVwiOlwibGF2ZW5kZXJibHVzaFwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjRUVFMEU1XCIsXG4gICAgXCJuYW1lXCI6XCJsYXZlbmRlcmJsdXNoIDJcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0NEQzFDNVwiLFxuICAgIFwibmFtZVwiOlwibGF2ZW5kZXJibHVzaCAzXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiM4QjgzODZcIixcbiAgICBcIm5hbWVcIjpcImxhdmVuZGVyYmx1c2ggNFwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjRkYzRTk2XCIsXG4gICAgXCJuYW1lXCI6XCJ2aW9sZXRyZWQgMVwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjRUUzQThDXCIsXG4gICAgXCJuYW1lXCI6XCJ2aW9sZXRyZWQgMlwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjQ0QzMjc4XCIsXG4gICAgXCJuYW1lXCI6XCJ2aW9sZXRyZWQgM1wiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjOEIyMjUyXCIsXG4gICAgXCJuYW1lXCI6XCJ2aW9sZXRyZWQgNFwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjRkY2OUI0XCIsXG4gICAgXCJjc3NcIjp0cnVlLFxuICAgIFwibmFtZVwiOlwiaG90cGlua1wiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjRkY2RUI0XCIsXG4gICAgXCJuYW1lXCI6XCJob3RwaW5rIDFcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0VFNkFBN1wiLFxuICAgIFwibmFtZVwiOlwiaG90cGluayAyXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNDRDYwOTBcIixcbiAgICBcIm5hbWVcIjpcImhvdHBpbmsgM1wiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjOEIzQTYyXCIsXG4gICAgXCJuYW1lXCI6XCJob3RwaW5rIDRcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzg3MjY1N1wiLFxuICAgIFwibmFtZVwiOlwicmFzcGJlcnJ5XCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNGRjE0OTNcIixcbiAgICBcIm5hbWVcIjpcImRlZXBwaW5rIDFcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0ZGMTQ5M1wiLFxuICAgIFwiY3NzXCI6dHJ1ZSxcbiAgICBcIm5hbWVcIjpcImRlZXBwaW5rXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNFRTEyODlcIixcbiAgICBcIm5hbWVcIjpcImRlZXBwaW5rIDJcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0NEMTA3NlwiLFxuICAgIFwibmFtZVwiOlwiZGVlcHBpbmsgM1wiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjOEIwQTUwXCIsXG4gICAgXCJuYW1lXCI6XCJkZWVwcGluayA0XCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNGRjM0QjNcIixcbiAgICBcIm5hbWVcIjpcIm1hcm9vbiAxXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNFRTMwQTdcIixcbiAgICBcIm5hbWVcIjpcIm1hcm9vbiAyXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNDRDI5OTBcIixcbiAgICBcIm5hbWVcIjpcIm1hcm9vbiAzXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiM4QjFDNjJcIixcbiAgICBcIm5hbWVcIjpcIm1hcm9vbiA0XCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNDNzE1ODVcIixcbiAgICBcImNzc1wiOnRydWUsXG4gICAgXCJuYW1lXCI6XCJtZWRpdW12aW9sZXRyZWRcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0QwMjA5MFwiLFxuICAgIFwibmFtZVwiOlwidmlvbGV0cmVkXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNEQTcwRDZcIixcbiAgICBcImNzc1wiOnRydWUsXG4gICAgXCJuYW1lXCI6XCJvcmNoaWRcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0ZGODNGQVwiLFxuICAgIFwibmFtZVwiOlwib3JjaGlkIDFcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0VFN0FFOVwiLFxuICAgIFwibmFtZVwiOlwib3JjaGlkIDJcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0NENjlDOVwiLFxuICAgIFwibmFtZVwiOlwib3JjaGlkIDNcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzhCNDc4OVwiLFxuICAgIFwibmFtZVwiOlwib3JjaGlkIDRcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0Q4QkZEOFwiLFxuICAgIFwiY3NzXCI6dHJ1ZSxcbiAgICBcIm5hbWVcIjpcInRoaXN0bGVcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0ZGRTFGRlwiLFxuICAgIFwibmFtZVwiOlwidGhpc3RsZSAxXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNFRUQyRUVcIixcbiAgICBcIm5hbWVcIjpcInRoaXN0bGUgMlwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjQ0RCNUNEXCIsXG4gICAgXCJuYW1lXCI6XCJ0aGlzdGxlIDNcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzhCN0I4QlwiLFxuICAgIFwibmFtZVwiOlwidGhpc3RsZSA0XCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNGRkJCRkZcIixcbiAgICBcIm5hbWVcIjpcInBsdW0gMVwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjRUVBRUVFXCIsXG4gICAgXCJuYW1lXCI6XCJwbHVtIDJcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0NEOTZDRFwiLFxuICAgIFwibmFtZVwiOlwicGx1bSAzXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiM4QjY2OEJcIixcbiAgICBcIm5hbWVcIjpcInBsdW0gNFwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjRERBMEREXCIsXG4gICAgXCJjc3NcIjp0cnVlLFxuICAgIFwibmFtZVwiOlwicGx1bVwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjRUU4MkVFXCIsXG4gICAgXCJjc3NcIjp0cnVlLFxuICAgIFwibmFtZVwiOlwidmlvbGV0XCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNGRjAwRkZcIixcbiAgICBcInZnYVwiOnRydWUsXG4gICAgXCJuYW1lXCI6XCJtYWdlbnRhXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNGRjAwRkZcIixcbiAgICBcInZnYVwiOnRydWUsXG4gICAgXCJjc3NcIjp0cnVlLFxuICAgIFwibmFtZVwiOlwiZnVjaHNpYVwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjRUUwMEVFXCIsXG4gICAgXCJuYW1lXCI6XCJtYWdlbnRhIDJcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0NEMDBDRFwiLFxuICAgIFwibmFtZVwiOlwibWFnZW50YSAzXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiM4QjAwOEJcIixcbiAgICBcIm5hbWVcIjpcIm1hZ2VudGEgNFwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjOEIwMDhCXCIsXG4gICAgXCJjc3NcIjp0cnVlLFxuICAgIFwibmFtZVwiOlwiZGFya21hZ2VudGFcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzgwMDA4MFwiLFxuICAgIFwidmdhXCI6dHJ1ZSxcbiAgICBcImNzc1wiOnRydWUsXG4gICAgXCJuYW1lXCI6XCJwdXJwbGVcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0JBNTVEM1wiLFxuICAgIFwiY3NzXCI6dHJ1ZSxcbiAgICBcIm5hbWVcIjpcIm1lZGl1bW9yY2hpZFwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjRTA2NkZGXCIsXG4gICAgXCJuYW1lXCI6XCJtZWRpdW1vcmNoaWQgMVwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjRDE1RkVFXCIsXG4gICAgXCJuYW1lXCI6XCJtZWRpdW1vcmNoaWQgMlwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjQjQ1MkNEXCIsXG4gICAgXCJuYW1lXCI6XCJtZWRpdW1vcmNoaWQgM1wiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjN0EzNzhCXCIsXG4gICAgXCJuYW1lXCI6XCJtZWRpdW1vcmNoaWQgNFwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjOTQwMEQzXCIsXG4gICAgXCJjc3NcIjp0cnVlLFxuICAgIFwibmFtZVwiOlwiZGFya3Zpb2xldFwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjOTkzMkNDXCIsXG4gICAgXCJjc3NcIjp0cnVlLFxuICAgIFwibmFtZVwiOlwiZGFya29yY2hpZFwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjQkYzRUZGXCIsXG4gICAgXCJuYW1lXCI6XCJkYXJrb3JjaGlkIDFcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0IyM0FFRVwiLFxuICAgIFwibmFtZVwiOlwiZGFya29yY2hpZCAyXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiM5QTMyQ0RcIixcbiAgICBcIm5hbWVcIjpcImRhcmtvcmNoaWQgM1wiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjNjgyMjhCXCIsXG4gICAgXCJuYW1lXCI6XCJkYXJrb3JjaGlkIDRcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzRCMDA4MlwiLFxuICAgIFwiY3NzXCI6dHJ1ZSxcbiAgICBcIm5hbWVcIjpcImluZGlnb1wiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjOEEyQkUyXCIsXG4gICAgXCJjc3NcIjp0cnVlLFxuICAgIFwibmFtZVwiOlwiYmx1ZXZpb2xldFwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjOUIzMEZGXCIsXG4gICAgXCJuYW1lXCI6XCJwdXJwbGUgMVwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjOTEyQ0VFXCIsXG4gICAgXCJuYW1lXCI6XCJwdXJwbGUgMlwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjN0QyNkNEXCIsXG4gICAgXCJuYW1lXCI6XCJwdXJwbGUgM1wiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjNTUxQThCXCIsXG4gICAgXCJuYW1lXCI6XCJwdXJwbGUgNFwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjOTM3MERCXCIsXG4gICAgXCJjc3NcIjp0cnVlLFxuICAgIFwibmFtZVwiOlwibWVkaXVtcHVycGxlXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNBQjgyRkZcIixcbiAgICBcIm5hbWVcIjpcIm1lZGl1bXB1cnBsZSAxXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiM5Rjc5RUVcIixcbiAgICBcIm5hbWVcIjpcIm1lZGl1bXB1cnBsZSAyXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiM4OTY4Q0RcIixcbiAgICBcIm5hbWVcIjpcIm1lZGl1bXB1cnBsZSAzXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiM1RDQ3OEJcIixcbiAgICBcIm5hbWVcIjpcIm1lZGl1bXB1cnBsZSA0XCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiM0ODNEOEJcIixcbiAgICBcImNzc1wiOnRydWUsXG4gICAgXCJuYW1lXCI6XCJkYXJrc2xhdGVibHVlXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiM4NDcwRkZcIixcbiAgICBcIm5hbWVcIjpcImxpZ2h0c2xhdGVibHVlXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiM3QjY4RUVcIixcbiAgICBcImNzc1wiOnRydWUsXG4gICAgXCJuYW1lXCI6XCJtZWRpdW1zbGF0ZWJsdWVcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzZBNUFDRFwiLFxuICAgIFwiY3NzXCI6dHJ1ZSxcbiAgICBcIm5hbWVcIjpcInNsYXRlYmx1ZVwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjODM2RkZGXCIsXG4gICAgXCJuYW1lXCI6XCJzbGF0ZWJsdWUgMVwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjN0E2N0VFXCIsXG4gICAgXCJuYW1lXCI6XCJzbGF0ZWJsdWUgMlwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjNjk1OUNEXCIsXG4gICAgXCJuYW1lXCI6XCJzbGF0ZWJsdWUgM1wiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjNDczQzhCXCIsXG4gICAgXCJuYW1lXCI6XCJzbGF0ZWJsdWUgNFwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjRjhGOEZGXCIsXG4gICAgXCJjc3NcIjp0cnVlLFxuICAgIFwibmFtZVwiOlwiZ2hvc3R3aGl0ZVwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjRTZFNkZBXCIsXG4gICAgXCJjc3NcIjp0cnVlLFxuICAgIFwibmFtZVwiOlwibGF2ZW5kZXJcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzAwMDBGRlwiLFxuICAgIFwidmdhXCI6dHJ1ZSxcbiAgICBcImNzc1wiOnRydWUsXG4gICAgXCJuYW1lXCI6XCJibHVlXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiMwMDAwRUVcIixcbiAgICBcIm5hbWVcIjpcImJsdWUgMlwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjMDAwMENEXCIsXG4gICAgXCJuYW1lXCI6XCJibHVlIDNcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzAwMDBDRFwiLFxuICAgIFwiY3NzXCI6dHJ1ZSxcbiAgICBcIm5hbWVcIjpcIm1lZGl1bWJsdWVcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzAwMDA4QlwiLFxuICAgIFwibmFtZVwiOlwiYmx1ZSA0XCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiMwMDAwOEJcIixcbiAgICBcImNzc1wiOnRydWUsXG4gICAgXCJuYW1lXCI6XCJkYXJrYmx1ZVwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjMDAwMDgwXCIsXG4gICAgXCJ2Z2FcIjp0cnVlLFxuICAgIFwiY3NzXCI6dHJ1ZSxcbiAgICBcIm5hbWVcIjpcIm5hdnlcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzE5MTk3MFwiLFxuICAgIFwiY3NzXCI6dHJ1ZSxcbiAgICBcIm5hbWVcIjpcIm1pZG5pZ2h0Ymx1ZVwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjM0Q1OUFCXCIsXG4gICAgXCJuYW1lXCI6XCJjb2JhbHRcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzQxNjlFMVwiLFxuICAgIFwiY3NzXCI6dHJ1ZSxcbiAgICBcIm5hbWVcIjpcInJveWFsYmx1ZVwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjNDg3NkZGXCIsXG4gICAgXCJuYW1lXCI6XCJyb3lhbGJsdWUgMVwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjNDM2RUVFXCIsXG4gICAgXCJuYW1lXCI6XCJyb3lhbGJsdWUgMlwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjM0E1RkNEXCIsXG4gICAgXCJuYW1lXCI6XCJyb3lhbGJsdWUgM1wiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjMjc0MDhCXCIsXG4gICAgXCJuYW1lXCI6XCJyb3lhbGJsdWUgNFwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjNjQ5NUVEXCIsXG4gICAgXCJjc3NcIjp0cnVlLFxuICAgIFwibmFtZVwiOlwiY29ybmZsb3dlcmJsdWVcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0IwQzRERVwiLFxuICAgIFwiY3NzXCI6dHJ1ZSxcbiAgICBcIm5hbWVcIjpcImxpZ2h0c3RlZWxibHVlXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNDQUUxRkZcIixcbiAgICBcIm5hbWVcIjpcImxpZ2h0c3RlZWxibHVlIDFcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0JDRDJFRVwiLFxuICAgIFwibmFtZVwiOlwibGlnaHRzdGVlbGJsdWUgMlwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjQTJCNUNEXCIsXG4gICAgXCJuYW1lXCI6XCJsaWdodHN0ZWVsYmx1ZSAzXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiM2RTdCOEJcIixcbiAgICBcIm5hbWVcIjpcImxpZ2h0c3RlZWxibHVlIDRcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzc3ODg5OVwiLFxuICAgIFwiY3NzXCI6dHJ1ZSxcbiAgICBcIm5hbWVcIjpcImxpZ2h0c2xhdGVncmF5XCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiM3MDgwOTBcIixcbiAgICBcImNzc1wiOnRydWUsXG4gICAgXCJuYW1lXCI6XCJzbGF0ZWdyYXlcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0M2RTJGRlwiLFxuICAgIFwibmFtZVwiOlwic2xhdGVncmF5IDFcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0I5RDNFRVwiLFxuICAgIFwibmFtZVwiOlwic2xhdGVncmF5IDJcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzlGQjZDRFwiLFxuICAgIFwibmFtZVwiOlwic2xhdGVncmF5IDNcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzZDN0I4QlwiLFxuICAgIFwibmFtZVwiOlwic2xhdGVncmF5IDRcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzFFOTBGRlwiLFxuICAgIFwibmFtZVwiOlwiZG9kZ2VyYmx1ZSAxXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiMxRTkwRkZcIixcbiAgICBcImNzc1wiOnRydWUsXG4gICAgXCJuYW1lXCI6XCJkb2RnZXJibHVlXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiMxQzg2RUVcIixcbiAgICBcIm5hbWVcIjpcImRvZGdlcmJsdWUgMlwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjMTg3NENEXCIsXG4gICAgXCJuYW1lXCI6XCJkb2RnZXJibHVlIDNcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzEwNEU4QlwiLFxuICAgIFwibmFtZVwiOlwiZG9kZ2VyYmx1ZSA0XCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNGMEY4RkZcIixcbiAgICBcImNzc1wiOnRydWUsXG4gICAgXCJuYW1lXCI6XCJhbGljZWJsdWVcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzQ2ODJCNFwiLFxuICAgIFwiY3NzXCI6dHJ1ZSxcbiAgICBcIm5hbWVcIjpcInN0ZWVsYmx1ZVwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjNjNCOEZGXCIsXG4gICAgXCJuYW1lXCI6XCJzdGVlbGJsdWUgMVwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjNUNBQ0VFXCIsXG4gICAgXCJuYW1lXCI6XCJzdGVlbGJsdWUgMlwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjNEY5NENEXCIsXG4gICAgXCJuYW1lXCI6XCJzdGVlbGJsdWUgM1wiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjMzY2NDhCXCIsXG4gICAgXCJuYW1lXCI6XCJzdGVlbGJsdWUgNFwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjODdDRUZBXCIsXG4gICAgXCJjc3NcIjp0cnVlLFxuICAgIFwibmFtZVwiOlwibGlnaHRza3libHVlXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNCMEUyRkZcIixcbiAgICBcIm5hbWVcIjpcImxpZ2h0c2t5Ymx1ZSAxXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNBNEQzRUVcIixcbiAgICBcIm5hbWVcIjpcImxpZ2h0c2t5Ymx1ZSAyXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiM4REI2Q0RcIixcbiAgICBcIm5hbWVcIjpcImxpZ2h0c2t5Ymx1ZSAzXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiM2MDdCOEJcIixcbiAgICBcIm5hbWVcIjpcImxpZ2h0c2t5Ymx1ZSA0XCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiM4N0NFRkZcIixcbiAgICBcIm5hbWVcIjpcInNreWJsdWUgMVwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjN0VDMEVFXCIsXG4gICAgXCJuYW1lXCI6XCJza3libHVlIDJcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzZDQTZDRFwiLFxuICAgIFwibmFtZVwiOlwic2t5Ymx1ZSAzXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiM0QTcwOEJcIixcbiAgICBcIm5hbWVcIjpcInNreWJsdWUgNFwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjODdDRUVCXCIsXG4gICAgXCJjc3NcIjp0cnVlLFxuICAgIFwibmFtZVwiOlwic2t5Ymx1ZVwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjMDBCRkZGXCIsXG4gICAgXCJuYW1lXCI6XCJkZWVwc2t5Ymx1ZSAxXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiMwMEJGRkZcIixcbiAgICBcImNzc1wiOnRydWUsXG4gICAgXCJuYW1lXCI6XCJkZWVwc2t5Ymx1ZVwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjMDBCMkVFXCIsXG4gICAgXCJuYW1lXCI6XCJkZWVwc2t5Ymx1ZSAyXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiMwMDlBQ0RcIixcbiAgICBcIm5hbWVcIjpcImRlZXBza3libHVlIDNcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzAwNjg4QlwiLFxuICAgIFwibmFtZVwiOlwiZGVlcHNreWJsdWUgNFwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjMzNBMUM5XCIsXG4gICAgXCJuYW1lXCI6XCJwZWFjb2NrXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNBREQ4RTZcIixcbiAgICBcImNzc1wiOnRydWUsXG4gICAgXCJuYW1lXCI6XCJsaWdodGJsdWVcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0JGRUZGRlwiLFxuICAgIFwibmFtZVwiOlwibGlnaHRibHVlIDFcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0IyREZFRVwiLFxuICAgIFwibmFtZVwiOlwibGlnaHRibHVlIDJcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzlBQzBDRFwiLFxuICAgIFwibmFtZVwiOlwibGlnaHRibHVlIDNcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzY4ODM4QlwiLFxuICAgIFwibmFtZVwiOlwibGlnaHRibHVlIDRcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0IwRTBFNlwiLFxuICAgIFwiY3NzXCI6dHJ1ZSxcbiAgICBcIm5hbWVcIjpcInBvd2RlcmJsdWVcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzk4RjVGRlwiLFxuICAgIFwibmFtZVwiOlwiY2FkZXRibHVlIDFcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzhFRTVFRVwiLFxuICAgIFwibmFtZVwiOlwiY2FkZXRibHVlIDJcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzdBQzVDRFwiLFxuICAgIFwibmFtZVwiOlwiY2FkZXRibHVlIDNcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzUzODY4QlwiLFxuICAgIFwibmFtZVwiOlwiY2FkZXRibHVlIDRcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzAwRjVGRlwiLFxuICAgIFwibmFtZVwiOlwidHVycXVvaXNlIDFcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzAwRTVFRVwiLFxuICAgIFwibmFtZVwiOlwidHVycXVvaXNlIDJcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzAwQzVDRFwiLFxuICAgIFwibmFtZVwiOlwidHVycXVvaXNlIDNcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzAwODY4QlwiLFxuICAgIFwibmFtZVwiOlwidHVycXVvaXNlIDRcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzVGOUVBMFwiLFxuICAgIFwiY3NzXCI6dHJ1ZSxcbiAgICBcIm5hbWVcIjpcImNhZGV0Ymx1ZVwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjMDBDRUQxXCIsXG4gICAgXCJjc3NcIjp0cnVlLFxuICAgIFwibmFtZVwiOlwiZGFya3R1cnF1b2lzZVwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjRjBGRkZGXCIsXG4gICAgXCJuYW1lXCI6XCJhenVyZSAxXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNGMEZGRkZcIixcbiAgICBcImNzc1wiOnRydWUsXG4gICAgXCJuYW1lXCI6XCJhenVyZVwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjRTBFRUVFXCIsXG4gICAgXCJuYW1lXCI6XCJhenVyZSAyXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNDMUNEQ0RcIixcbiAgICBcIm5hbWVcIjpcImF6dXJlIDNcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzgzOEI4QlwiLFxuICAgIFwibmFtZVwiOlwiYXp1cmUgNFwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjRTBGRkZGXCIsXG4gICAgXCJuYW1lXCI6XCJsaWdodGN5YW4gMVwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjRTBGRkZGXCIsXG4gICAgXCJjc3NcIjp0cnVlLFxuICAgIFwibmFtZVwiOlwibGlnaHRjeWFuXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNEMUVFRUVcIixcbiAgICBcIm5hbWVcIjpcImxpZ2h0Y3lhbiAyXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNCNENEQ0RcIixcbiAgICBcIm5hbWVcIjpcImxpZ2h0Y3lhbiAzXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiM3QThCOEJcIixcbiAgICBcIm5hbWVcIjpcImxpZ2h0Y3lhbiA0XCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNCQkZGRkZcIixcbiAgICBcIm5hbWVcIjpcInBhbGV0dXJxdW9pc2UgMVwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjQUVFRUVFXCIsXG4gICAgXCJuYW1lXCI6XCJwYWxldHVycXVvaXNlIDJcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0FFRUVFRVwiLFxuICAgIFwiY3NzXCI6dHJ1ZSxcbiAgICBcIm5hbWVcIjpcInBhbGV0dXJxdW9pc2VcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzk2Q0RDRFwiLFxuICAgIFwibmFtZVwiOlwicGFsZXR1cnF1b2lzZSAzXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiM2NjhCOEJcIixcbiAgICBcIm5hbWVcIjpcInBhbGV0dXJxdW9pc2UgNFwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjMkY0RjRGXCIsXG4gICAgXCJjc3NcIjp0cnVlLFxuICAgIFwibmFtZVwiOlwiZGFya3NsYXRlZ3JheVwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjOTdGRkZGXCIsXG4gICAgXCJuYW1lXCI6XCJkYXJrc2xhdGVncmF5IDFcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzhERUVFRVwiLFxuICAgIFwibmFtZVwiOlwiZGFya3NsYXRlZ3JheSAyXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiM3OUNEQ0RcIixcbiAgICBcIm5hbWVcIjpcImRhcmtzbGF0ZWdyYXkgM1wiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjNTI4QjhCXCIsXG4gICAgXCJuYW1lXCI6XCJkYXJrc2xhdGVncmF5IDRcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzAwRkZGRlwiLFxuICAgIFwibmFtZVwiOlwiY3lhblwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjMDBGRkZGXCIsXG4gICAgXCJjc3NcIjp0cnVlLFxuICAgIFwibmFtZVwiOlwiYXF1YVwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjMDBFRUVFXCIsXG4gICAgXCJuYW1lXCI6XCJjeWFuIDJcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzAwQ0RDRFwiLFxuICAgIFwibmFtZVwiOlwiY3lhbiAzXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiMwMDhCOEJcIixcbiAgICBcIm5hbWVcIjpcImN5YW4gNFwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjMDA4QjhCXCIsXG4gICAgXCJjc3NcIjp0cnVlLFxuICAgIFwibmFtZVwiOlwiZGFya2N5YW5cIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzAwODA4MFwiLFxuICAgIFwidmdhXCI6dHJ1ZSxcbiAgICBcImNzc1wiOnRydWUsXG4gICAgXCJuYW1lXCI6XCJ0ZWFsXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiM0OEQxQ0NcIixcbiAgICBcImNzc1wiOnRydWUsXG4gICAgXCJuYW1lXCI6XCJtZWRpdW10dXJxdW9pc2VcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzIwQjJBQVwiLFxuICAgIFwiY3NzXCI6dHJ1ZSxcbiAgICBcIm5hbWVcIjpcImxpZ2h0c2VhZ3JlZW5cIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzAzQTg5RVwiLFxuICAgIFwibmFtZVwiOlwibWFuZ2FuZXNlYmx1ZVwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjNDBFMEQwXCIsXG4gICAgXCJjc3NcIjp0cnVlLFxuICAgIFwibmFtZVwiOlwidHVycXVvaXNlXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiM4MDhBODdcIixcbiAgICBcIm5hbWVcIjpcImNvbGRncmV5XCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiMwMEM3OENcIixcbiAgICBcIm5hbWVcIjpcInR1cnF1b2lzZWJsdWVcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzdGRkZENFwiLFxuICAgIFwibmFtZVwiOlwiYXF1YW1hcmluZSAxXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiM3RkZGRDRcIixcbiAgICBcImNzc1wiOnRydWUsXG4gICAgXCJuYW1lXCI6XCJhcXVhbWFyaW5lXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiM3NkVFQzZcIixcbiAgICBcIm5hbWVcIjpcImFxdWFtYXJpbmUgMlwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjNjZDREFBXCIsXG4gICAgXCJuYW1lXCI6XCJhcXVhbWFyaW5lIDNcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzY2Q0RBQVwiLFxuICAgIFwiY3NzXCI6dHJ1ZSxcbiAgICBcIm5hbWVcIjpcIm1lZGl1bWFxdWFtYXJpbmVcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzQ1OEI3NFwiLFxuICAgIFwibmFtZVwiOlwiYXF1YW1hcmluZSA0XCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiMwMEZBOUFcIixcbiAgICBcImNzc1wiOnRydWUsXG4gICAgXCJuYW1lXCI6XCJtZWRpdW1zcHJpbmdncmVlblwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjRjVGRkZBXCIsXG4gICAgXCJjc3NcIjp0cnVlLFxuICAgIFwibmFtZVwiOlwibWludGNyZWFtXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiMwMEZGN0ZcIixcbiAgICBcImNzc1wiOnRydWUsXG4gICAgXCJuYW1lXCI6XCJzcHJpbmdncmVlblwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjMDBFRTc2XCIsXG4gICAgXCJuYW1lXCI6XCJzcHJpbmdncmVlbiAxXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiMwMENENjZcIixcbiAgICBcIm5hbWVcIjpcInNwcmluZ2dyZWVuIDJcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzAwOEI0NVwiLFxuICAgIFwibmFtZVwiOlwic3ByaW5nZ3JlZW4gM1wiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjM0NCMzcxXCIsXG4gICAgXCJjc3NcIjp0cnVlLFxuICAgIFwibmFtZVwiOlwibWVkaXVtc2VhZ3JlZW5cIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzU0RkY5RlwiLFxuICAgIFwibmFtZVwiOlwic2VhZ3JlZW4gMVwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjNEVFRTk0XCIsXG4gICAgXCJuYW1lXCI6XCJzZWFncmVlbiAyXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiM0M0NEODBcIixcbiAgICBcIm5hbWVcIjpcInNlYWdyZWVuIDNcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzJFOEI1N1wiLFxuICAgIFwibmFtZVwiOlwic2VhZ3JlZW4gNFwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjMkU4QjU3XCIsXG4gICAgXCJjc3NcIjp0cnVlLFxuICAgIFwibmFtZVwiOlwic2VhZ3JlZW5cIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzAwQzk1N1wiLFxuICAgIFwibmFtZVwiOlwiZW1lcmFsZGdyZWVuXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNCREZDQzlcIixcbiAgICBcIm5hbWVcIjpcIm1pbnRcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzNEOTE0MFwiLFxuICAgIFwibmFtZVwiOlwiY29iYWx0Z3JlZW5cIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0YwRkZGMFwiLFxuICAgIFwibmFtZVwiOlwiaG9uZXlkZXcgMVwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjRjBGRkYwXCIsXG4gICAgXCJjc3NcIjp0cnVlLFxuICAgIFwibmFtZVwiOlwiaG9uZXlkZXdcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0UwRUVFMFwiLFxuICAgIFwibmFtZVwiOlwiaG9uZXlkZXcgMlwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjQzFDREMxXCIsXG4gICAgXCJuYW1lXCI6XCJob25leWRldyAzXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiM4MzhCODNcIixcbiAgICBcIm5hbWVcIjpcImhvbmV5ZGV3IDRcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzhGQkM4RlwiLFxuICAgIFwiY3NzXCI6dHJ1ZSxcbiAgICBcIm5hbWVcIjpcImRhcmtzZWFncmVlblwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjQzFGRkMxXCIsXG4gICAgXCJuYW1lXCI6XCJkYXJrc2VhZ3JlZW4gMVwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjQjRFRUI0XCIsXG4gICAgXCJuYW1lXCI6XCJkYXJrc2VhZ3JlZW4gMlwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjOUJDRDlCXCIsXG4gICAgXCJuYW1lXCI6XCJkYXJrc2VhZ3JlZW4gM1wiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjNjk4QjY5XCIsXG4gICAgXCJuYW1lXCI6XCJkYXJrc2VhZ3JlZW4gNFwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjOThGQjk4XCIsXG4gICAgXCJjc3NcIjp0cnVlLFxuICAgIFwibmFtZVwiOlwicGFsZWdyZWVuXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiM5QUZGOUFcIixcbiAgICBcIm5hbWVcIjpcInBhbGVncmVlbiAxXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiM5MEVFOTBcIixcbiAgICBcIm5hbWVcIjpcInBhbGVncmVlbiAyXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiM5MEVFOTBcIixcbiAgICBcImNzc1wiOnRydWUsXG4gICAgXCJuYW1lXCI6XCJsaWdodGdyZWVuXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiM3Q0NEN0NcIixcbiAgICBcIm5hbWVcIjpcInBhbGVncmVlbiAzXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiM1NDhCNTRcIixcbiAgICBcIm5hbWVcIjpcInBhbGVncmVlbiA0XCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiMzMkNEMzJcIixcbiAgICBcImNzc1wiOnRydWUsXG4gICAgXCJuYW1lXCI6XCJsaW1lZ3JlZW5cIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzIyOEIyMlwiLFxuICAgIFwiY3NzXCI6dHJ1ZSxcbiAgICBcIm5hbWVcIjpcImZvcmVzdGdyZWVuXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiMwMEZGMDBcIixcbiAgICBcInZnYVwiOnRydWUsXG4gICAgXCJuYW1lXCI6XCJncmVlbiAxXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiMwMEZGMDBcIixcbiAgICBcInZnYVwiOnRydWUsXG4gICAgXCJjc3NcIjp0cnVlLFxuICAgIFwibmFtZVwiOlwibGltZVwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjMDBFRTAwXCIsXG4gICAgXCJuYW1lXCI6XCJncmVlbiAyXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiMwMENEMDBcIixcbiAgICBcIm5hbWVcIjpcImdyZWVuIDNcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzAwOEIwMFwiLFxuICAgIFwibmFtZVwiOlwiZ3JlZW4gNFwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjMDA4MDAwXCIsXG4gICAgXCJ2Z2FcIjp0cnVlLFxuICAgIFwiY3NzXCI6dHJ1ZSxcbiAgICBcIm5hbWVcIjpcImdyZWVuXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiMwMDY0MDBcIixcbiAgICBcImNzc1wiOnRydWUsXG4gICAgXCJuYW1lXCI6XCJkYXJrZ3JlZW5cIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzMwODAxNFwiLFxuICAgIFwibmFtZVwiOlwic2FwZ3JlZW5cIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzdDRkMwMFwiLFxuICAgIFwiY3NzXCI6dHJ1ZSxcbiAgICBcIm5hbWVcIjpcImxhd25ncmVlblwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjN0ZGRjAwXCIsXG4gICAgXCJuYW1lXCI6XCJjaGFydHJldXNlIDFcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzdGRkYwMFwiLFxuICAgIFwiY3NzXCI6dHJ1ZSxcbiAgICBcIm5hbWVcIjpcImNoYXJ0cmV1c2VcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzc2RUUwMFwiLFxuICAgIFwibmFtZVwiOlwiY2hhcnRyZXVzZSAyXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiM2NkNEMDBcIixcbiAgICBcIm5hbWVcIjpcImNoYXJ0cmV1c2UgM1wiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjNDU4QjAwXCIsXG4gICAgXCJuYW1lXCI6XCJjaGFydHJldXNlIDRcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0FERkYyRlwiLFxuICAgIFwiY3NzXCI6dHJ1ZSxcbiAgICBcIm5hbWVcIjpcImdyZWVueWVsbG93XCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNDQUZGNzBcIixcbiAgICBcIm5hbWVcIjpcImRhcmtvbGl2ZWdyZWVuIDFcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0JDRUU2OFwiLFxuICAgIFwibmFtZVwiOlwiZGFya29saXZlZ3JlZW4gMlwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjQTJDRDVBXCIsXG4gICAgXCJuYW1lXCI6XCJkYXJrb2xpdmVncmVlbiAzXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiM2RThCM0RcIixcbiAgICBcIm5hbWVcIjpcImRhcmtvbGl2ZWdyZWVuIDRcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzU1NkIyRlwiLFxuICAgIFwiY3NzXCI6dHJ1ZSxcbiAgICBcIm5hbWVcIjpcImRhcmtvbGl2ZWdyZWVuXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiM2QjhFMjNcIixcbiAgICBcImNzc1wiOnRydWUsXG4gICAgXCJuYW1lXCI6XCJvbGl2ZWRyYWJcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0MwRkYzRVwiLFxuICAgIFwibmFtZVwiOlwib2xpdmVkcmFiIDFcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0IzRUUzQVwiLFxuICAgIFwibmFtZVwiOlwib2xpdmVkcmFiIDJcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzlBQ0QzMlwiLFxuICAgIFwibmFtZVwiOlwib2xpdmVkcmFiIDNcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzlBQ0QzMlwiLFxuICAgIFwiY3NzXCI6dHJ1ZSxcbiAgICBcIm5hbWVcIjpcInllbGxvd2dyZWVuXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiM2OThCMjJcIixcbiAgICBcIm5hbWVcIjpcIm9saXZlZHJhYiA0XCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNGRkZGRjBcIixcbiAgICBcIm5hbWVcIjpcIml2b3J5IDFcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0ZGRkZGMFwiLFxuICAgIFwiY3NzXCI6dHJ1ZSxcbiAgICBcIm5hbWVcIjpcIml2b3J5XCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNFRUVFRTBcIixcbiAgICBcIm5hbWVcIjpcIml2b3J5IDJcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0NEQ0RDMVwiLFxuICAgIFwibmFtZVwiOlwiaXZvcnkgM1wiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjOEI4QjgzXCIsXG4gICAgXCJuYW1lXCI6XCJpdm9yeSA0XCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNGNUY1RENcIixcbiAgICBcImNzc1wiOnRydWUsXG4gICAgXCJuYW1lXCI6XCJiZWlnZVwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjRkZGRkUwXCIsXG4gICAgXCJuYW1lXCI6XCJsaWdodHllbGxvdyAxXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNGRkZGRTBcIixcbiAgICBcImNzc1wiOnRydWUsXG4gICAgXCJuYW1lXCI6XCJsaWdodHllbGxvd1wiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjRUVFRUQxXCIsXG4gICAgXCJuYW1lXCI6XCJsaWdodHllbGxvdyAyXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNDRENEQjRcIixcbiAgICBcIm5hbWVcIjpcImxpZ2h0eWVsbG93IDNcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzhCOEI3QVwiLFxuICAgIFwibmFtZVwiOlwibGlnaHR5ZWxsb3cgNFwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjRkFGQUQyXCIsXG4gICAgXCJjc3NcIjp0cnVlLFxuICAgIFwibmFtZVwiOlwibGlnaHRnb2xkZW5yb2R5ZWxsb3dcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0ZGRkYwMFwiLFxuICAgIFwidmdhXCI6dHJ1ZSxcbiAgICBcIm5hbWVcIjpcInllbGxvdyAxXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNGRkZGMDBcIixcbiAgICBcInZnYVwiOnRydWUsXG4gICAgXCJjc3NcIjp0cnVlLFxuICAgIFwibmFtZVwiOlwieWVsbG93XCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNFRUVFMDBcIixcbiAgICBcIm5hbWVcIjpcInllbGxvdyAyXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNDRENEMDBcIixcbiAgICBcIm5hbWVcIjpcInllbGxvdyAzXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiM4QjhCMDBcIixcbiAgICBcIm5hbWVcIjpcInllbGxvdyA0XCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiM4MDgwNjlcIixcbiAgICBcIm5hbWVcIjpcIndhcm1ncmV5XCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiM4MDgwMDBcIixcbiAgICBcInZnYVwiOnRydWUsXG4gICAgXCJjc3NcIjp0cnVlLFxuICAgIFwibmFtZVwiOlwib2xpdmVcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0JEQjc2QlwiLFxuICAgIFwiY3NzXCI6dHJ1ZSxcbiAgICBcIm5hbWVcIjpcImRhcmtraGFraVwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjRkZGNjhGXCIsXG4gICAgXCJuYW1lXCI6XCJraGFraSAxXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNFRUU2ODVcIixcbiAgICBcIm5hbWVcIjpcImtoYWtpIDJcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0NEQzY3M1wiLFxuICAgIFwibmFtZVwiOlwia2hha2kgM1wiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjOEI4NjRFXCIsXG4gICAgXCJuYW1lXCI6XCJraGFraSA0XCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNGMEU2OENcIixcbiAgICBcImNzc1wiOnRydWUsXG4gICAgXCJuYW1lXCI6XCJraGFraVwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjRUVFOEFBXCIsXG4gICAgXCJjc3NcIjp0cnVlLFxuICAgIFwibmFtZVwiOlwicGFsZWdvbGRlbnJvZFwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjRkZGQUNEXCIsXG4gICAgXCJuYW1lXCI6XCJsZW1vbmNoaWZmb24gMVwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjRkZGQUNEXCIsXG4gICAgXCJjc3NcIjp0cnVlLFxuICAgIFwibmFtZVwiOlwibGVtb25jaGlmZm9uXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNFRUU5QkZcIixcbiAgICBcIm5hbWVcIjpcImxlbW9uY2hpZmZvbiAyXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNDREM5QTVcIixcbiAgICBcIm5hbWVcIjpcImxlbW9uY2hpZmZvbiAzXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiM4Qjg5NzBcIixcbiAgICBcIm5hbWVcIjpcImxlbW9uY2hpZmZvbiA0XCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNGRkVDOEJcIixcbiAgICBcIm5hbWVcIjpcImxpZ2h0Z29sZGVucm9kIDFcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0VFREM4MlwiLFxuICAgIFwibmFtZVwiOlwibGlnaHRnb2xkZW5yb2QgMlwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjQ0RCRTcwXCIsXG4gICAgXCJuYW1lXCI6XCJsaWdodGdvbGRlbnJvZCAzXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiM4QjgxNENcIixcbiAgICBcIm5hbWVcIjpcImxpZ2h0Z29sZGVucm9kIDRcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0UzQ0Y1N1wiLFxuICAgIFwibmFtZVwiOlwiYmFuYW5hXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNGRkQ3MDBcIixcbiAgICBcIm5hbWVcIjpcImdvbGQgMVwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjRkZENzAwXCIsXG4gICAgXCJjc3NcIjp0cnVlLFxuICAgIFwibmFtZVwiOlwiZ29sZFwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjRUVDOTAwXCIsXG4gICAgXCJuYW1lXCI6XCJnb2xkIDJcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0NEQUQwMFwiLFxuICAgIFwibmFtZVwiOlwiZ29sZCAzXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiM4Qjc1MDBcIixcbiAgICBcIm5hbWVcIjpcImdvbGQgNFwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjRkZGOERDXCIsXG4gICAgXCJuYW1lXCI6XCJjb3Juc2lsayAxXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNGRkY4RENcIixcbiAgICBcImNzc1wiOnRydWUsXG4gICAgXCJuYW1lXCI6XCJjb3Juc2lsa1wiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjRUVFOENEXCIsXG4gICAgXCJuYW1lXCI6XCJjb3Juc2lsayAyXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNDREM4QjFcIixcbiAgICBcIm5hbWVcIjpcImNvcm5zaWxrIDNcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzhCODg3OFwiLFxuICAgIFwibmFtZVwiOlwiY29ybnNpbGsgNFwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjREFBNTIwXCIsXG4gICAgXCJjc3NcIjp0cnVlLFxuICAgIFwibmFtZVwiOlwiZ29sZGVucm9kXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNGRkMxMjVcIixcbiAgICBcIm5hbWVcIjpcImdvbGRlbnJvZCAxXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNFRUI0MjJcIixcbiAgICBcIm5hbWVcIjpcImdvbGRlbnJvZCAyXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNDRDlCMURcIixcbiAgICBcIm5hbWVcIjpcImdvbGRlbnJvZCAzXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiM4QjY5MTRcIixcbiAgICBcIm5hbWVcIjpcImdvbGRlbnJvZCA0XCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNCODg2MEJcIixcbiAgICBcImNzc1wiOnRydWUsXG4gICAgXCJuYW1lXCI6XCJkYXJrZ29sZGVucm9kXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNGRkI5MEZcIixcbiAgICBcIm5hbWVcIjpcImRhcmtnb2xkZW5yb2QgMVwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjRUVBRDBFXCIsXG4gICAgXCJuYW1lXCI6XCJkYXJrZ29sZGVucm9kIDJcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0NEOTUwQ1wiLFxuICAgIFwibmFtZVwiOlwiZGFya2dvbGRlbnJvZCAzXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiM4QjY1MDhcIixcbiAgICBcIm5hbWVcIjpcImRhcmtnb2xkZW5yb2QgNFwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjRkZBNTAwXCIsXG4gICAgXCJuYW1lXCI6XCJvcmFuZ2UgMVwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjRkY4MDAwXCIsXG4gICAgXCJjc3NcIjp0cnVlLFxuICAgIFwibmFtZVwiOlwib3JhbmdlXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNFRTlBMDBcIixcbiAgICBcIm5hbWVcIjpcIm9yYW5nZSAyXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNDRDg1MDBcIixcbiAgICBcIm5hbWVcIjpcIm9yYW5nZSAzXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiM4QjVBMDBcIixcbiAgICBcIm5hbWVcIjpcIm9yYW5nZSA0XCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNGRkZBRjBcIixcbiAgICBcImNzc1wiOnRydWUsXG4gICAgXCJuYW1lXCI6XCJmbG9yYWx3aGl0ZVwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjRkRGNUU2XCIsXG4gICAgXCJjc3NcIjp0cnVlLFxuICAgIFwibmFtZVwiOlwib2xkbGFjZVwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjRjVERUIzXCIsXG4gICAgXCJjc3NcIjp0cnVlLFxuICAgIFwibmFtZVwiOlwid2hlYXRcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0ZGRTdCQVwiLFxuICAgIFwibmFtZVwiOlwid2hlYXQgMVwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjRUVEOEFFXCIsXG4gICAgXCJuYW1lXCI6XCJ3aGVhdCAyXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNDREJBOTZcIixcbiAgICBcIm5hbWVcIjpcIndoZWF0IDNcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzhCN0U2NlwiLFxuICAgIFwibmFtZVwiOlwid2hlYXQgNFwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjRkZFNEI1XCIsXG4gICAgXCJjc3NcIjp0cnVlLFxuICAgIFwibmFtZVwiOlwibW9jY2FzaW5cIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0ZGRUZENVwiLFxuICAgIFwiY3NzXCI6dHJ1ZSxcbiAgICBcIm5hbWVcIjpcInBhcGF5YXdoaXBcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0ZGRUJDRFwiLFxuICAgIFwiY3NzXCI6dHJ1ZSxcbiAgICBcIm5hbWVcIjpcImJsYW5jaGVkYWxtb25kXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNGRkRFQURcIixcbiAgICBcIm5hbWVcIjpcIm5hdmFqb3doaXRlIDFcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0ZGREVBRFwiLFxuICAgIFwiY3NzXCI6dHJ1ZSxcbiAgICBcIm5hbWVcIjpcIm5hdmFqb3doaXRlXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNFRUNGQTFcIixcbiAgICBcIm5hbWVcIjpcIm5hdmFqb3doaXRlIDJcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0NEQjM4QlwiLFxuICAgIFwibmFtZVwiOlwibmF2YWpvd2hpdGUgM1wiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjOEI3OTVFXCIsXG4gICAgXCJuYW1lXCI6XCJuYXZham93aGl0ZSA0XCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNGQ0U2QzlcIixcbiAgICBcIm5hbWVcIjpcImVnZ3NoZWxsXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNEMkI0OENcIixcbiAgICBcImNzc1wiOnRydWUsXG4gICAgXCJuYW1lXCI6XCJ0YW5cIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzlDNjYxRlwiLFxuICAgIFwibmFtZVwiOlwiYnJpY2tcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0ZGOTkxMlwiLFxuICAgIFwibmFtZVwiOlwiY2FkbWl1bXllbGxvd1wiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjRkFFQkQ3XCIsXG4gICAgXCJjc3NcIjp0cnVlLFxuICAgIFwibmFtZVwiOlwiYW50aXF1ZXdoaXRlXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNGRkVGREJcIixcbiAgICBcIm5hbWVcIjpcImFudGlxdWV3aGl0ZSAxXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNFRURGQ0NcIixcbiAgICBcIm5hbWVcIjpcImFudGlxdWV3aGl0ZSAyXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNDREMwQjBcIixcbiAgICBcIm5hbWVcIjpcImFudGlxdWV3aGl0ZSAzXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiM4QjgzNzhcIixcbiAgICBcIm5hbWVcIjpcImFudGlxdWV3aGl0ZSA0XCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNERUI4ODdcIixcbiAgICBcImNzc1wiOnRydWUsXG4gICAgXCJuYW1lXCI6XCJidXJseXdvb2RcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0ZGRDM5QlwiLFxuICAgIFwibmFtZVwiOlwiYnVybHl3b29kIDFcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0VFQzU5MVwiLFxuICAgIFwibmFtZVwiOlwiYnVybHl3b29kIDJcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0NEQUE3RFwiLFxuICAgIFwibmFtZVwiOlwiYnVybHl3b29kIDNcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzhCNzM1NVwiLFxuICAgIFwibmFtZVwiOlwiYnVybHl3b29kIDRcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0ZGRTRDNFwiLFxuICAgIFwibmFtZVwiOlwiYmlzcXVlIDFcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0ZGRTRDNFwiLFxuICAgIFwiY3NzXCI6dHJ1ZSxcbiAgICBcIm5hbWVcIjpcImJpc3F1ZVwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjRUVENUI3XCIsXG4gICAgXCJuYW1lXCI6XCJiaXNxdWUgMlwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjQ0RCNzlFXCIsXG4gICAgXCJuYW1lXCI6XCJiaXNxdWUgM1wiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjOEI3RDZCXCIsXG4gICAgXCJuYW1lXCI6XCJiaXNxdWUgNFwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjRTNBODY5XCIsXG4gICAgXCJuYW1lXCI6XCJtZWxvblwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjRUQ5MTIxXCIsXG4gICAgXCJuYW1lXCI6XCJjYXJyb3RcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0ZGOEMwMFwiLFxuICAgIFwiY3NzXCI6dHJ1ZSxcbiAgICBcIm5hbWVcIjpcImRhcmtvcmFuZ2VcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0ZGN0YwMFwiLFxuICAgIFwibmFtZVwiOlwiZGFya29yYW5nZSAxXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNFRTc2MDBcIixcbiAgICBcIm5hbWVcIjpcImRhcmtvcmFuZ2UgMlwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjQ0Q2NjAwXCIsXG4gICAgXCJuYW1lXCI6XCJkYXJrb3JhbmdlIDNcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzhCNDUwMFwiLFxuICAgIFwibmFtZVwiOlwiZGFya29yYW5nZSA0XCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNGRkE1NEZcIixcbiAgICBcIm5hbWVcIjpcInRhbiAxXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNFRTlBNDlcIixcbiAgICBcIm5hbWVcIjpcInRhbiAyXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNDRDg1M0ZcIixcbiAgICBcIm5hbWVcIjpcInRhbiAzXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNDRDg1M0ZcIixcbiAgICBcImNzc1wiOnRydWUsXG4gICAgXCJuYW1lXCI6XCJwZXJ1XCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiM4QjVBMkJcIixcbiAgICBcIm5hbWVcIjpcInRhbiA0XCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNGQUYwRTZcIixcbiAgICBcImNzc1wiOnRydWUsXG4gICAgXCJuYW1lXCI6XCJsaW5lblwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjRkZEQUI5XCIsXG4gICAgXCJuYW1lXCI6XCJwZWFjaHB1ZmYgMVwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjRkZEQUI5XCIsXG4gICAgXCJjc3NcIjp0cnVlLFxuICAgIFwibmFtZVwiOlwicGVhY2hwdWZmXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNFRUNCQURcIixcbiAgICBcIm5hbWVcIjpcInBlYWNocHVmZiAyXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNDREFGOTVcIixcbiAgICBcIm5hbWVcIjpcInBlYWNocHVmZiAzXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiM4Qjc3NjVcIixcbiAgICBcIm5hbWVcIjpcInBlYWNocHVmZiA0XCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNGRkY1RUVcIixcbiAgICBcIm5hbWVcIjpcInNlYXNoZWxsIDFcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0ZGRjVFRVwiLFxuICAgIFwiY3NzXCI6dHJ1ZSxcbiAgICBcIm5hbWVcIjpcInNlYXNoZWxsXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNFRUU1REVcIixcbiAgICBcIm5hbWVcIjpcInNlYXNoZWxsIDJcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0NEQzVCRlwiLFxuICAgIFwibmFtZVwiOlwic2Vhc2hlbGwgM1wiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjOEI4NjgyXCIsXG4gICAgXCJuYW1lXCI6XCJzZWFzaGVsbCA0XCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNGNEE0NjBcIixcbiAgICBcImNzc1wiOnRydWUsXG4gICAgXCJuYW1lXCI6XCJzYW5keWJyb3duXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNDNzYxMTRcIixcbiAgICBcIm5hbWVcIjpcInJhd3NpZW5uYVwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjRDI2OTFFXCIsXG4gICAgXCJjc3NcIjp0cnVlLFxuICAgIFwibmFtZVwiOlwiY2hvY29sYXRlXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNGRjdGMjRcIixcbiAgICBcIm5hbWVcIjpcImNob2NvbGF0ZSAxXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNFRTc2MjFcIixcbiAgICBcIm5hbWVcIjpcImNob2NvbGF0ZSAyXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNDRDY2MURcIixcbiAgICBcIm5hbWVcIjpcImNob2NvbGF0ZSAzXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiM4QjQ1MTNcIixcbiAgICBcIm5hbWVcIjpcImNob2NvbGF0ZSA0XCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiM4QjQ1MTNcIixcbiAgICBcImNzc1wiOnRydWUsXG4gICAgXCJuYW1lXCI6XCJzYWRkbGVicm93blwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjMjkyNDIxXCIsXG4gICAgXCJuYW1lXCI6XCJpdm9yeWJsYWNrXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNGRjdENDBcIixcbiAgICBcIm5hbWVcIjpcImZsZXNoXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNGRjYxMDNcIixcbiAgICBcIm5hbWVcIjpcImNhZG1pdW1vcmFuZ2VcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzhBMzYwRlwiLFxuICAgIFwibmFtZVwiOlwiYnVybnRzaWVubmFcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0EwNTIyRFwiLFxuICAgIFwiY3NzXCI6dHJ1ZSxcbiAgICBcIm5hbWVcIjpcInNpZW5uYVwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjRkY4MjQ3XCIsXG4gICAgXCJuYW1lXCI6XCJzaWVubmEgMVwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjRUU3OTQyXCIsXG4gICAgXCJuYW1lXCI6XCJzaWVubmEgMlwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjQ0Q2ODM5XCIsXG4gICAgXCJuYW1lXCI6XCJzaWVubmEgM1wiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjOEI0NzI2XCIsXG4gICAgXCJuYW1lXCI6XCJzaWVubmEgNFwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjRkZBMDdBXCIsXG4gICAgXCJuYW1lXCI6XCJsaWdodHNhbG1vbiAxXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNGRkEwN0FcIixcbiAgICBcImNzc1wiOnRydWUsXG4gICAgXCJuYW1lXCI6XCJsaWdodHNhbG1vblwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjRUU5NTcyXCIsXG4gICAgXCJuYW1lXCI6XCJsaWdodHNhbG1vbiAyXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNDRDgxNjJcIixcbiAgICBcIm5hbWVcIjpcImxpZ2h0c2FsbW9uIDNcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzhCNTc0MlwiLFxuICAgIFwibmFtZVwiOlwibGlnaHRzYWxtb24gNFwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjRkY3RjUwXCIsXG4gICAgXCJjc3NcIjp0cnVlLFxuICAgIFwibmFtZVwiOlwiY29yYWxcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0ZGNDUwMFwiLFxuICAgIFwibmFtZVwiOlwib3JhbmdlcmVkIDFcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0ZGNDUwMFwiLFxuICAgIFwiY3NzXCI6dHJ1ZSxcbiAgICBcIm5hbWVcIjpcIm9yYW5nZXJlZFwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjRUU0MDAwXCIsXG4gICAgXCJuYW1lXCI6XCJvcmFuZ2VyZWQgMlwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjQ0QzNzAwXCIsXG4gICAgXCJuYW1lXCI6XCJvcmFuZ2VyZWQgM1wiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjOEIyNTAwXCIsXG4gICAgXCJuYW1lXCI6XCJvcmFuZ2VyZWQgNFwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjNUUyNjEyXCIsXG4gICAgXCJuYW1lXCI6XCJzZXBpYVwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjRTk5NjdBXCIsXG4gICAgXCJjc3NcIjp0cnVlLFxuICAgIFwibmFtZVwiOlwiZGFya3NhbG1vblwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjRkY4QzY5XCIsXG4gICAgXCJuYW1lXCI6XCJzYWxtb24gMVwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjRUU4MjYyXCIsXG4gICAgXCJuYW1lXCI6XCJzYWxtb24gMlwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjQ0Q3MDU0XCIsXG4gICAgXCJuYW1lXCI6XCJzYWxtb24gM1wiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjOEI0QzM5XCIsXG4gICAgXCJuYW1lXCI6XCJzYWxtb24gNFwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjRkY3MjU2XCIsXG4gICAgXCJuYW1lXCI6XCJjb3JhbCAxXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNFRTZBNTBcIixcbiAgICBcIm5hbWVcIjpcImNvcmFsIDJcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0NENUI0NVwiLFxuICAgIFwibmFtZVwiOlwiY29yYWwgM1wiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjOEIzRTJGXCIsXG4gICAgXCJuYW1lXCI6XCJjb3JhbCA0XCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiM4QTMzMjRcIixcbiAgICBcIm5hbWVcIjpcImJ1cm50dW1iZXJcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0ZGNjM0N1wiLFxuICAgIFwibmFtZVwiOlwidG9tYXRvIDFcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0ZGNjM0N1wiLFxuICAgIFwiY3NzXCI6dHJ1ZSxcbiAgICBcIm5hbWVcIjpcInRvbWF0b1wiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjRUU1QzQyXCIsXG4gICAgXCJuYW1lXCI6XCJ0b21hdG8gMlwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjQ0Q0RjM5XCIsXG4gICAgXCJuYW1lXCI6XCJ0b21hdG8gM1wiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjOEIzNjI2XCIsXG4gICAgXCJuYW1lXCI6XCJ0b21hdG8gNFwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjRkE4MDcyXCIsXG4gICAgXCJjc3NcIjp0cnVlLFxuICAgIFwibmFtZVwiOlwic2FsbW9uXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNGRkU0RTFcIixcbiAgICBcIm5hbWVcIjpcIm1pc3R5cm9zZSAxXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNGRkU0RTFcIixcbiAgICBcImNzc1wiOnRydWUsXG4gICAgXCJuYW1lXCI6XCJtaXN0eXJvc2VcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0VFRDVEMlwiLFxuICAgIFwibmFtZVwiOlwibWlzdHlyb3NlIDJcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0NEQjdCNVwiLFxuICAgIFwibmFtZVwiOlwibWlzdHlyb3NlIDNcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzhCN0Q3QlwiLFxuICAgIFwibmFtZVwiOlwibWlzdHlyb3NlIDRcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0ZGRkFGQVwiLFxuICAgIFwibmFtZVwiOlwic25vdyAxXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNGRkZBRkFcIixcbiAgICBcImNzc1wiOnRydWUsXG4gICAgXCJuYW1lXCI6XCJzbm93XCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNFRUU5RTlcIixcbiAgICBcIm5hbWVcIjpcInNub3cgMlwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjQ0RDOUM5XCIsXG4gICAgXCJuYW1lXCI6XCJzbm93IDNcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzhCODk4OVwiLFxuICAgIFwibmFtZVwiOlwic25vdyA0XCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNCQzhGOEZcIixcbiAgICBcImNzc1wiOnRydWUsXG4gICAgXCJuYW1lXCI6XCJyb3N5YnJvd25cIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0ZGQzFDMVwiLFxuICAgIFwibmFtZVwiOlwicm9zeWJyb3duIDFcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0VFQjRCNFwiLFxuICAgIFwibmFtZVwiOlwicm9zeWJyb3duIDJcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0NEOUI5QlwiLFxuICAgIFwibmFtZVwiOlwicm9zeWJyb3duIDNcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzhCNjk2OVwiLFxuICAgIFwibmFtZVwiOlwicm9zeWJyb3duIDRcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0YwODA4MFwiLFxuICAgIFwiY3NzXCI6dHJ1ZSxcbiAgICBcIm5hbWVcIjpcImxpZ2h0Y29yYWxcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0NENUM1Q1wiLFxuICAgIFwiY3NzXCI6dHJ1ZSxcbiAgICBcIm5hbWVcIjpcImluZGlhbnJlZFwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjRkY2QTZBXCIsXG4gICAgXCJuYW1lXCI6XCJpbmRpYW5yZWQgMVwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjRUU2MzYzXCIsXG4gICAgXCJuYW1lXCI6XCJpbmRpYW5yZWQgMlwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjOEIzQTNBXCIsXG4gICAgXCJuYW1lXCI6XCJpbmRpYW5yZWQgNFwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjQ0Q1NTU1XCIsXG4gICAgXCJuYW1lXCI6XCJpbmRpYW5yZWQgM1wiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjQTUyQTJBXCIsXG4gICAgXCJjc3NcIjp0cnVlLFxuICAgIFwibmFtZVwiOlwiYnJvd25cIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0ZGNDA0MFwiLFxuICAgIFwibmFtZVwiOlwiYnJvd24gMVwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjRUUzQjNCXCIsXG4gICAgXCJuYW1lXCI6XCJicm93biAyXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNDRDMzMzNcIixcbiAgICBcIm5hbWVcIjpcImJyb3duIDNcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzhCMjMyM1wiLFxuICAgIFwibmFtZVwiOlwiYnJvd24gNFwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjQjIyMjIyXCIsXG4gICAgXCJjc3NcIjp0cnVlLFxuICAgIFwibmFtZVwiOlwiZmlyZWJyaWNrXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNGRjMwMzBcIixcbiAgICBcIm5hbWVcIjpcImZpcmVicmljayAxXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNFRTJDMkNcIixcbiAgICBcIm5hbWVcIjpcImZpcmVicmljayAyXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNDRDI2MjZcIixcbiAgICBcIm5hbWVcIjpcImZpcmVicmljayAzXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiM4QjFBMUFcIixcbiAgICBcIm5hbWVcIjpcImZpcmVicmljayA0XCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNGRjAwMDBcIixcbiAgICBcInZnYVwiOnRydWUsXG4gICAgXCJuYW1lXCI6XCJyZWQgMVwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjRkYwMDAwXCIsXG4gICAgXCJ2Z2FcIjp0cnVlLFxuICAgIFwiY3NzXCI6dHJ1ZSxcbiAgICBcIm5hbWVcIjpcInJlZFwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjRUUwMDAwXCIsXG4gICAgXCJuYW1lXCI6XCJyZWQgMlwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjQ0QwMDAwXCIsXG4gICAgXCJuYW1lXCI6XCJyZWQgM1wiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjOEIwMDAwXCIsXG4gICAgXCJuYW1lXCI6XCJyZWQgNFwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjOEIwMDAwXCIsXG4gICAgXCJjc3NcIjp0cnVlLFxuICAgIFwibmFtZVwiOlwiZGFya3JlZFwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjODAwMDAwXCIsXG4gICAgXCJ2Z2FcIjp0cnVlLFxuICAgIFwiY3NzXCI6dHJ1ZSxcbiAgICBcIm5hbWVcIjpcIm1hcm9vblwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjOEUzODhFXCIsXG4gICAgXCJuYW1lXCI6XCJzZ2kgYmVldFwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjNzE3MUM2XCIsXG4gICAgXCJuYW1lXCI6XCJzZ2kgc2xhdGVibHVlXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiM3RDlFQzBcIixcbiAgICBcIm5hbWVcIjpcInNnaSBsaWdodGJsdWVcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzM4OEU4RVwiLFxuICAgIFwibmFtZVwiOlwic2dpIHRlYWxcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzcxQzY3MVwiLFxuICAgIFwibmFtZVwiOlwic2dpIGNoYXJ0cmV1c2VcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzhFOEUzOFwiLFxuICAgIFwibmFtZVwiOlwic2dpIG9saXZlZHJhYlwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjQzVDMUFBXCIsXG4gICAgXCJuYW1lXCI6XCJzZ2kgYnJpZ2h0Z3JheVwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjQzY3MTcxXCIsXG4gICAgXCJuYW1lXCI6XCJzZ2kgc2FsbW9uXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiM1NTU1NTVcIixcbiAgICBcIm5hbWVcIjpcInNnaSBkYXJrZ3JheVwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjMUUxRTFFXCIsXG4gICAgXCJuYW1lXCI6XCJzZ2kgZ3JheSAxMlwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjMjgyODI4XCIsXG4gICAgXCJuYW1lXCI6XCJzZ2kgZ3JheSAxNlwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjNTE1MTUxXCIsXG4gICAgXCJuYW1lXCI6XCJzZ2kgZ3JheSAzMlwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjNUI1QjVCXCIsXG4gICAgXCJuYW1lXCI6XCJzZ2kgZ3JheSAzNlwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjODQ4NDg0XCIsXG4gICAgXCJuYW1lXCI6XCJzZ2kgZ3JheSA1MlwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjOEU4RThFXCIsXG4gICAgXCJuYW1lXCI6XCJzZ2kgZ3JheSA1NlwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjQUFBQUFBXCIsXG4gICAgXCJuYW1lXCI6XCJzZ2kgbGlnaHRncmF5XCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNCN0I3QjdcIixcbiAgICBcIm5hbWVcIjpcInNnaSBncmF5IDcyXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNDMUMxQzFcIixcbiAgICBcIm5hbWVcIjpcInNnaSBncmF5IDc2XCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNFQUVBRUFcIixcbiAgICBcIm5hbWVcIjpcInNnaSBncmF5IDkyXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNGNEY0RjRcIixcbiAgICBcIm5hbWVcIjpcInNnaSBncmF5IDk2XCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNGRkZGRkZcIixcbiAgICBcInZnYVwiOnRydWUsXG4gICAgXCJjc3NcIjp0cnVlLFxuICAgIFwibmFtZVwiOlwid2hpdGVcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0Y1RjVGNVwiLFxuICAgIFwibmFtZVwiOlwid2hpdGUgc21va2VcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0Y1RjVGNVwiLFxuICAgIFwibmFtZVwiOlwiZ3JheSA5NlwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjRENEQ0RDXCIsXG4gICAgXCJjc3NcIjp0cnVlLFxuICAgIFwibmFtZVwiOlwiZ2FpbnNib3JvXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNEM0QzRDNcIixcbiAgICBcImNzc1wiOnRydWUsXG4gICAgXCJuYW1lXCI6XCJsaWdodGdyZXlcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0MwQzBDMFwiLFxuICAgIFwidmdhXCI6dHJ1ZSxcbiAgICBcImNzc1wiOnRydWUsXG4gICAgXCJuYW1lXCI6XCJzaWx2ZXJcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0E5QTlBOVwiLFxuICAgIFwiY3NzXCI6dHJ1ZSxcbiAgICBcIm5hbWVcIjpcImRhcmtncmF5XCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiM4MDgwODBcIixcbiAgICBcInZnYVwiOnRydWUsXG4gICAgXCJjc3NcIjp0cnVlLFxuICAgIFwibmFtZVwiOlwiZ3JheVwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjNjk2OTY5XCIsXG4gICAgXCJjc3NcIjp0cnVlLFxuICAgIFwibmFtZVwiOlwiZGltZ3JheVwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjNjk2OTY5XCIsXG4gICAgXCJuYW1lXCI6XCJncmF5IDQyXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiMwMDAwMDBcIixcbiAgICBcInZnYVwiOnRydWUsXG4gICAgXCJjc3NcIjp0cnVlLFxuICAgIFwibmFtZVwiOlwiYmxhY2tcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0ZDRkNGQ1wiLFxuICAgIFwibmFtZVwiOlwiZ3JheSA5OVwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjRkFGQUZBXCIsXG4gICAgXCJuYW1lXCI6XCJncmF5IDk4XCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNGN0Y3RjdcIixcbiAgICBcIm5hbWVcIjpcImdyYXkgOTdcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0YyRjJGMlwiLFxuICAgIFwibmFtZVwiOlwiZ3JheSA5NVwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjRjBGMEYwXCIsXG4gICAgXCJuYW1lXCI6XCJncmF5IDk0XCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNFREVERURcIixcbiAgICBcIm5hbWVcIjpcImdyYXkgOTNcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0VCRUJFQlwiLFxuICAgIFwibmFtZVwiOlwiZ3JheSA5MlwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjRThFOEU4XCIsXG4gICAgXCJuYW1lXCI6XCJncmF5IDkxXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNFNUU1RTVcIixcbiAgICBcIm5hbWVcIjpcImdyYXkgOTBcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0UzRTNFM1wiLFxuICAgIFwibmFtZVwiOlwiZ3JheSA4OVwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjRTBFMEUwXCIsXG4gICAgXCJuYW1lXCI6XCJncmF5IDg4XCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNERURFREVcIixcbiAgICBcIm5hbWVcIjpcImdyYXkgODdcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0RCREJEQlwiLFxuICAgIFwibmFtZVwiOlwiZ3JheSA4NlwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjRDlEOUQ5XCIsXG4gICAgXCJuYW1lXCI6XCJncmF5IDg1XCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNENkQ2RDZcIixcbiAgICBcIm5hbWVcIjpcImdyYXkgODRcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0Q0RDRENFwiLFxuICAgIFwibmFtZVwiOlwiZ3JheSA4M1wiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjRDFEMUQxXCIsXG4gICAgXCJuYW1lXCI6XCJncmF5IDgyXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNDRkNGQ0ZcIixcbiAgICBcIm5hbWVcIjpcImdyYXkgODFcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0NDQ0NDQ1wiLFxuICAgIFwibmFtZVwiOlwiZ3JheSA4MFwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjQzlDOUM5XCIsXG4gICAgXCJuYW1lXCI6XCJncmF5IDc5XCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNDN0M3QzdcIixcbiAgICBcIm5hbWVcIjpcImdyYXkgNzhcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0M0QzRDNFwiLFxuICAgIFwibmFtZVwiOlwiZ3JheSA3N1wiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjQzJDMkMyXCIsXG4gICAgXCJuYW1lXCI6XCJncmF5IDc2XCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNCRkJGQkZcIixcbiAgICBcIm5hbWVcIjpcImdyYXkgNzVcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0JEQkRCRFwiLFxuICAgIFwibmFtZVwiOlwiZ3JheSA3NFwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjQkFCQUJBXCIsXG4gICAgXCJuYW1lXCI6XCJncmF5IDczXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNCOEI4QjhcIixcbiAgICBcIm5hbWVcIjpcImdyYXkgNzJcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0I1QjVCNVwiLFxuICAgIFwibmFtZVwiOlwiZ3JheSA3MVwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjQjNCM0IzXCIsXG4gICAgXCJuYW1lXCI6XCJncmF5IDcwXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNCMEIwQjBcIixcbiAgICBcIm5hbWVcIjpcImdyYXkgNjlcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0FEQURBRFwiLFxuICAgIFwibmFtZVwiOlwiZ3JheSA2OFwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjQUJBQkFCXCIsXG4gICAgXCJuYW1lXCI6XCJncmF5IDY3XCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNBOEE4QThcIixcbiAgICBcIm5hbWVcIjpcImdyYXkgNjZcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0E2QTZBNlwiLFxuICAgIFwibmFtZVwiOlwiZ3JheSA2NVwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjQTNBM0EzXCIsXG4gICAgXCJuYW1lXCI6XCJncmF5IDY0XCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiNBMUExQTFcIixcbiAgICBcIm5hbWVcIjpcImdyYXkgNjNcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzlFOUU5RVwiLFxuICAgIFwibmFtZVwiOlwiZ3JheSA2MlwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjOUM5QzlDXCIsXG4gICAgXCJuYW1lXCI6XCJncmF5IDYxXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiM5OTk5OTlcIixcbiAgICBcIm5hbWVcIjpcImdyYXkgNjBcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzk2OTY5NlwiLFxuICAgIFwibmFtZVwiOlwiZ3JheSA1OVwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjOTQ5NDk0XCIsXG4gICAgXCJuYW1lXCI6XCJncmF5IDU4XCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiM5MTkxOTFcIixcbiAgICBcIm5hbWVcIjpcImdyYXkgNTdcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzhGOEY4RlwiLFxuICAgIFwibmFtZVwiOlwiZ3JheSA1NlwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjOEM4QzhDXCIsXG4gICAgXCJuYW1lXCI6XCJncmF5IDU1XCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiM4QThBOEFcIixcbiAgICBcIm5hbWVcIjpcImdyYXkgNTRcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzg3ODc4N1wiLFxuICAgIFwibmFtZVwiOlwiZ3JheSA1M1wiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjODU4NTg1XCIsXG4gICAgXCJuYW1lXCI6XCJncmF5IDUyXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiM4MjgyODJcIixcbiAgICBcIm5hbWVcIjpcImdyYXkgNTFcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzdGN0Y3RlwiLFxuICAgIFwibmFtZVwiOlwiZ3JheSA1MFwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjN0Q3RDdEXCIsXG4gICAgXCJuYW1lXCI6XCJncmF5IDQ5XCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiM3QTdBN0FcIixcbiAgICBcIm5hbWVcIjpcImdyYXkgNDhcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzc4Nzg3OFwiLFxuICAgIFwibmFtZVwiOlwiZ3JheSA0N1wiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjNzU3NTc1XCIsXG4gICAgXCJuYW1lXCI6XCJncmF5IDQ2XCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiM3MzczNzNcIixcbiAgICBcIm5hbWVcIjpcImdyYXkgNDVcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzcwNzA3MFwiLFxuICAgIFwibmFtZVwiOlwiZ3JheSA0NFwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjNkU2RTZFXCIsXG4gICAgXCJuYW1lXCI6XCJncmF5IDQzXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiM2NjY2NjZcIixcbiAgICBcIm5hbWVcIjpcImdyYXkgNDBcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzYzNjM2M1wiLFxuICAgIFwibmFtZVwiOlwiZ3JheSAzOVwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjNjE2MTYxXCIsXG4gICAgXCJuYW1lXCI6XCJncmF5IDM4XCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiM1RTVFNUVcIixcbiAgICBcIm5hbWVcIjpcImdyYXkgMzdcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzVDNUM1Q1wiLFxuICAgIFwibmFtZVwiOlwiZ3JheSAzNlwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjNTk1OTU5XCIsXG4gICAgXCJuYW1lXCI6XCJncmF5IDM1XCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiM1NzU3NTdcIixcbiAgICBcIm5hbWVcIjpcImdyYXkgMzRcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzU0NTQ1NFwiLFxuICAgIFwibmFtZVwiOlwiZ3JheSAzM1wiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjNTI1MjUyXCIsXG4gICAgXCJuYW1lXCI6XCJncmF5IDMyXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiM0RjRGNEZcIixcbiAgICBcIm5hbWVcIjpcImdyYXkgMzFcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzRENEQ0RFwiLFxuICAgIFwibmFtZVwiOlwiZ3JheSAzMFwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjNEE0QTRBXCIsXG4gICAgXCJuYW1lXCI6XCJncmF5IDI5XCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiM0NzQ3NDdcIixcbiAgICBcIm5hbWVcIjpcImdyYXkgMjhcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzQ1NDU0NVwiLFxuICAgIFwibmFtZVwiOlwiZ3JheSAyN1wiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjNDI0MjQyXCIsXG4gICAgXCJuYW1lXCI6XCJncmF5IDI2XCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiM0MDQwNDBcIixcbiAgICBcIm5hbWVcIjpcImdyYXkgMjVcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzNEM0QzRFwiLFxuICAgIFwibmFtZVwiOlwiZ3JheSAyNFwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjM0IzQjNCXCIsXG4gICAgXCJuYW1lXCI6XCJncmF5IDIzXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiMzODM4MzhcIixcbiAgICBcIm5hbWVcIjpcImdyYXkgMjJcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzM2MzYzNlwiLFxuICAgIFwibmFtZVwiOlwiZ3JheSAyMVwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjMzMzMzMzXCIsXG4gICAgXCJuYW1lXCI6XCJncmF5IDIwXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiMzMDMwMzBcIixcbiAgICBcIm5hbWVcIjpcImdyYXkgMTlcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzJFMkUyRVwiLFxuICAgIFwibmFtZVwiOlwiZ3JheSAxOFwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjMkIyQjJCXCIsXG4gICAgXCJuYW1lXCI6XCJncmF5IDE3XCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiMyOTI5MjlcIixcbiAgICBcIm5hbWVcIjpcImdyYXkgMTZcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzI2MjYyNlwiLFxuICAgIFwibmFtZVwiOlwiZ3JheSAxNVwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjMjQyNDI0XCIsXG4gICAgXCJuYW1lXCI6XCJncmF5IDE0XCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiMyMTIxMjFcIixcbiAgICBcIm5hbWVcIjpcImdyYXkgMTNcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzFGMUYxRlwiLFxuICAgIFwibmFtZVwiOlwiZ3JheSAxMlwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjMUMxQzFDXCIsXG4gICAgXCJuYW1lXCI6XCJncmF5IDExXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiMxQTFBMUFcIixcbiAgICBcIm5hbWVcIjpcImdyYXkgMTBcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzE3MTcxN1wiLFxuICAgIFwibmFtZVwiOlwiZ3JheSA5XCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiMxNDE0MTRcIixcbiAgICBcIm5hbWVcIjpcImdyYXkgOFwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjMTIxMjEyXCIsXG4gICAgXCJuYW1lXCI6XCJncmF5IDdcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzBGMEYwRlwiLFxuICAgIFwibmFtZVwiOlwiZ3JheSA2XCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiMwRDBEMERcIixcbiAgICBcIm5hbWVcIjpcImdyYXkgNVwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjMEEwQTBBXCIsXG4gICAgXCJuYW1lXCI6XCJncmF5IDRcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiIzA4MDgwOFwiLFxuICAgIFwibmFtZVwiOlwiZ3JheSAzXCJcbiAgfSxcbiAge1xuICAgIFwidmFsdWVcIjpcIiMwNTA1MDVcIixcbiAgICBcIm5hbWVcIjpcImdyYXkgMlwiXG4gIH0sXG4gIHtcbiAgICBcInZhbHVlXCI6XCIjMDMwMzAzXCIsXG4gICAgXCJuYW1lXCI6XCJncmF5IDFcIlxuICB9LFxuICB7XG4gICAgXCJ2YWx1ZVwiOlwiI0Y1RjVGNVwiLFxuICAgIFwiY3NzXCI6dHJ1ZSxcbiAgICBcIm5hbWVcIjpcIndoaXRlc21va2VcIlxuICB9XG5dXG4iLCIvKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcbiAqL1xudmFyIGNvbG9ycyA9IHJlcXVpcmUoJy4vY29sb3JzJylcblxudmFyIGNzc0NvbG9ycyA9IGNvbG9ycy5maWx0ZXIoZnVuY3Rpb24oY29sb3Ipe1xuICByZXR1cm4gISEgY29sb3IuY3NzXG59KVxuXG52YXIgdmdhQ29sb3JzID0gY29sb3JzLmZpbHRlcihmdW5jdGlvbihjb2xvcil7XG4gIHJldHVybiAhISBjb2xvci52Z2Fcbn0pXG5cblxuLyoqXG4gKiBHZXQgY29sb3IgdmFsdWUgZm9yIGEgY2VydGFpbiBuYW1lLlxuICogQHBhcmFtIG5hbWUge1N0cmluZ31cbiAqIEByZXR1cm4ge1N0cmluZ30gSGV4IGNvbG9yIHZhbHVlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSkge1xuICB2YXIgY29sb3IgPSBtb2R1bGUuZXhwb3J0cy5nZXQobmFtZSlcbiAgcmV0dXJuIGNvbG9yICYmIGNvbG9yLnZhbHVlXG59XG5cbi8qKlxuICogR2V0IGNvbG9yIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0gbmFtZSB7U3RyaW5nfVxuICogQHJldHVybiB7T2JqZWN0fSBDb2xvciBvYmplY3RcbiAqIEBhcGkgcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMuZ2V0ID0gZnVuY3Rpb24obmFtZSkge1xuICBuYW1lID0gbmFtZSB8fCAnJ1xuICBuYW1lID0gbmFtZS50cmltKCkudG9Mb3dlckNhc2UoKVxuICByZXR1cm4gY29sb3JzLmZpbHRlcihmdW5jdGlvbihjb2xvcil7XG4gICAgcmV0dXJuIGNvbG9yLm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gbmFtZVxuICB9KS5wb3AoKVxufVxuXG4vKipcbiAqIEdldCBhbGwgY29sb3Igb2JqZWN0LlxuICpcbiAqIEByZXR1cm4ge0FycmF5fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cy5hbGwgPSBtb2R1bGUuZXhwb3J0cy5nZXQuYWxsID0gZnVuY3Rpb24oKSB7XG4gcmV0dXJuIGNvbG9yc1xufVxuXG4vKipcbiAqIEdldCBjb2xvciBvYmplY3QgY29tcGF0aWJsZSB3aXRoIENTUy5cbiAqXG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMuZ2V0LmNzcyA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgaWYgKCFuYW1lKSByZXR1cm4gY3NzQ29sb3JzXG4gIG5hbWUgPSBuYW1lIHx8ICcnXG4gIG5hbWUgPSBuYW1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpXG4gIHJldHVybiBjc3NDb2xvcnMuZmlsdGVyKGZ1bmN0aW9uKGNvbG9yKXtcbiAgICByZXR1cm4gY29sb3IubmFtZS50b0xvd2VyQ2FzZSgpID09PSBuYW1lXG4gIH0pLnBvcCgpXG59XG5cblxuXG5tb2R1bGUuZXhwb3J0cy5nZXQudmdhID0gZnVuY3Rpb24obmFtZSkge1xuICBpZiAoIW5hbWUpIHJldHVybiB2Z2FDb2xvcnNcbiAgbmFtZSA9IG5hbWUgfHwgJydcbiAgbmFtZSA9IG5hbWUudHJpbSgpLnRvTG93ZXJDYXNlKClcbiAgcmV0dXJuIHZnYUNvbG9ycy5maWx0ZXIoZnVuY3Rpb24oY29sb3Ipe1xuICAgIHJldHVybiBjb2xvci5uYW1lLnRvTG93ZXJDYXNlKCkgPT09IG5hbWVcbiAgfSkucG9wKClcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJjb25zdCBjYW1lbGNhc2UgPSByZXF1aXJlKFwiY2FtZWxjYXNlXCIpO1xuY29uc3QgdG9IZXggPSByZXF1aXJlKFwiY29sb3JuYW1lc1wiKTtcblxuZmV0Y2goXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vY21kYS10dC9jb3Vyc2UtMjEtMjIvbWFpbi90ZWNoLXRyYWNrLWRhdGFzZXQuanNvblwiKVxuICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgIC50aGVuKGRhdGEgPT4gZmlsdGVyRGF0YShkYXRhKSk7XG5cbmZ1bmN0aW9uIHRyYW5zbGF0ZSh3b3JkKSB7XG4gICAgc3dpdGNoKHdvcmQudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICBjYXNlIFwiYnJ1aW5cIjpcbiAgICAgICAgICAgIHJldHVybiBcImJyb3duXCI7XG4gICAgICAgIGNhc2UgXCJibGF1d1wiOlxuICAgICAgICAgICAgcmV0dXJuIFwiYmx1ZVwiO1xuICAgICAgICBjYXNlIFwiZ3JvZW5cIjpcbiAgICAgICAgICAgIHJldHVybiBcImdyZWVuXCI7XG4gICAgICAgIGNhc2UgXCJkb25rZXJicnVpblwiOlxuICAgICAgICAgICAgcmV0dXJuIFwiYnJvd25cIjtcbiAgICAgICAgY2FzZSBcImdyaWpzXCI6XG4gICAgICAgICAgICByZXR1cm4gXCJncmF5XCI7XG4gICAgICAgIGNhc2UgXCJncm9lbmdyaWpzXCI6XG4gICAgICAgICAgICByZXR1cm4gXCJwYWxlZ3JlZW5cIjtcbiAgICAgICAgY2FzZSBcImdyb2VuYmxhdXdcIjpcbiAgICAgICAgICAgIHJldHVybiBcImRhcmtzZWFncmVlblwiO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaW5zZXJ0Um93KGlkLCBjb2xvcikge1xuICAgIGNvbnN0IGV5ZUNvbG9yVGFibGVCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNleWVDb2xvclRhYmxlIHRib2R5XCIpO1xuICAgIGNvbnN0IHRhYmxlUm93ID0gYFxuICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+JHtpZH08L3RkPlxuICAgICAgICAgICAgPHRkPiR7Y29sb3J9PC90ZD5cbiAgICAgICAgICAgIDx0ZD48ZGl2IGNsYXNzPVwidmlzdWFsaXNhdGlvblwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcn1cIj48L2Rpdj48L3RkPlxuICAgICAgICA8dHI+XG4gICAgYDtcbiAgICBleWVDb2xvclRhYmxlQm9keS5pbm5lckhUTUwgKz0gdGFibGVSb3c7XG59XG5cbmZ1bmN0aW9uIGZpbHRlckRhdGEoZGF0YSkge1xuICAgIGNvbnN0IHJlZHVjZWQgPSBkYXRhLnJlZHVjZSgocHJldmlvdXNWYWx1ZSwgY3VycmVudFZhbHVlKSA9PiBbLi4ucHJldmlvdXNWYWx1ZSwgY3VycmVudFZhbHVlWydXYXQgaXMgamUgb29na2xldXI/J11dICxbXSk7XG4gICAgY29uc3QgY2FtZWxDYXNlZCA9IHJlZHVjZWQubWFwKGNvbG9yID0+IGNhbWVsY2FzZShjb2xvcikpO1xuICAgIGNvbnN0IHRyYW5zbGF0ZWQgPSBjYW1lbENhc2VkLm1hcChkdXRjaCA9PiB0cmFuc2xhdGUoZHV0Y2gpKTtcbiAgICBjb25zdCBoZXhlZCA9IHRyYW5zbGF0ZWQubWFwKGNvbG9yTmFtZSA9PiB0b0hleChjb2xvck5hbWUpKTtcbiAgICBoZXhlZC5mb3JFYWNoKChjb2xvciwgaW5kZXgpID0+IGluc2VydFJvdyhpbmRleCwgY29sb3IpKTtcbn1cbiJdLCJuYW1lcyI6WyJjYW1lbGNhc2UiLCJyZXF1aXJlIiwidG9IZXgiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsImZpbHRlckRhdGEiLCJ0cmFuc2xhdGUiLCJ3b3JkIiwidG9Mb3dlckNhc2UiLCJpbnNlcnRSb3ciLCJpZCIsImNvbG9yIiwiZXllQ29sb3JUYWJsZUJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0YWJsZVJvdyIsImlubmVySFRNTCIsInJlZHVjZWQiLCJyZWR1Y2UiLCJwcmV2aW91c1ZhbHVlIiwiY3VycmVudFZhbHVlIiwiY2FtZWxDYXNlZCIsIm1hcCIsInRyYW5zbGF0ZWQiLCJkdXRjaCIsImhleGVkIiwiY29sb3JOYW1lIiwiZm9yRWFjaCIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==