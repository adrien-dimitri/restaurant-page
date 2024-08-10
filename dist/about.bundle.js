/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadAbout)\n/* harmony export */ });\nfunction loadAbout() {\r\n    const aboutContainer = document.createElement('div');\r\n    aboutContainer.classList.add(\"about-container\");\r\n    \r\n    const sections = [\r\n        { title: \"welcome\", heading: \"Welcome to Pasta Heaven\", paragraph: \"At Pasta Heaven, we're passionate about bringing the authentic taste of Italy to your table. Established in 2024, our mission is simple: to create delicious, handcrafted pasta dishes that make every meal feel special.\" },\r\n        { title: \"story\", heading: \"Our Story\", paragraph: \"Born from a love for Italian cuisine, Pasta Heaven was founded by Adrien to share the rich flavors and traditions of Italy with our community. We use only the freshest ingredients and traditional methods to craft our pasta daily.\" },\r\n        { title: \"ourMenu\", heading: \"Our Menu\", paragraph: \"From classic favorites like Spaghetti Carbonara to unique seasonal dishes, our menu offers something for every pasta lover. Each dish is carefully prepared to bring out the best in every ingredient.\" },\r\n        { title: \"join\", heading: \"Join Us\", paragraph: \"We invite you to relax, enjoy, and savor the flavors of Italy with us. Come discover why Pasta Heaven is more than just a restaurant — it's a place where good food and good times come together.\" },\r\n        { title: \"salutation\", heading: \"Mangia Bene, Vivi Felice\", paragraph: \"(Eat Well, Live Happy)\" }\r\n    ];\r\n\r\n    sections.forEach(section => {\r\n        const sectionElement = createSection(section.title, section.heading, section.paragraph);\r\n        setTimeout(() => {\r\n            sectionElement.classList.add(\"loaded\");\r\n        }, 0)\r\n    \r\n        aboutContainer.appendChild(sectionElement);\r\n    });\r\n\r\n    document.querySelector(\"#content\").appendChild(aboutContainer);\r\n}\r\n\r\nconst createSection = (title, heading, paragraph) => {\r\n    const sectionContainer = document.createElement('div');\r\n    sectionContainer.classList.add(`${title}-container`);\r\n\r\n    const sectionHeading = document.createElement('div');\r\n    const sectionParagraph = document.createElement('div');\r\n\r\n    sectionHeading.classList.add(\"heading\");\r\n    sectionParagraph.classList.add(\"paragraph\");\r\n\r\n    sectionHeading.innerHTML = heading;\r\n    sectionParagraph.innerHTML = paragraph;\r\n\r\n    sectionContainer.appendChild(sectionHeading);\r\n    sectionContainer.appendChild(sectionParagraph);\r\n\r\n    return sectionContainer;\r\n};\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/about.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;