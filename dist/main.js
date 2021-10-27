/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var camelcaseKeys = __webpack_require__(/*! camelcase-keys */ \"./node_modules/camelcase-keys/index.js\");\n\nvar question = \"Wat is je oogkleur?\";\nfetch(\"https://raw.githubusercontent.com/cmda-tt/course-21-22/main/tech-track-dataset.json\").then(function (res) {\n  return res.json();\n}).then(function (data) {\n  return filterData(data);\n});\n\nfunction filterData(data) {\n  console.log(\"old data: \", camelcaseKeys(data));\n}\n\n//# sourceURL=webpack://functional-programming/./src/index.js?");

/***/ }),

/***/ "./node_modules/camelcase-keys/index.js":
/*!**********************************************!*\
  !*** ./node_modules/camelcase-keys/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nconst mapObj = __webpack_require__(/*! map-obj */ \"./node_modules/map-obj/index.js\");\nconst camelCase = __webpack_require__(/*! camelcase */ \"./node_modules/camelcase/index.js\");\nconst QuickLru = __webpack_require__(/*! quick-lru */ \"./node_modules/quick-lru/index.js\");\n\nconst has = (array, key) => array.some(x => {\n\tif (typeof x === 'string') {\n\t\treturn x === key;\n\t}\n\n\tx.lastIndex = 0;\n\treturn x.test(key);\n});\n\nconst cache = new QuickLru({maxSize: 100000});\n\n// Reproduces behavior from `map-obj`\nconst isObject = value =>\n\ttypeof value === 'object' &&\n\tvalue !== null &&\n\t!(value instanceof RegExp) &&\n\t!(value instanceof Error) &&\n\t!(value instanceof Date);\n\nconst camelCaseConvert = (input, options) => {\n\tif (!isObject(input)) {\n\t\treturn input;\n\t}\n\n\toptions = {\n\t\tdeep: false,\n\t\tpascalCase: false,\n\t\t...options\n\t};\n\n\tconst {exclude, pascalCase, stopPaths, deep} = options;\n\n\tconst stopPathsSet = new Set(stopPaths);\n\n\tconst makeMapper = parentPath => (key, value) => {\n\t\tif (deep && isObject(value)) {\n\t\t\tconst path = parentPath === undefined ? key : `${parentPath}.${key}`;\n\n\t\t\tif (!stopPathsSet.has(path)) {\n\t\t\t\tvalue = mapObj(value, makeMapper(path));\n\t\t\t}\n\t\t}\n\n\t\tif (!(exclude && has(exclude, key))) {\n\t\t\tconst cacheKey = pascalCase ? `${key}_` : key;\n\n\t\t\tif (cache.has(cacheKey)) {\n\t\t\t\tkey = cache.get(cacheKey);\n\t\t\t} else {\n\t\t\t\tconst returnValue = camelCase(key, {pascalCase});\n\n\t\t\t\tif (key.length < 100) { // Prevent abuse\n\t\t\t\t\tcache.set(cacheKey, returnValue);\n\t\t\t\t}\n\n\t\t\t\tkey = returnValue;\n\t\t\t}\n\t\t}\n\n\t\treturn [key, value];\n\t};\n\n\treturn mapObj(input, makeMapper(undefined));\n};\n\nmodule.exports = (input, options) => {\n\tif (Array.isArray(input)) {\n\t\treturn Object.keys(input).map(key => camelCaseConvert(input[key], options));\n\t}\n\n\treturn camelCaseConvert(input, options);\n};\n\n\n//# sourceURL=webpack://functional-programming/./node_modules/camelcase-keys/index.js?");

/***/ }),

/***/ "./node_modules/camelcase/index.js":
/*!*****************************************!*\
  !*** ./node_modules/camelcase/index.js ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
eval("\n\nconst preserveCamelCase = (string, locale) => {\n\tlet isLastCharLower = false;\n\tlet isLastCharUpper = false;\n\tlet isLastLastCharUpper = false;\n\n\tfor (let i = 0; i < string.length; i++) {\n\t\tconst character = string[i];\n\n\t\tif (isLastCharLower && /[\\p{Lu}]/u.test(character)) {\n\t\t\tstring = string.slice(0, i) + '-' + string.slice(i);\n\t\t\tisLastCharLower = false;\n\t\t\tisLastLastCharUpper = isLastCharUpper;\n\t\t\tisLastCharUpper = true;\n\t\t\ti++;\n\t\t} else if (isLastCharUpper && isLastLastCharUpper && /[\\p{Ll}]/u.test(character)) {\n\t\t\tstring = string.slice(0, i - 1) + '-' + string.slice(i - 1);\n\t\t\tisLastLastCharUpper = isLastCharUpper;\n\t\t\tisLastCharUpper = false;\n\t\t\tisLastCharLower = true;\n\t\t} else {\n\t\t\tisLastCharLower = character.toLocaleLowerCase(locale) === character && character.toLocaleUpperCase(locale) !== character;\n\t\t\tisLastLastCharUpper = isLastCharUpper;\n\t\t\tisLastCharUpper = character.toLocaleUpperCase(locale) === character && character.toLocaleLowerCase(locale) !== character;\n\t\t}\n\t}\n\n\treturn string;\n};\n\nconst preserveConsecutiveUppercase = input => {\n\treturn input.replace(/^[\\p{Lu}](?![\\p{Lu}])/gu, m1 => m1.toLowerCase());\n};\n\nconst postProcess = (input, options) => {\n\treturn input.replace(/[_.\\- ]+([\\p{Alpha}\\p{N}_]|$)/gu, (_, p1) => p1.toLocaleUpperCase(options.locale))\n\t\t.replace(/\\d+([\\p{Alpha}\\p{N}_]|$)/gu, m => m.toLocaleUpperCase(options.locale));\n};\n\nconst camelCase = (input, options) => {\n\tif (!(typeof input === 'string' || Array.isArray(input))) {\n\t\tthrow new TypeError('Expected the input to be `string | string[]`');\n\t}\n\n\toptions = {\n\t\tpascalCase: false,\n\t\tpreserveConsecutiveUppercase: false,\n\t\t...options\n\t};\n\n\tif (Array.isArray(input)) {\n\t\tinput = input.map(x => x.trim())\n\t\t\t.filter(x => x.length)\n\t\t\t.join('-');\n\t} else {\n\t\tinput = input.trim();\n\t}\n\n\tif (input.length === 0) {\n\t\treturn '';\n\t}\n\n\tif (input.length === 1) {\n\t\treturn options.pascalCase ? input.toLocaleUpperCase(options.locale) : input.toLocaleLowerCase(options.locale);\n\t}\n\n\tconst hasUpperCase = input !== input.toLocaleLowerCase(options.locale);\n\n\tif (hasUpperCase) {\n\t\tinput = preserveCamelCase(input, options.locale);\n\t}\n\n\tinput = input.replace(/^[_.\\- ]+/, '');\n\n\tif (options.preserveConsecutiveUppercase) {\n\t\tinput = preserveConsecutiveUppercase(input);\n\t} else {\n\t\tinput = input.toLocaleLowerCase();\n\t}\n\n\tif (options.pascalCase) {\n\t\tinput = input.charAt(0).toLocaleUpperCase(options.locale) + input.slice(1);\n\t}\n\n\treturn postProcess(input, options);\n};\n\nmodule.exports = camelCase;\n// TODO: Remove this for the next major release\nmodule.exports[\"default\"] = camelCase;\n\n\n//# sourceURL=webpack://functional-programming/./node_modules/camelcase/index.js?");

/***/ }),

/***/ "./node_modules/map-obj/index.js":
/*!***************************************!*\
  !*** ./node_modules/map-obj/index.js ***!
  \***************************************/
/***/ ((module) => {

"use strict";
eval("\n\nconst isObject = value => typeof value === 'object' && value !== null;\nconst mapObjectSkip = Symbol('skip');\n\n// Customized for this use-case\nconst isObjectCustom = value =>\n\tisObject(value) &&\n\t!(value instanceof RegExp) &&\n\t!(value instanceof Error) &&\n\t!(value instanceof Date);\n\nconst mapObject = (object, mapper, options, isSeen = new WeakMap()) => {\n\toptions = {\n\t\tdeep: false,\n\t\ttarget: {},\n\t\t...options\n\t};\n\n\tif (isSeen.has(object)) {\n\t\treturn isSeen.get(object);\n\t}\n\n\tisSeen.set(object, options.target);\n\n\tconst {target} = options;\n\tdelete options.target;\n\n\tconst mapArray = array => array.map(element => isObjectCustom(element) ? mapObject(element, mapper, options, isSeen) : element);\n\tif (Array.isArray(object)) {\n\t\treturn mapArray(object);\n\t}\n\n\tfor (const [key, value] of Object.entries(object)) {\n\t\tconst mapResult = mapper(key, value, object);\n\n\t\tif (mapResult === mapObjectSkip) {\n\t\t\tcontinue;\n\t\t}\n\n\t\tlet [newKey, newValue, {shouldRecurse = true} = {}] = mapResult;\n\n\t\t// Drop `__proto__` keys.\n\t\tif (newKey === '__proto__') {\n\t\t\tcontinue;\n\t\t}\n\n\t\tif (options.deep && shouldRecurse && isObjectCustom(newValue)) {\n\t\t\tnewValue = Array.isArray(newValue) ?\n\t\t\t\tmapArray(newValue) :\n\t\t\t\tmapObject(newValue, mapper, options, isSeen);\n\t\t}\n\n\t\ttarget[newKey] = newValue;\n\t}\n\n\treturn target;\n};\n\nmodule.exports = (object, mapper, options) => {\n\tif (!isObject(object)) {\n\t\tthrow new TypeError(`Expected an object, got \\`${object}\\` (${typeof object})`);\n\t}\n\n\treturn mapObject(object, mapper, options);\n};\n\nmodule.exports.mapObjectSkip = mapObjectSkip;\n\n\n//# sourceURL=webpack://functional-programming/./node_modules/map-obj/index.js?");

/***/ }),

/***/ "./node_modules/quick-lru/index.js":
/*!*****************************************!*\
  !*** ./node_modules/quick-lru/index.js ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
eval("\n\nclass QuickLRU {\n\tconstructor(options = {}) {\n\t\tif (!(options.maxSize && options.maxSize > 0)) {\n\t\t\tthrow new TypeError('`maxSize` must be a number greater than 0');\n\t\t}\n\n\t\tthis.maxSize = options.maxSize;\n\t\tthis.onEviction = options.onEviction;\n\t\tthis.cache = new Map();\n\t\tthis.oldCache = new Map();\n\t\tthis._size = 0;\n\t}\n\n\t_set(key, value) {\n\t\tthis.cache.set(key, value);\n\t\tthis._size++;\n\n\t\tif (this._size >= this.maxSize) {\n\t\t\tthis._size = 0;\n\n\t\t\tif (typeof this.onEviction === 'function') {\n\t\t\t\tfor (const [key, value] of this.oldCache.entries()) {\n\t\t\t\t\tthis.onEviction(key, value);\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tthis.oldCache = this.cache;\n\t\t\tthis.cache = new Map();\n\t\t}\n\t}\n\n\tget(key) {\n\t\tif (this.cache.has(key)) {\n\t\t\treturn this.cache.get(key);\n\t\t}\n\n\t\tif (this.oldCache.has(key)) {\n\t\t\tconst value = this.oldCache.get(key);\n\t\t\tthis.oldCache.delete(key);\n\t\t\tthis._set(key, value);\n\t\t\treturn value;\n\t\t}\n\t}\n\n\tset(key, value) {\n\t\tif (this.cache.has(key)) {\n\t\t\tthis.cache.set(key, value);\n\t\t} else {\n\t\t\tthis._set(key, value);\n\t\t}\n\n\t\treturn this;\n\t}\n\n\thas(key) {\n\t\treturn this.cache.has(key) || this.oldCache.has(key);\n\t}\n\n\tpeek(key) {\n\t\tif (this.cache.has(key)) {\n\t\t\treturn this.cache.get(key);\n\t\t}\n\n\t\tif (this.oldCache.has(key)) {\n\t\t\treturn this.oldCache.get(key);\n\t\t}\n\t}\n\n\tdelete(key) {\n\t\tconst deleted = this.cache.delete(key);\n\t\tif (deleted) {\n\t\t\tthis._size--;\n\t\t}\n\n\t\treturn this.oldCache.delete(key) || deleted;\n\t}\n\n\tclear() {\n\t\tthis.cache.clear();\n\t\tthis.oldCache.clear();\n\t\tthis._size = 0;\n\t}\n\n\t* keys() {\n\t\tfor (const [key] of this) {\n\t\t\tyield key;\n\t\t}\n\t}\n\n\t* values() {\n\t\tfor (const [, value] of this) {\n\t\t\tyield value;\n\t\t}\n\t}\n\n\t* [Symbol.iterator]() {\n\t\tfor (const item of this.cache) {\n\t\t\tyield item;\n\t\t}\n\n\t\tfor (const item of this.oldCache) {\n\t\t\tconst [key] = item;\n\t\t\tif (!this.cache.has(key)) {\n\t\t\t\tyield item;\n\t\t\t}\n\t\t}\n\t}\n\n\tget size() {\n\t\tlet oldCacheSize = 0;\n\t\tfor (const key of this.oldCache.keys()) {\n\t\t\tif (!this.cache.has(key)) {\n\t\t\t\toldCacheSize++;\n\t\t\t}\n\t\t}\n\n\t\treturn Math.min(this._size + oldCacheSize, this.maxSize);\n\t}\n}\n\nmodule.exports = QuickLRU;\n\n\n//# sourceURL=webpack://functional-programming/./node_modules/quick-lru/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;