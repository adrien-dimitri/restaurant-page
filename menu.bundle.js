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

/***/ "./src/menu.csv":
/*!**********************!*\
  !*** ./src/menu.csv ***!
  \**********************/
/***/ ((module) => {

eval("module.exports = [[\"Spaghetti Carbonara\",\"12.99\",\"Spaghetti, eggs, pancetta, Parmesan\",\"spaghetti_carbonara.jpg\"],[\"Lasagna\",\"14.99\",\"Ground beef, ricotta, mozzarella, lasagna noodles\",\"lasagna.jpg\"],[\"Fettuccine Alfredo\",\"13.49\",\"Fettuccine, butter, heavy cream, Parmesan\",\"fettuccine_alfredo.jpg\"],[\"Penne Arrabbiata\",\"11.49\",\"Penne, garlic, tomatoes, red chili flakes\",\"penne_arrabbiata.jpg\"],[\"Ravioli\",\"15.99\",\"Ricotta, spinach, marinara sauce\",\"ravioli.jpg\"],[\"Pesto Genovese\",\"13.99\",\"Trofie pasta, basil, pine nuts, Parmesan\",\"pesto_genovese.jpg\"]]\n\n//# sourceURL=webpack://restaurant-page/./src/menu.csv?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMenu)\n/* harmony export */ });\n/* harmony import */ var _menu_csv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.csv */ \"./src/menu.csv\");\n/* harmony import */ var _menu_csv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_menu_csv__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _spaghetti_carbonara_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spaghetti_carbonara.jpg */ \"./src/spaghetti_carbonara.jpg\");\n/* harmony import */ var _penne_arrabbiata_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./penne_arrabbiata.jpg */ \"./src/penne_arrabbiata.jpg\");\n/* harmony import */ var _lasagna_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lasagna.jpg */ \"./src/lasagna.jpg\");\n/* harmony import */ var _ravioli_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ravioli.jpg */ \"./src/ravioli.jpg\");\n/* harmony import */ var _pesto_genovese_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pesto_genovese.jpg */ \"./src/pesto_genovese.jpg\");\n/* harmony import */ var _fettuccine_alfredo_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fettuccine_alfredo.jpg */ \"./src/fettuccine_alfredo.jpg\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst imageMap = {\r\n    \"spaghetti_carbonara.jpg\": _spaghetti_carbonara_jpg__WEBPACK_IMPORTED_MODULE_1__,\r\n    \"penne_arrabbiata.jpg\": _penne_arrabbiata_jpg__WEBPACK_IMPORTED_MODULE_2__,\r\n    \"lasagna.jpg\": _lasagna_jpg__WEBPACK_IMPORTED_MODULE_3__,\r\n    \"ravioli.jpg\": _ravioli_jpg__WEBPACK_IMPORTED_MODULE_4__,\r\n    \"pesto_genovese.jpg\": _pesto_genovese_jpg__WEBPACK_IMPORTED_MODULE_5__,\r\n    \"fettuccine_alfredo.jpg\": _fettuccine_alfredo_jpg__WEBPACK_IMPORTED_MODULE_6__\r\n};\r\n\r\nfunction loadMenu() {\r\n    const menuItems = (_menu_csv__WEBPACK_IMPORTED_MODULE_0___default());\r\n    const menuContainer = document.createElement('div');\r\n    menuContainer.classList.add(\"menu-container\");\r\n\r\n    menuItems.forEach(item => {\r\n        const imagePath = imageMap[item[3]]\r\n        menuContainer.appendChild(createItem(item[0], item[1], item[2], imagePath));\r\n    });\r\n    document.querySelector(\"#content\").appendChild(menuContainer)\r\n\r\n}\r\n\r\nfunction createItem(title, price, ingredients, pictureSrc) {\r\n    const itemDiv = document.createElement('div');\r\n    itemDiv.classList.add('item-container');\r\n\r\n    const detailsDiv = document.createElement('div');\r\n    detailsDiv.classList.add('details-container');\r\n\r\n    const titleDiv = document.createElement('div');\r\n    titleDiv.classList.add('item-title');\r\n    const priceDiv = document.createElement('div');\r\n    priceDiv.classList.add('item-price');\r\n    const ingredientsDiv = document.createElement('div');\r\n    ingredientsDiv.classList.add('item-ingredients');\r\n    const picture = document.createElement('img');\r\n    picture.classList.add('item-picture');\r\n\r\n    titleDiv.innerHTML = title;\r\n    priceDiv.innerHTML = \"€ \"+price;\r\n    ingredientsDiv.innerHTML = ingredients;\r\n    picture.src = pictureSrc;\r\n\r\n    detailsDiv.appendChild(titleDiv);\r\n    detailsDiv.appendChild(priceDiv);\r\n    detailsDiv.appendChild(ingredientsDiv);\r\n    itemDiv.appendChild(detailsDiv);\r\n    itemDiv.appendChild(picture);\r\n\r\n    setTimeout(() => {\r\n        itemDiv.classList.add(\"loaded\");\r\n    }, 0)\r\n\r\n    return itemDiv;\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/fettuccine_alfredo.jpg":
/*!************************************!*\
  !*** ./src/fettuccine_alfredo.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"7bad1e1b23f36a3fe351.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/fettuccine_alfredo.jpg?");

/***/ }),

/***/ "./src/lasagna.jpg":
/*!*************************!*\
  !*** ./src/lasagna.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"87f4561635326bd197c0.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/lasagna.jpg?");

/***/ }),

/***/ "./src/penne_arrabbiata.jpg":
/*!**********************************!*\
  !*** ./src/penne_arrabbiata.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"7b1d6731ed4c74fa0e10.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/penne_arrabbiata.jpg?");

/***/ }),

/***/ "./src/pesto_genovese.jpg":
/*!********************************!*\
  !*** ./src/pesto_genovese.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"072f49830fa0f2ee9e78.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/pesto_genovese.jpg?");

/***/ }),

/***/ "./src/ravioli.jpg":
/*!*************************!*\
  !*** ./src/ravioli.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"0f705d8f1d2e4229fa62.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/ravioli.jpg?");

/***/ }),

/***/ "./src/spaghetti_carbonara.jpg":
/*!*************************************!*\
  !*** ./src/spaghetti_carbonara.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"878e7bafc29f79a9ca42.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/spaghetti_carbonara.jpg?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/menu.js");
/******/ 	
/******/ })()
;