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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./mekona.woff2 */ \"./src/mekona.woff2\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./mekona.woff */ \"./src/mekona.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./background.jpg */ \"./src/background.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\r\n    font-family: \"Mekona\";\r\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('woff2'),\r\n        url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('woff');\r\n    font-style: normal;\r\n}\r\n\r\nbody {\r\n    display: grid;\r\n    grid-template-columns: auto;\r\n    grid-template-rows: 20px auto;\r\n    background: \r\n        linear-gradient(\r\n            rgba(0, 0, 0, 0.75), \r\n            rgba(0, 0, 0, 0.75)\r\n        ),\r\n        url(${___CSS_LOADER_URL_REPLACEMENT_2___});  /* Photo by Lisa Fotios: https://www.pexels.com/photo/selective-focus-photography-of-pasta-with-tomato-and-basil-1279330/ */\r\n    background-size: 1920px 1280px;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n#content {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    height: 100vh;\r\n}\r\n\r\n.restaurant-name {\r\n    font-family: \"Mekona\";\r\n    color: antiquewhite;\r\n    font-size: 120px;\r\n    font-weight: 900;\r\n    opacity: 0;\r\n    transition: opacity 2.0s;\r\n}\r\n\r\n.restaurant-name.loaded {\r\n    opacity: 1;\r\n}\r\n\r\n\r\n.order-online {\r\n    font-family: \"Mekona\";\r\n    color: antiquewhite;\r\n    font-weight: 200;\r\n    font-size: 20px;\r\n    opacity: 0;\r\n    transition: opacity 1.0s;\r\n}\r\n\r\n.order-online.loaded {\r\n    opacity: 1;\r\n}\r\n\r\nnav {\r\n    margin-top: 10px;\r\n    display: grid;\r\n    justify-content: center;\r\n    grid-template-columns: 150px 100px 100px 100px 200px;\r\n    grid-template-rows: 50px;\r\n    column-gap: 30px;\r\n}\r\n\r\n.logo {\r\n    filter: invert(90%);\r\n    height: 50px;\r\n \r\n}\r\n\r\nnav button {\r\n    background-color: transparent;\r\n    border: none;\r\n    outline: none;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    color: antiquewhite;\r\n    z-index: 2;\r\n    cursor: pointer;\r\n    transition: transform .2s;\r\n}\r\n\r\nnav button:hover {\r\n    color:darkgoldenrod;\r\n    transform: scale(1.1);\r\n}\r\n\r\n.menu-container {\r\n    font-family: \"Mekona\";\r\n    display: grid;\r\n    grid-template-columns: 600px 600px;\r\n    grid-template-rows: 180px 180px 180px;\r\n    column-gap: 200px;\r\n    row-gap: 100px;\r\n    color: antiquewhite;\r\n}\r\n\r\n.item-container {\r\n    display: grid;\r\n    grid-template-columns: 400px auto;\r\n    opacity: 0;\r\n    transition: opacity 0.5s;\r\n}\r\n\r\n.item-container.loaded {\r\n    opacity: 1;\r\n}\r\n\r\n.item-picture {\r\n    width: 90% ;\r\n    transition: transform .2s;\r\n}\r\n\r\n.item-picture:hover {\r\n    transform: scale(1.5);\r\n}\r\n\r\n.details-container {\r\n    display: grid;\r\n    grid-template-rows: 80px 50px auto;\r\n}\r\n\r\n.item-title {\r\n    color:darkgoldenrod;\r\n    font-size: 30px;\r\n    font-weight: bolder;\r\n}\r\n\r\n.item-price {\r\n    font-size: 30px;\r\n}\r\n\r\n.item-ingredients {\r\n    font-size: 15px;\r\n    font-weight: lighter;\r\n}\r\n\r\n.about-container {\r\n    font-family: \"Mekona\";\r\n    color: antiquewhite;\r\n    width: 1280px;\r\n    display: grid;\r\n    grid-template-rows: auto;\r\n    position: relative;\r\n    margin-top: 150px;\r\n    align-content: start;\r\n    overflow-y: auto; \r\n    height: 100%; \r\n}\r\n\r\n.heading {\r\n    color: blanchedalmond;\r\n    font-size: 40px;\r\n    font-weight: bolder;\r\n    margin-bottom: 5px;\r\n    text-align: center;\r\n    padding: 20px;\r\n}\r\n\r\n.paragraph {\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n    font-size: 20px;\r\n    font-weight: normal;\r\n    margin-bottom: 20px;\r\n    max-height: 0; \r\n    overflow: hidden; \r\n    opacity: 0; \r\n    transform: translateY(-10px); \r\n    transition: max-height 0.2s ease-out, opacity 0.2s ease-out, transform 0.2s ease-out; \r\n    text-align: center;\r\n}\r\n\r\n.heading:hover {\r\n    color:darkgoldenrod\r\n}\r\n\r\n.heading:hover + .paragraph {\r\n    max-height: 500px; \r\n    opacity: 1;\r\n    transform: translateY(0); \r\n}\r\n\r\n.heading {\r\n    position: relative; \r\n    z-index: 1; \r\n    cursor: pointer; \r\n}\r\n\r\n.welcome-container,\r\n.story-container,\r\n.ourMenu-container,\r\n.join-container,\r\n.salutation-container {\r\n    opacity: 0;\r\n    transition: opacity 0.5s;\r\n}\r\n\r\n.welcome-container.loaded,\r\n.story-container.loaded,\r\n.ourMenu-container.loaded,\r\n.join-container.loaded,\r\n.salutation-container.loaded {\r\n    opacity: 1;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/menu.csv":
/*!**********************!*\
  !*** ./src/menu.csv ***!
  \**********************/
/***/ ((module) => {

eval("module.exports = [[\"Spaghetti Carbonara\",\"12.99\",\"Spaghetti, eggs, pancetta, Parmesan\",\"spaghetti_carbonara.jpg\"],[\"Lasagna\",\"14.99\",\"Ground beef, ricotta, mozzarella, lasagna noodles\",\"lasagna.jpg\"],[\"Fettuccine Alfredo\",\"13.49\",\"Fettuccine, butter, heavy cream, Parmesan\",\"fettuccine_alfredo.jpg\"],[\"Penne Arrabbiata\",\"11.49\",\"Penne, garlic, tomatoes, red chili flakes\",\"penne_arrabbiata.jpg\"],[\"Ravioli\",\"15.99\",\"Ricotta, spinach, marinara sauce\",\"ravioli.jpg\"],[\"Pesto Genovese\",\"13.99\",\"Trofie pasta, basil, pine nuts, Parmesan\",\"pesto_genovese.jpg\"]]\n\n//# sourceURL=webpack://restaurant-page/./src/menu.csv?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadAbout)\n/* harmony export */ });\nfunction loadAbout() {\r\n    const aboutContainer = document.createElement('div');\r\n    aboutContainer.classList.add(\"about-container\");\r\n    \r\n    const sections = [\r\n        { title: \"welcome\", heading: \"Welcome to Pasta Heaven\", paragraph: \"At Pasta Heaven, we're passionate about bringing the authentic taste of Italy to your table. Established in 2024, our mission is simple: to create delicious, handcrafted pasta dishes that make every meal feel special.\" },\r\n        { title: \"story\", heading: \"Our Story\", paragraph: \"Born from a love for Italian cuisine, Pasta Heaven was founded by Adrien to share the rich flavors and traditions of Italy with our community. We use only the freshest ingredients and traditional methods to craft our pasta daily.\" },\r\n        { title: \"ourMenu\", heading: \"Our Menu\", paragraph: \"From classic favorites like Spaghetti Carbonara to unique seasonal dishes, our menu offers something for every pasta lover. Each dish is carefully prepared to bring out the best in every ingredient.\" },\r\n        { title: \"join\", heading: \"Join Us\", paragraph: \"We invite you to relax, enjoy, and savor the flavors of Italy with us. Come discover why Pasta Heaven is more than just a restaurant — it's a place where good food and good times come together.\" },\r\n        { title: \"salutation\", heading: \"Mangia Bene, Vivi Felice\", paragraph: \"(Eat Well, Live Happy)\" }\r\n    ];\r\n\r\n    sections.forEach(section => {\r\n        const sectionElement = createSection(section.title, section.heading, section.paragraph);\r\n        setTimeout(() => {\r\n            sectionElement.classList.add(\"loaded\");\r\n        }, 0)\r\n    \r\n        aboutContainer.appendChild(sectionElement);\r\n    });\r\n\r\n    document.querySelector(\"#content\").appendChild(aboutContainer);\r\n}\r\n\r\nconst createSection = (title, heading, paragraph) => {\r\n    const sectionContainer = document.createElement('div');\r\n    sectionContainer.classList.add(`${title}-container`);\r\n\r\n    const sectionHeading = document.createElement('div');\r\n    const sectionParagraph = document.createElement('div');\r\n\r\n    sectionHeading.classList.add(\"heading\");\r\n    sectionParagraph.classList.add(\"paragraph\");\r\n\r\n    sectionHeading.innerHTML = heading;\r\n    sectionParagraph.innerHTML = paragraph;\r\n\r\n    sectionContainer.appendChild(sectionHeading);\r\n    sectionContainer.appendChild(sectionParagraph);\r\n\r\n    return sectionContainer;\r\n};\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHome)\n/* harmony export */ });\nfunction loadHome() {\r\n    const RestName = document.createElement('div');\r\n    const RestInfo = document.createElement('div');\r\n\r\n    RestName.classList.add(\"restaurant-name\");\r\n    RestInfo.classList.add(\"order-online\");\r\n\r\n    RestName.innerHTML = \"PASTA HEAVEN\";\r\n    RestInfo.innerHTML = \"ONLINE ORDERING NOW AVAILABLE!\";\r\n\r\n    document.querySelector(\"#content\").appendChild(RestName);\r\n    document.querySelector(\"#content\").appendChild(RestInfo);\r\n\r\n    setTimeout(() => {\r\n        RestName.classList.add('loaded');\r\n    }, 0);\r\n    setTimeout(() => {\r\n        RestInfo.classList.add(\"loaded\");\r\n    }, 1000)\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _navigation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation.js */ \"./src/navigation.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_navigation_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\r\nconst buttons = document.querySelectorAll(\"nav button\");\r\n\r\nbuttons.forEach(button => {\r\n    button.addEventListener((\"click\"), () => {\r\n        document.querySelector(\"#content\").innerHTML = \"\"\r\n        switch (button.dataset.action) {\r\n            case \"home\":\r\n                ;(0,_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n                break;\r\n            case \"menu\":\r\n                (0,_menu_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n                break;\r\n            case \"about\":\r\n                (0,_about_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n                break;\r\n            case \"order\":\r\n                console.log(\"PRESSED ORDER\");\r\n                break;\r\n        }\r\n    });\r\n});\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMenu)\n/* harmony export */ });\n/* harmony import */ var _menu_csv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.csv */ \"./src/menu.csv\");\n/* harmony import */ var _menu_csv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_menu_csv__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _spaghetti_carbonara_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spaghetti_carbonara.jpg */ \"./src/spaghetti_carbonara.jpg\");\n/* harmony import */ var _penne_arrabbiata_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./penne_arrabbiata.jpg */ \"./src/penne_arrabbiata.jpg\");\n/* harmony import */ var _lasagna_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lasagna.jpg */ \"./src/lasagna.jpg\");\n/* harmony import */ var _ravioli_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ravioli.jpg */ \"./src/ravioli.jpg\");\n/* harmony import */ var _pesto_genovese_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pesto_genovese.jpg */ \"./src/pesto_genovese.jpg\");\n/* harmony import */ var _fettuccine_alfredo_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fettuccine_alfredo.jpg */ \"./src/fettuccine_alfredo.jpg\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst imageMap = {\r\n    \"spaghetti_carbonara.jpg\": _spaghetti_carbonara_jpg__WEBPACK_IMPORTED_MODULE_1__,\r\n    \"penne_arrabbiata.jpg\": _penne_arrabbiata_jpg__WEBPACK_IMPORTED_MODULE_2__,\r\n    \"lasagna.jpg\": _lasagna_jpg__WEBPACK_IMPORTED_MODULE_3__,\r\n    \"ravioli.jpg\": _ravioli_jpg__WEBPACK_IMPORTED_MODULE_4__,\r\n    \"pesto_genovese.jpg\": _pesto_genovese_jpg__WEBPACK_IMPORTED_MODULE_5__,\r\n    \"fettuccine_alfredo.jpg\": _fettuccine_alfredo_jpg__WEBPACK_IMPORTED_MODULE_6__\r\n};\r\n\r\nfunction loadMenu() {\r\n    const menuItems = (_menu_csv__WEBPACK_IMPORTED_MODULE_0___default());\r\n    const menuContainer = document.createElement('div');\r\n    menuContainer.classList.add(\"menu-container\");\r\n\r\n    menuItems.forEach(item => {\r\n        const imagePath = imageMap[item[3]]\r\n        menuContainer.appendChild(createItem(item[0], item[1], item[2], imagePath));\r\n    });\r\n    document.querySelector(\"#content\").appendChild(menuContainer)\r\n\r\n}\r\n\r\nfunction createItem(title, price, ingredients, pictureSrc) {\r\n    const itemDiv = document.createElement('div');\r\n    itemDiv.classList.add('item-container');\r\n\r\n    const detailsDiv = document.createElement('div');\r\n    detailsDiv.classList.add('details-container');\r\n\r\n    const titleDiv = document.createElement('div');\r\n    titleDiv.classList.add('item-title');\r\n    const priceDiv = document.createElement('div');\r\n    priceDiv.classList.add('item-price');\r\n    const ingredientsDiv = document.createElement('div');\r\n    ingredientsDiv.classList.add('item-ingredients');\r\n    const picture = document.createElement('img');\r\n    picture.classList.add('item-picture');\r\n\r\n    titleDiv.innerHTML = title;\r\n    priceDiv.innerHTML = \"€ \"+price;\r\n    ingredientsDiv.innerHTML = ingredients;\r\n    picture.src = pictureSrc;\r\n\r\n    detailsDiv.appendChild(titleDiv);\r\n    detailsDiv.appendChild(priceDiv);\r\n    detailsDiv.appendChild(ingredientsDiv);\r\n    itemDiv.appendChild(detailsDiv);\r\n    itemDiv.appendChild(picture);\r\n\r\n    setTimeout(() => {\r\n        itemDiv.classList.add(\"loaded\");\r\n    }, 0)\r\n\r\n    return itemDiv;\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/navigation.js":
/*!***************************!*\
  !*** ./src/navigation.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createNav)\n/* harmony export */ });\n/* harmony import */ var _pasta_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pasta.svg */ \"./src/pasta.svg\");\n\r\n\r\nfunction createNav() {\r\n    const logo = document.createElement('img');\r\n    const home = document.createElement('button');\r\n    const menu = document.createElement('button');\r\n    const about = document.createElement('button');\r\n    const order = document.createElement('button');\r\n\r\n    logo.src = _pasta_svg__WEBPACK_IMPORTED_MODULE_0__;\r\n    logo.alt = \"Pasta logo\"\r\n    logo.classList.add(\"logo\")\r\n    home.setAttribute(\"data-action\", \"home\");\r\n    menu.setAttribute(\"data-action\", \"menu\");\r\n    about.setAttribute(\"data-action\", \"about\");\r\n    order.setAttribute(\"data-action\", \"order\");\r\n\r\n    home.innerHTML = \"HOME\";\r\n    menu.innerHTML = \"MENU\";\r\n    about.innerHTML = \"ABOUT\";\r\n    order.innerHTML = \"ORDER ONLINE\";\r\n\r\n    const nav = document.querySelector(\"nav\");\r\n    nav.appendChild(logo);\r\n    nav.appendChild(home);\r\n    nav.appendChild(menu);\r\n    nav.appendChild(about);\r\n    nav.appendChild(order);\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/navigation.js?");

/***/ }),

/***/ "./src/background.jpg":
/*!****************************!*\
  !*** ./src/background.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"f5a644cebd008ff3572b.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/background.jpg?");

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

/***/ "./src/mekona.woff":
/*!*************************!*\
  !*** ./src/mekona.woff ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"9d4b718d499f868e6388.woff\";\n\n//# sourceURL=webpack://restaurant-page/./src/mekona.woff?");

/***/ }),

/***/ "./src/mekona.woff2":
/*!**************************!*\
  !*** ./src/mekona.woff2 ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"75fc9f81e90d33aa8580.woff2\";\n\n//# sourceURL=webpack://restaurant-page/./src/mekona.woff2?");

/***/ }),

/***/ "./src/pasta.svg":
/*!***********************!*\
  !*** ./src/pasta.svg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"ed1ba05fc057447992ef.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/pasta.svg?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
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