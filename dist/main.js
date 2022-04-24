/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./pizza.jpg */ "./src/pizza.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Raleway:wght@200;400&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --font-family-main: 'Raleway', sans-serif;\n\n    /* colours */\n    --background-color: #f4f1de;\n    --accent-color: #3d405b;\n    --button-background-color: #f2cc8f;\n    --content-background-color: #e7d8b1;\n}\n\n* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nhtml {\n    background-color: var(--background-color);\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\nheader {\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position-y: center;\n    height: 300px;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.575);\n}\n\n.image-overlay {\n    background-color: rgba(0, 0, 0, 0.8);\n    height: 100px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.page-title {\n    font-family: var(--font-family-main);\n    font-weight:  200;\n    font-size: 3rem;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    color: aliceblue;\n}\n\n.card-image {\n    height: 250px;\n    width: 250px;\n    border-radius: 4px;\n}\n\n.navbar {\n    display: flex;\n    justify-content: center;\n    gap: 16px;\n    margin-top: 16px;\n}\n\n.home-button,\n.menu-button,\n.contact-button {\n    font-family: var(--font-family-main);\n    font-weight: 400;\n    text-transform: uppercase;\n    letter-spacing: 0.1rem;\n    font-size: 0.75rem;\n    width: 130px;\n    height: 36px;\n    background-color: var(--button-background-color);\n    border: 1px solid var(--accent-color);\n    border-radius: 3px;\n    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.267);\n}\n\n.content {\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n    justify-content: center;\n    align-items: center;\n    font-family: var(--font-family-main);\n    font-weight: 400;\n    font-size: 1.2rem;\n    margin-bottom: 32px;\n    width: 100%;\n}\n\n.testimonial-container {\n    margin-top: 16px;\n    display: flex;\n    flex-direction: column;\n    font-style: italic;\n}\n\n.testimonial-container,\n.hours-container,\n.location-container {\n    width: 70%;\n    background-color: var(--content-background-color);\n    border-radius: 3px;\n    padding: 32px;\n    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.185);\n}\n\n.hours-container,\n.location-container {\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n}\n\n.testimonial-cite {\n    font-weight: bold;\n    margin-top: 16px;\n    text-align: right;\n}\n\n.hours-title,\n.location-title {\n    font-weight: normal;\n}\n\n.menu-heading-container {\n    width: 70%;\n    display: flex;\n    justify-content: center;\n    margin-top: 16px;\n    font-family: var(--font-family-main);\n    \n}\n\n.menu-heading-container > * {\n    font-weight: 400;\n}\n\n.pizza-container,\n.pasta-container {\n    width: 70%;\n    background-color: var(--content-background-color);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 16px;\n    padding: 16px;\n    border-radius: 4px;\n    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.185);\n}\n\n.pizza-card-container,\n.pasta-card-container {\n    display: flex;\n    justify-content: center;\n    gap: 16px;\n    flex-wrap: wrap;\n    \n}\n\n.card-price {\n    display: none;\n}\n\n.pizza-card,\n.pasta-card {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n}\n\n.pizza-card-top,\n.pasta-card-top {\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 8px;\n}\n\n.pizza-heading,\n.pasta-heading {\n    font-weight: bold;\n}\n\n.contact-container {\n    width: 70%;\n    background-color: var(--content-background-color);\n    margin-top: 16px;\n    border-radius: 4px;\n    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.185);\n    padding: 32px;\n}\n\n.contact-form {\n    margin-top: 16px;\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n}\n\n.contact-heading {\n    font-weight: 200px;\n}\n\n/****************************** MOBILE *******************************/\n\n@media screen and (max-width: 842px) {\n    \n    \n\n    .image-overlay {\n        padding: 16px;\n    }\n\n    .page-title {\n        font-size: 2rem;\n        text-align: center;\n    }\n\n    .navbar {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        gap: 16px;\n        margin-top: 16px;\n        width: 80%;\n    }\n\n    .home-button,\n    .menu-button,\n    .contact-button {\n        width: 100%;\n    }\n\n    .testimonial-container,\n    .hours-container,\n    .location-container {\n        width: 80%;\n    }\n\n    .pizza-card-container,\n    .pasta-card-container {\n        display: flex;\n        flex-direction: column;\n    }\n\n    .card-image {\n        width: 350px;\n        height: 350px;\n    }\n\n    .contact-container {\n        width: 80%;\n    }\n\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@200;400&display=swap');\n\n:root {\n    --font-family-main: 'Raleway', sans-serif;\n\n    /* colours */\n    --background-color: #f4f1de;\n    --accent-color: #3d405b;\n    --button-background-color: #f2cc8f;\n    --content-background-color: #e7d8b1;\n}\n\n* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nhtml {\n    background-color: var(--background-color);\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\nheader {\n    background: url('./pizza.jpg');\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position-y: center;\n    height: 300px;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.575);\n}\n\n.image-overlay {\n    background-color: rgba(0, 0, 0, 0.8);\n    height: 100px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.page-title {\n    font-family: var(--font-family-main);\n    font-weight:  200;\n    font-size: 3rem;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    color: aliceblue;\n}\n\n.card-image {\n    height: 250px;\n    width: 250px;\n    border-radius: 4px;\n}\n\n.navbar {\n    display: flex;\n    justify-content: center;\n    gap: 16px;\n    margin-top: 16px;\n}\n\n.home-button,\n.menu-button,\n.contact-button {\n    font-family: var(--font-family-main);\n    font-weight: 400;\n    text-transform: uppercase;\n    letter-spacing: 0.1rem;\n    font-size: 0.75rem;\n    width: 130px;\n    height: 36px;\n    background-color: var(--button-background-color);\n    border: 1px solid var(--accent-color);\n    border-radius: 3px;\n    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.267);\n}\n\n.content {\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n    justify-content: center;\n    align-items: center;\n    font-family: var(--font-family-main);\n    font-weight: 400;\n    font-size: 1.2rem;\n    margin-bottom: 32px;\n    width: 100%;\n}\n\n.testimonial-container {\n    margin-top: 16px;\n    display: flex;\n    flex-direction: column;\n    font-style: italic;\n}\n\n.testimonial-container,\n.hours-container,\n.location-container {\n    width: 70%;\n    background-color: var(--content-background-color);\n    border-radius: 3px;\n    padding: 32px;\n    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.185);\n}\n\n.hours-container,\n.location-container {\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n}\n\n.testimonial-cite {\n    font-weight: bold;\n    margin-top: 16px;\n    text-align: right;\n}\n\n.hours-title,\n.location-title {\n    font-weight: normal;\n}\n\n.menu-heading-container {\n    width: 70%;\n    display: flex;\n    justify-content: center;\n    margin-top: 16px;\n    font-family: var(--font-family-main);\n    \n}\n\n.menu-heading-container > * {\n    font-weight: 400;\n}\n\n.pizza-container,\n.pasta-container {\n    width: 70%;\n    background-color: var(--content-background-color);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 16px;\n    padding: 16px;\n    border-radius: 4px;\n    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.185);\n}\n\n.pizza-card-container,\n.pasta-card-container {\n    display: flex;\n    justify-content: center;\n    gap: 16px;\n    flex-wrap: wrap;\n    \n}\n\n.card-price {\n    display: none;\n}\n\n.pizza-card,\n.pasta-card {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n}\n\n.pizza-card-top,\n.pasta-card-top {\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 8px;\n}\n\n.pizza-heading,\n.pasta-heading {\n    font-weight: bold;\n}\n\n.contact-container {\n    width: 70%;\n    background-color: var(--content-background-color);\n    margin-top: 16px;\n    border-radius: 4px;\n    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.185);\n    padding: 32px;\n}\n\n.contact-form {\n    margin-top: 16px;\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n}\n\n.contact-heading {\n    font-weight: 200px;\n}\n\n/****************************** MOBILE *******************************/\n\n@media screen and (max-width: 842px) {\n    \n    \n\n    .image-overlay {\n        padding: 16px;\n    }\n\n    .page-title {\n        font-size: 2rem;\n        text-align: center;\n    }\n\n    .navbar {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        gap: 16px;\n        margin-top: 16px;\n        width: 80%;\n    }\n\n    .home-button,\n    .menu-button,\n    .contact-button {\n        width: 100%;\n    }\n\n    .testimonial-container,\n    .hours-container,\n    .location-container {\n        width: 80%;\n    }\n\n    .pizza-card-container,\n    .pasta-card-container {\n        display: flex;\n        flex-direction: column;\n    }\n\n    .card-image {\n        width: 350px;\n        height: 350px;\n    }\n\n    .contact-container {\n        width: 80%;\n    }\n\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact-tab.js":
/*!****************************!*\
  !*** ./src/contact-tab.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

const CONTACT_TITLE = "Contact Sal";
const NAME = "Sal Salverson";
const PROFESSION = "Pizza Chef";
const PHONE = "555-555-5566";
const EMAIL = "sal.salverson@salspizza.com";

function loadContactTab () {

    // Contact
    const content = document.querySelector('.content');
    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact-container');
    const contactHeading = document.createElement('h2');
    contactHeading.classList.add('contact-heading');
    contactHeading.textContent = CONTACT_TITLE;
    const contactForm = document.createElement('div');
    contactForm.classList.add('contact-form');
    const name = document.createElement('p');
    name.textContent = NAME;
    const profession = document.createElement('p');
    profession.textContent = PROFESSION;
    const phone = document.createElement('p');
    phone.textContent = PHONE;
    const email = document.createElement('p');
    email.textContent = EMAIL;
    contactForm.appendChild(name);
    contactForm.appendChild(profession);
    contactForm.appendChild(phone);
    contactForm.appendChild(email);
    contactContainer.appendChild(contactHeading);
    contactContainer.appendChild(contactForm);
    content.appendChild(contactContainer);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContactTab);

/***/ }),

/***/ "./src/home-tab.js":
/*!*************************!*\
  !*** ./src/home-tab.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const TESTIMONIAL_TEXT = "Sal makes the best pizza! The atmosphere and customer service make you feel like you are sitting in the middle of New York, eating authentic New York pizza! This is exactly the kind of place that I like to return to again and again.";
const TESTIMONIAL_CITE = "- Frederick";
const HOURS_HEADING = "Hours";
const HOURS = [
    "Sunday: 8am - 8pm",
    "Monday: 6am - 6pm",
    "Tuesday: 6am - 6pm",
    "Wednesday: 6am - 6pm",
    "Thursday: 6am - 10pm",
    "Friday: 6am - 10pm",
    "Saturday: 8am - 10pm"
];
const LOCATION_TITLE = "Location";
const LOCATION_TEXT = "123 New York Drive, Forestville, Maine";


function loadHomeTab () {
    
    // Testimonial
    const content = document.querySelector('.content');
    const testimonial = document.createElement('div');
    testimonial.classList.add('testimonial-container');
    const blockquote = document.createElement('blockquote');
    blockquote.textContent = TESTIMONIAL_TEXT;
    blockquote.classList.add('testimonial-text');
    const cite = document.createElement('cite');
    cite.textContent = TESTIMONIAL_CITE;
    cite.classList.add('testimonial-cite');
    testimonial.appendChild(blockquote);
    testimonial.appendChild(cite);
    content.appendChild(testimonial);

    // Hours
    const hours = document.createElement('div');
    hours.classList.add('hours-container');
    const title = document.createElement('h2');
    title.classList.add('hours-title');
    title.textContent = HOURS_HEADING;
    const container = document.createElement('div');
    container.classList.add('hours-text-container');
    for (let i = 0; i < HOURS.length; i++) {
        let p = document.createElement('p');
        p.textContent = HOURS[i];
        container.appendChild(p);
    }
    hours.appendChild(title);
    hours.appendChild(container);
    content.appendChild(hours);

    // Location
    const location = document.createElement('div');
    location.classList.add('location-container');
    const locationTitle = document.createElement('h2');
    locationTitle.classList.add('location-title');
    locationTitle.textContent = LOCATION_TITLE;
    const locationText = document.createElement('p');
    locationText.classList.add('location-text');
    locationText.textContent = LOCATION_TEXT;
    location.appendChild(locationTitle);
    location.appendChild(locationText);
    content.appendChild(location);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHomeTab);

/***/ }),

/***/ "./src/load-page.js":
/*!**************************!*\
  !*** ./src/load-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

const PAGE_TITLE = "Sal's Pizza and Pasta";
const HOME_BUTTON_TEXT = "Home";
const MENU_BUTTON_TEXT = "Menu";
const CONTACT_BUTTON_TEXT = "Contact";

// This loads the initial page.
function loadPage () {

    // Header
    const body = document.querySelector('body');
    const header = document.createElement('header');
    const overlay = document.createElement('div');
    overlay.classList.add('image-overlay');
    const heading = document.createElement('h1');
    heading.classList.add('page-title');
    heading.textContent = PAGE_TITLE;
    overlay.appendChild(heading);
    body.appendChild(header);
    header.appendChild(overlay);

    // Navbar
    const nav = document.createElement('nav');
    nav.classList.add('navbar');
    const homeButton = document.createElement('button');
    homeButton.classList.add('home-button');
    homeButton.textContent = HOME_BUTTON_TEXT;
    const menuButton = document.createElement('button');
    menuButton.classList.add('menu-button');
    menuButton.textContent = MENU_BUTTON_TEXT;
    const contactButton = document.createElement('button');
    contactButton.classList.add('contact-button');
    contactButton.textContent = CONTACT_BUTTON_TEXT;
    body.appendChild(nav);
    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);

    // Content
    const content = document.createElement('div');
    content.classList.add('content');
    body.appendChild(content);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);

/***/ }),

/***/ "./src/menu-tab.js":
/*!*************************!*\
  !*** ./src/menu-tab.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pepperoni_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pepperoni.jpg */ "./src/pepperoni.jpg");
/* harmony import */ var _margherita_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./margherita.jpg */ "./src/margherita.jpg");
/* harmony import */ var _chef_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chef.jpg */ "./src/chef.jpg");
/* harmony import */ var _alfredo_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alfredo.jpg */ "./src/alfredo.jpg");
/* harmony import */ var _penne_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./penne.jpg */ "./src/penne.jpg");
/* harmony import */ var _bologna_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bologna.jpg */ "./src/bologna.jpg");









const PIZZA_TITLE = "Pizza";
const PASTA_TITLE = "Pasta";
const MENU_TITLE = "Menu";
const pizzas = [
    {name: "Pepperoni", price: "17", image: _pepperoni_jpg__WEBPACK_IMPORTED_MODULE_0__},
    {name: "Margherita", price: "19", image: _margherita_jpg__WEBPACK_IMPORTED_MODULE_1__},
    {name: "Chef's Special", price: "19", image: _chef_jpg__WEBPACK_IMPORTED_MODULE_2__}
];

const pastas = [
    {name: "Alfredo", price: "11", image: _alfredo_jpg__WEBPACK_IMPORTED_MODULE_3__},
    {name: "Penne", price: "11", image: _penne_jpg__WEBPACK_IMPORTED_MODULE_4__},
    {name: "Bologna", price: "13", image: _bologna_jpg__WEBPACK_IMPORTED_MODULE_5__}
];

function loadMenuTab () {
    // Heading
    const content = document.querySelector('.content');
    const menuHeadingContainer = document.createElement('div');
    menuHeadingContainer.classList.add('menu-heading-container');
    const menuHeading = document.createElement('h2');
    menuHeading.classList.add('menu-heading');
    menuHeading.textContent = MENU_TITLE;
    menuHeadingContainer.appendChild(menuHeading);
    content.appendChild(menuHeadingContainer);

    // Pizzas
    const pizzaContainer = document.createElement('div');
    pizzaContainer.classList.add('pizza-container');
    const pizzaHeadingContainer = document.createElement('div');
    pizzaHeadingContainer.classList.add('pizza-heading-container');
    const pizzaHeading = document.createElement('p3');
    pizzaHeading.classList.add('pizza-heading');
    pizzaHeading.textContent = PIZZA_TITLE;
    pizzaHeadingContainer.appendChild(pizzaHeading);
    pizzaContainer.appendChild(pizzaHeadingContainer);
    content.appendChild(pizzaContainer);
    const pizzaCardContainer = document.createElement('div');
    pizzaCardContainer.classList.add('pizza-card-container');
    pizzaContainer.appendChild(pizzaCardContainer);
    for (let i = 0; i < pizzas.length; i++) {
        const pizzaCard = document.createElement('div');
        pizzaCard.classList.add('pizza-card');
        const top = document.createElement('div');
        top.classList.add('pizza-card-top');
        const name = document.createElement('div');
        name.classList.add('card-name');
        name.textContent = pizzas[i].name;
        const price = document.createElement('div');
        price.classList.add('card-price');
        price.textContent = pizzas[i].price;
        const image = document.createElement('img');
        image.classList.add('card-image');
        image.src = pizzas[i].image;
        top.appendChild(name);
        top.appendChild(price);
        pizzaCard.appendChild(top);
        pizzaCard.appendChild(image);
        pizzaCardContainer.appendChild(pizzaCard);
    }

    // Pastas
    const pastaContainer = document.createElement('div');
    pastaContainer.classList.add('pasta-container');
    const pastaHeadingContainer = document.createElement('div');
    pastaHeadingContainer.classList.add('pasta-heading-container');
    const pastaHeading = document.createElement('p3');
    pastaHeading.classList.add('pasta-heading');
    pastaHeading.textContent = PASTA_TITLE;
    pastaHeadingContainer.appendChild(pastaHeading);
    pastaContainer.appendChild(pastaHeadingContainer);
    content.appendChild(pastaContainer);
    const pastaCardContainer = document.createElement('div');
    pastaCardContainer.classList.add('pasta-card-container');
    pastaContainer.appendChild(pastaCardContainer);
    for (let i = 0; i < pastas.length; i++) {
        const pastaCard = document.createElement('div');
        pastaCard.classList.add('pasta-card');
        const top = document.createElement('div');
        top.classList.add('pasta-card-top');
        const name = document.createElement('div');
        name.classList.add('card-name');
        name.textContent = pastas[i].name;
        const price = document.createElement('div');
        price.classList.add('card-price');
        price.textContent = pastas[i].price;
        const image = document.createElement('img');
        image.classList.add('card-image');
        image.src = pastas[i].image;
        top.appendChild(name);
        top.appendChild(price);
        pastaCard.appendChild(top);
        pastaCard.appendChild(image);
        pastaCardContainer.appendChild(pastaCard);
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenuTab);

/***/ }),

/***/ "./src/alfredo.jpg":
/*!*************************!*\
  !*** ./src/alfredo.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ee2616ba641d5d79fef3.jpg";

/***/ }),

/***/ "./src/bologna.jpg":
/*!*************************!*\
  !*** ./src/bologna.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "27059cc6a8045821ad19.jpg";

/***/ }),

/***/ "./src/chef.jpg":
/*!**********************!*\
  !*** ./src/chef.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "73522ce9a065823e66c8.jpg";

/***/ }),

/***/ "./src/margherita.jpg":
/*!****************************!*\
  !*** ./src/margherita.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6f8bc7e3d100cdc5ef68.jpg";

/***/ }),

/***/ "./src/penne.jpg":
/*!***********************!*\
  !*** ./src/penne.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4958c262395ee962cc90.jpg";

/***/ }),

/***/ "./src/pepperoni.jpg":
/*!***************************!*\
  !*** ./src/pepperoni.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3a67b28353d100fecf7a.jpg";

/***/ }),

/***/ "./src/pizza.jpg":
/*!***********************!*\
  !*** ./src/pizza.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "67f474f0beae80cbdbbf.jpg";

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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _load_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./load-page */ "./src/load-page.js");
/* harmony import */ var _contact_tab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-tab */ "./src/contact-tab.js");
/* harmony import */ var _home_tab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-tab */ "./src/home-tab.js");
/* harmony import */ var _menu_tab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu-tab */ "./src/menu-tab.js");






const PageController = (function () {

    let content = null;

    const initialise = () => {
        (0,_load_page__WEBPACK_IMPORTED_MODULE_1__["default"])();
        setEventListeners();
        content = document.querySelector('.content');
        appendHomeTab();
    };

    const setEventListeners = () => {
        document.querySelector('.home-button').addEventListener('click', appendHomeTab);
        document.querySelector('.menu-button').addEventListener('click', appendMenuTab);
        document.querySelector('.contact-button').addEventListener('click', appendContactTab);
    };

    const appendHomeTab = () => {
        clearContent();
        (0,_home_tab__WEBPACK_IMPORTED_MODULE_3__["default"])();
    };

    const appendMenuTab = () => {
        clearContent();
        (0,_menu_tab__WEBPACK_IMPORTED_MODULE_4__["default"])();
    };

    const appendContactTab = () => {
        clearContent();
        (0,_contact_tab__WEBPACK_IMPORTED_MODULE_2__["default"])();
    };

    const clearContent = () => { 
        while (content.lastChild) {
            content.removeChild(content.lastChild);
        }
    };

    return { initialise };
})();

PageController.initialise();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQnFCO0FBQ2M7QUFDUTtBQUNOO0FBQ0E7O0FBRXJDOztBQUVBOztBQUVBO0FBQ0EsUUFBUSxzREFBUTtBQUNoQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLHFEQUFXO0FBQ25COztBQUVBO0FBQ0E7QUFDQSxRQUFRLHFEQUFXO0FBQ25COztBQUVBO0FBQ0E7QUFDQSxRQUFRLHdEQUFjO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiLENBQUM7O0FBRUQsNEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvY29udGFjdC10YWIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9ob21lLXRhYi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2xvYWQtcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21lbnUtdGFiLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9waXp6YS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJhbGV3YXk6d2dodEAyMDA7NDAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tZm9udC1mYW1pbHktbWFpbjogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xcblxcbiAgICAvKiBjb2xvdXJzICovXFxuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjFkZTtcXG4gICAgLS1hY2NlbnQtY29sb3I6ICMzZDQwNWI7XFxuICAgIC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3I6ICNmMmNjOGY7XFxuICAgIC0tY29udGVudC1iYWNrZ3JvdW5kLWNvbG9yOiAjZTdkOGIxO1xcbn1cXG5cXG4qIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3gtc2hhZG93OiAwcHggNnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuNTc1KTtcXG59XFxuXFxuLmltYWdlLW92ZXJsYXkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ucGFnZS10aXRsZSB7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseS1tYWluKTtcXG4gICAgZm9udC13ZWlnaHQ6ICAyMDA7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGNvbG9yOiBhbGljZWJsdWU7XFxufVxcblxcbi5jYXJkLWltYWdlIHtcXG4gICAgaGVpZ2h0OiAyNTBweDtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbi5uYXZiYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxNnB4O1xcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xcbn1cXG5cXG4uaG9tZS1idXR0b24sXFxuLm1lbnUtYnV0dG9uLFxcbi5jb250YWN0LWJ1dHRvbiB7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseS1tYWluKTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgICB3aWR0aDogMTMwcHg7XFxuICAgIGhlaWdodDogMzZweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNjcpO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTZweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseS1tYWluKTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDMycHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udGVzdGltb25pYWwtY29udGFpbmVyIHtcXG4gICAgbWFyZ2luLXRvcDogMTZweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4udGVzdGltb25pYWwtY29udGFpbmVyLFxcbi5ob3Vycy1jb250YWluZXIsXFxuLmxvY2F0aW9uLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbnRlbnQtYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgcGFkZGluZzogMzJweDtcXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE4NSk7XFxufVxcblxcbi5ob3Vycy1jb250YWluZXIsXFxuLmxvY2F0aW9uLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTZweDtcXG59XFxuXFxuLnRlc3RpbW9uaWFsLWNpdGUge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLXRvcDogMTZweDtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbi5ob3Vycy10aXRsZSxcXG4ubG9jYXRpb24tdGl0bGUge1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5cXG4ubWVudS1oZWFkaW5nLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHktbWFpbik7XFxuICAgIFxcbn1cXG5cXG4ubWVudS1oZWFkaW5nLWNvbnRhaW5lciA+ICoge1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4ucGl6emEtY29udGFpbmVyLFxcbi5wYXN0YS1jb250YWluZXIge1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250ZW50LWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxNnB4O1xcbiAgICBwYWRkaW5nOiAxNnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJveC1zaGFkb3c6IDNweCAzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xODUpO1xcbn1cXG5cXG4ucGl6emEtY2FyZC1jb250YWluZXIsXFxuLnBhc3RhLWNhcmQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMTZweDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBcXG59XFxuXFxuLmNhcmQtcHJpY2Uge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucGl6emEtY2FyZCxcXG4ucGFzdGEtY2FyZCB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxufVxcblxcbi5waXp6YS1jYXJkLXRvcCxcXG4ucGFzdGEtY2FyZC10b3Age1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG59XFxuXFxuLnBpenphLWhlYWRpbmcsXFxuLnBhc3RhLWhlYWRpbmcge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmNvbnRhY3QtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udGVudC1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgbWFyZ2luLXRvcDogMTZweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTg1KTtcXG4gICAgcGFkZGluZzogMzJweDtcXG59XFxuXFxuLmNvbnRhY3QtZm9ybSB7XFxuICAgIG1hcmdpbi10b3A6IDE2cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogOHB4O1xcbn1cXG5cXG4uY29udGFjdC1oZWFkaW5nIHtcXG4gICAgZm9udC13ZWlnaHQ6IDIwMHB4O1xcbn1cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIE1PQklMRSAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg0MnB4KSB7XFxuICAgIFxcbiAgICBcXG5cXG4gICAgLmltYWdlLW92ZXJsYXkge1xcbiAgICAgICAgcGFkZGluZzogMTZweDtcXG4gICAgfVxcblxcbiAgICAucGFnZS10aXRsZSB7XFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLm5hdmJhciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogMTZweDtcXG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XFxuICAgICAgICB3aWR0aDogODAlO1xcbiAgICB9XFxuXFxuICAgIC5ob21lLWJ1dHRvbixcXG4gICAgLm1lbnUtYnV0dG9uLFxcbiAgICAuY29udGFjdC1idXR0b24ge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgLnRlc3RpbW9uaWFsLWNvbnRhaW5lcixcXG4gICAgLmhvdXJzLWNvbnRhaW5lcixcXG4gICAgLmxvY2F0aW9uLWNvbnRhaW5lciB7XFxuICAgICAgICB3aWR0aDogODAlO1xcbiAgICB9XFxuXFxuICAgIC5waXp6YS1jYXJkLWNvbnRhaW5lcixcXG4gICAgLnBhc3RhLWNhcmQtY29udGFpbmVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuXFxuICAgIC5jYXJkLWltYWdlIHtcXG4gICAgICAgIHdpZHRoOiAzNTBweDtcXG4gICAgICAgIGhlaWdodDogMzUwcHg7XFxuICAgIH1cXG5cXG4gICAgLmNvbnRhY3QtY29udGFpbmVyIHtcXG4gICAgICAgIHdpZHRoOiA4MCU7XFxuICAgIH1cXG5cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLHlDQUF5Qzs7SUFFekMsWUFBWTtJQUNaLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsa0NBQWtDO0lBQ2xDLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1Qsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtREFBOEI7SUFDOUIsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2Qiw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxnQkFBZ0I7QUFDcEI7O0FBRUE7OztJQUdJLG9DQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixnREFBZ0Q7SUFDaEQscUNBQXFDO0lBQ3JDLGtCQUFrQjtJQUNsQiw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLG9DQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7O0FBRUE7OztJQUdJLFVBQVU7SUFDVixpREFBaUQ7SUFDakQsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYiw0Q0FBNEM7QUFDaEQ7O0FBRUE7O0lBRUksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsb0NBQW9DOztBQUV4Qzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxVQUFVO0lBQ1YsaURBQWlEO0lBQ2pELGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQiw0Q0FBNEM7QUFDaEQ7O0FBRUE7O0lBRUksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1QsZUFBZTs7QUFFbkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBOztJQUVJLE9BQU87SUFDUCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjs7QUFFdkI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGlEQUFpRDtJQUNqRCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLDRDQUE0QztJQUM1QyxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBLHNFQUFzRTs7QUFFdEU7Ozs7SUFJSTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxlQUFlO1FBQ2Ysa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksYUFBYTtRQUNiLHNCQUFzQjtRQUN0Qix1QkFBdUI7UUFDdkIsbUJBQW1CO1FBQ25CLFNBQVM7UUFDVCxnQkFBZ0I7UUFDaEIsVUFBVTtJQUNkOztJQUVBOzs7UUFHSSxXQUFXO0lBQ2Y7O0lBRUE7OztRQUdJLFVBQVU7SUFDZDs7SUFFQTs7UUFFSSxhQUFhO1FBQ2Isc0JBQXNCO0lBQzFCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7O0FBRUpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UmFsZXdheTp3Z2h0QDIwMDs0MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3Qge1xcbiAgICAtLWZvbnQtZmFtaWx5LW1haW46ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXG5cXG4gICAgLyogY29sb3VycyAqL1xcbiAgICAtLWJhY2tncm91bmQtY29sb3I6ICNmNGYxZGU7XFxuICAgIC0tYWNjZW50LWNvbG9yOiAjM2Q0MDViO1xcbiAgICAtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZjJjYzhmO1xcbiAgICAtLWNvbnRlbnQtYmFja2dyb3VuZC1jb2xvcjogI2U3ZDhiMTtcXG59XFxuXFxuKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuL3BpenphLmpwZycpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3gtc2hhZG93OiAwcHggNnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuNTc1KTtcXG59XFxuXFxuLmltYWdlLW92ZXJsYXkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ucGFnZS10aXRsZSB7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseS1tYWluKTtcXG4gICAgZm9udC13ZWlnaHQ6ICAyMDA7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGNvbG9yOiBhbGljZWJsdWU7XFxufVxcblxcbi5jYXJkLWltYWdlIHtcXG4gICAgaGVpZ2h0OiAyNTBweDtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbi5uYXZiYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxNnB4O1xcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xcbn1cXG5cXG4uaG9tZS1idXR0b24sXFxuLm1lbnUtYnV0dG9uLFxcbi5jb250YWN0LWJ1dHRvbiB7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseS1tYWluKTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgICB3aWR0aDogMTMwcHg7XFxuICAgIGhlaWdodDogMzZweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNjcpO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTZweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseS1tYWluKTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDMycHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udGVzdGltb25pYWwtY29udGFpbmVyIHtcXG4gICAgbWFyZ2luLXRvcDogMTZweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4udGVzdGltb25pYWwtY29udGFpbmVyLFxcbi5ob3Vycy1jb250YWluZXIsXFxuLmxvY2F0aW9uLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbnRlbnQtYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgcGFkZGluZzogMzJweDtcXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE4NSk7XFxufVxcblxcbi5ob3Vycy1jb250YWluZXIsXFxuLmxvY2F0aW9uLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTZweDtcXG59XFxuXFxuLnRlc3RpbW9uaWFsLWNpdGUge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLXRvcDogMTZweDtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbi5ob3Vycy10aXRsZSxcXG4ubG9jYXRpb24tdGl0bGUge1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5cXG4ubWVudS1oZWFkaW5nLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHktbWFpbik7XFxuICAgIFxcbn1cXG5cXG4ubWVudS1oZWFkaW5nLWNvbnRhaW5lciA+ICoge1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4ucGl6emEtY29udGFpbmVyLFxcbi5wYXN0YS1jb250YWluZXIge1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250ZW50LWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxNnB4O1xcbiAgICBwYWRkaW5nOiAxNnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJveC1zaGFkb3c6IDNweCAzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xODUpO1xcbn1cXG5cXG4ucGl6emEtY2FyZC1jb250YWluZXIsXFxuLnBhc3RhLWNhcmQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMTZweDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBcXG59XFxuXFxuLmNhcmQtcHJpY2Uge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucGl6emEtY2FyZCxcXG4ucGFzdGEtY2FyZCB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxufVxcblxcbi5waXp6YS1jYXJkLXRvcCxcXG4ucGFzdGEtY2FyZC10b3Age1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG59XFxuXFxuLnBpenphLWhlYWRpbmcsXFxuLnBhc3RhLWhlYWRpbmcge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmNvbnRhY3QtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udGVudC1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgbWFyZ2luLXRvcDogMTZweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTg1KTtcXG4gICAgcGFkZGluZzogMzJweDtcXG59XFxuXFxuLmNvbnRhY3QtZm9ybSB7XFxuICAgIG1hcmdpbi10b3A6IDE2cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogOHB4O1xcbn1cXG5cXG4uY29udGFjdC1oZWFkaW5nIHtcXG4gICAgZm9udC13ZWlnaHQ6IDIwMHB4O1xcbn1cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIE1PQklMRSAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg0MnB4KSB7XFxuICAgIFxcbiAgICBcXG5cXG4gICAgLmltYWdlLW92ZXJsYXkge1xcbiAgICAgICAgcGFkZGluZzogMTZweDtcXG4gICAgfVxcblxcbiAgICAucGFnZS10aXRsZSB7XFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLm5hdmJhciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogMTZweDtcXG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XFxuICAgICAgICB3aWR0aDogODAlO1xcbiAgICB9XFxuXFxuICAgIC5ob21lLWJ1dHRvbixcXG4gICAgLm1lbnUtYnV0dG9uLFxcbiAgICAuY29udGFjdC1idXR0b24ge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgLnRlc3RpbW9uaWFsLWNvbnRhaW5lcixcXG4gICAgLmhvdXJzLWNvbnRhaW5lcixcXG4gICAgLmxvY2F0aW9uLWNvbnRhaW5lciB7XFxuICAgICAgICB3aWR0aDogODAlO1xcbiAgICB9XFxuXFxuICAgIC5waXp6YS1jYXJkLWNvbnRhaW5lcixcXG4gICAgLnBhc3RhLWNhcmQtY29udGFpbmVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuXFxuICAgIC5jYXJkLWltYWdlIHtcXG4gICAgICAgIHdpZHRoOiAzNTBweDtcXG4gICAgICAgIGhlaWdodDogMzUwcHg7XFxuICAgIH1cXG5cXG4gICAgLmNvbnRhY3QtY29udGFpbmVyIHtcXG4gICAgICAgIHdpZHRoOiA4MCU7XFxuICAgIH1cXG5cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlxuY29uc3QgQ09OVEFDVF9USVRMRSA9IFwiQ29udGFjdCBTYWxcIjtcbmNvbnN0IE5BTUUgPSBcIlNhbCBTYWx2ZXJzb25cIjtcbmNvbnN0IFBST0ZFU1NJT04gPSBcIlBpenphIENoZWZcIjtcbmNvbnN0IFBIT05FID0gXCI1NTUtNTU1LTU1NjZcIjtcbmNvbnN0IEVNQUlMID0gXCJzYWwuc2FsdmVyc29uQHNhbHNwaXp6YS5jb21cIjtcblxuZnVuY3Rpb24gbG9hZENvbnRhY3RUYWIgKCkge1xuXG4gICAgLy8gQ29udGFjdFxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIGNvbnN0IGNvbnRhY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtY29udGFpbmVyJyk7XG4gICAgY29uc3QgY29udGFjdEhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbnRhY3RIZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtaGVhZGluZycpO1xuICAgIGNvbnRhY3RIZWFkaW5nLnRleHRDb250ZW50ID0gQ09OVEFDVF9USVRMRTtcbiAgICBjb25zdCBjb250YWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3RGb3JtLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtZm9ybScpO1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbmFtZS50ZXh0Q29udGVudCA9IE5BTUU7XG4gICAgY29uc3QgcHJvZmVzc2lvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwcm9mZXNzaW9uLnRleHRDb250ZW50ID0gUFJPRkVTU0lPTjtcbiAgICBjb25zdCBwaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwaG9uZS50ZXh0Q29udGVudCA9IFBIT05FO1xuICAgIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGVtYWlsLnRleHRDb250ZW50ID0gRU1BSUw7XG4gICAgY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQobmFtZSk7XG4gICAgY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQocHJvZmVzc2lvbik7XG4gICAgY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQocGhvbmUpO1xuICAgIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKGVtYWlsKTtcbiAgICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RIZWFkaW5nKTtcbiAgICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RGb3JtKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3RDb250YWluZXIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkQ29udGFjdFRhYjsiLCJjb25zdCBURVNUSU1PTklBTF9URVhUID0gXCJTYWwgbWFrZXMgdGhlIGJlc3QgcGl6emEhIFRoZSBhdG1vc3BoZXJlIGFuZCBjdXN0b21lciBzZXJ2aWNlIG1ha2UgeW91IGZlZWwgbGlrZSB5b3UgYXJlIHNpdHRpbmcgaW4gdGhlIG1pZGRsZSBvZiBOZXcgWW9yaywgZWF0aW5nIGF1dGhlbnRpYyBOZXcgWW9yayBwaXp6YSEgVGhpcyBpcyBleGFjdGx5IHRoZSBraW5kIG9mIHBsYWNlIHRoYXQgSSBsaWtlIHRvIHJldHVybiB0byBhZ2FpbiBhbmQgYWdhaW4uXCI7XG5jb25zdCBURVNUSU1PTklBTF9DSVRFID0gXCItIEZyZWRlcmlja1wiO1xuY29uc3QgSE9VUlNfSEVBRElORyA9IFwiSG91cnNcIjtcbmNvbnN0IEhPVVJTID0gW1xuICAgIFwiU3VuZGF5OiA4YW0gLSA4cG1cIixcbiAgICBcIk1vbmRheTogNmFtIC0gNnBtXCIsXG4gICAgXCJUdWVzZGF5OiA2YW0gLSA2cG1cIixcbiAgICBcIldlZG5lc2RheTogNmFtIC0gNnBtXCIsXG4gICAgXCJUaHVyc2RheTogNmFtIC0gMTBwbVwiLFxuICAgIFwiRnJpZGF5OiA2YW0gLSAxMHBtXCIsXG4gICAgXCJTYXR1cmRheTogOGFtIC0gMTBwbVwiXG5dO1xuY29uc3QgTE9DQVRJT05fVElUTEUgPSBcIkxvY2F0aW9uXCI7XG5jb25zdCBMT0NBVElPTl9URVhUID0gXCIxMjMgTmV3IFlvcmsgRHJpdmUsIEZvcmVzdHZpbGxlLCBNYWluZVwiO1xuXG5cbmZ1bmN0aW9uIGxvYWRIb21lVGFiICgpIHtcbiAgICBcbiAgICAvLyBUZXN0aW1vbmlhbFxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIGNvbnN0IHRlc3RpbW9uaWFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGVzdGltb25pYWwuY2xhc3NMaXN0LmFkZCgndGVzdGltb25pYWwtY29udGFpbmVyJyk7XG4gICAgY29uc3QgYmxvY2txdW90ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Jsb2NrcXVvdGUnKTtcbiAgICBibG9ja3F1b3RlLnRleHRDb250ZW50ID0gVEVTVElNT05JQUxfVEVYVDtcbiAgICBibG9ja3F1b3RlLmNsYXNzTGlzdC5hZGQoJ3Rlc3RpbW9uaWFsLXRleHQnKTtcbiAgICBjb25zdCBjaXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2l0ZScpO1xuICAgIGNpdGUudGV4dENvbnRlbnQgPSBURVNUSU1PTklBTF9DSVRFO1xuICAgIGNpdGUuY2xhc3NMaXN0LmFkZCgndGVzdGltb25pYWwtY2l0ZScpO1xuICAgIHRlc3RpbW9uaWFsLmFwcGVuZENoaWxkKGJsb2NrcXVvdGUpO1xuICAgIHRlc3RpbW9uaWFsLmFwcGVuZENoaWxkKGNpdGUpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGVzdGltb25pYWwpO1xuXG4gICAgLy8gSG91cnNcbiAgICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhvdXJzLmNsYXNzTGlzdC5hZGQoJ2hvdXJzLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdob3Vycy10aXRsZScpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gSE9VUlNfSEVBRElORztcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaG91cnMtdGV4dC1jb250YWluZXInKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IEhPVVJTLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBwLnRleHRDb250ZW50ID0gSE9VUlNbaV07XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwKTtcbiAgICB9XG4gICAgaG91cnMuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGhvdXJzLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChob3Vycyk7XG5cbiAgICAvLyBMb2NhdGlvblxuICAgIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbG9jYXRpb24uY2xhc3NMaXN0LmFkZCgnbG9jYXRpb24tY29udGFpbmVyJyk7XG4gICAgY29uc3QgbG9jYXRpb25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgbG9jYXRpb25UaXRsZS5jbGFzc0xpc3QuYWRkKCdsb2NhdGlvbi10aXRsZScpO1xuICAgIGxvY2F0aW9uVGl0bGUudGV4dENvbnRlbnQgPSBMT0NBVElPTl9USVRMRTtcbiAgICBjb25zdCBsb2NhdGlvblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbG9jYXRpb25UZXh0LmNsYXNzTGlzdC5hZGQoJ2xvY2F0aW9uLXRleHQnKTtcbiAgICBsb2NhdGlvblRleHQudGV4dENvbnRlbnQgPSBMT0NBVElPTl9URVhUO1xuICAgIGxvY2F0aW9uLmFwcGVuZENoaWxkKGxvY2F0aW9uVGl0bGUpO1xuICAgIGxvY2F0aW9uLmFwcGVuZENoaWxkKGxvY2F0aW9uVGV4dCk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChsb2NhdGlvbik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRIb21lVGFiOyIsIlxuY29uc3QgUEFHRV9USVRMRSA9IFwiU2FsJ3MgUGl6emEgYW5kIFBhc3RhXCI7XG5jb25zdCBIT01FX0JVVFRPTl9URVhUID0gXCJIb21lXCI7XG5jb25zdCBNRU5VX0JVVFRPTl9URVhUID0gXCJNZW51XCI7XG5jb25zdCBDT05UQUNUX0JVVFRPTl9URVhUID0gXCJDb250YWN0XCI7XG5cbi8vIFRoaXMgbG9hZHMgdGhlIGluaXRpYWwgcGFnZS5cbmZ1bmN0aW9uIGxvYWRQYWdlICgpIHtcblxuICAgIC8vIEhlYWRlclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnaW1hZ2Utb3ZlcmxheScpO1xuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGhlYWRpbmcuY2xhc3NMaXN0LmFkZCgncGFnZS10aXRsZScpO1xuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBQQUdFX1RJVExFO1xuICAgIG92ZXJsYXkuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChvdmVybGF5KTtcblxuICAgIC8vIE5hdmJhclxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICAgIG5hdi5jbGFzc0xpc3QuYWRkKCduYXZiYXInKTtcbiAgICBjb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaG9tZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdob21lLWJ1dHRvbicpO1xuICAgIGhvbWVCdXR0b24udGV4dENvbnRlbnQgPSBIT01FX0JVVFRPTl9URVhUO1xuICAgIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBtZW51QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ21lbnUtYnV0dG9uJyk7XG4gICAgbWVudUJ1dHRvbi50ZXh0Q29udGVudCA9IE1FTlVfQlVUVE9OX1RFWFQ7XG4gICAgY29uc3QgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnRhY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnY29udGFjdC1idXR0b24nKTtcbiAgICBjb250YWN0QnV0dG9uLnRleHRDb250ZW50ID0gQ09OVEFDVF9CVVRUT05fVEVYVDtcbiAgICBib2R5LmFwcGVuZENoaWxkKG5hdik7XG4gICAgbmF2LmFwcGVuZENoaWxkKGhvbWVCdXR0b24pO1xuICAgIG5hdi5hcHBlbmRDaGlsZChtZW51QnV0dG9uKTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQoY29udGFjdEJ1dHRvbik7XG5cbiAgICAvLyBDb250ZW50XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY29udGVudCcpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRQYWdlOyIsIlxuaW1wb3J0IHBlcHBlcm9uaUltYWdlIGZyb20gJy4vcGVwcGVyb25pLmpwZyc7XG5pbXBvcnQgbWVyZ2hlcml0YUltYWdlIGZyb20gJy4vbWFyZ2hlcml0YS5qcGcnO1xuaW1wb3J0IGNoZWZJbWFnZSBmcm9tICcuL2NoZWYuanBnJztcblxuaW1wb3J0IGFsZnJlZG9JbWFnZSBmcm9tICcuL2FsZnJlZG8uanBnJztcbmltcG9ydCBwZW5uZUltYWdlIGZyb20gJy4vcGVubmUuanBnJztcbmltcG9ydCBib2xvZ25hSW1hZ2UgZnJvbSAnLi9ib2xvZ25hLmpwZyc7XG5cbmNvbnN0IFBJWlpBX1RJVExFID0gXCJQaXp6YVwiO1xuY29uc3QgUEFTVEFfVElUTEUgPSBcIlBhc3RhXCI7XG5jb25zdCBNRU5VX1RJVExFID0gXCJNZW51XCI7XG5jb25zdCBwaXp6YXMgPSBbXG4gICAge25hbWU6IFwiUGVwcGVyb25pXCIsIHByaWNlOiBcIjE3XCIsIGltYWdlOiBwZXBwZXJvbmlJbWFnZX0sXG4gICAge25hbWU6IFwiTWFyZ2hlcml0YVwiLCBwcmljZTogXCIxOVwiLCBpbWFnZTogbWVyZ2hlcml0YUltYWdlfSxcbiAgICB7bmFtZTogXCJDaGVmJ3MgU3BlY2lhbFwiLCBwcmljZTogXCIxOVwiLCBpbWFnZTogY2hlZkltYWdlfVxuXTtcblxuY29uc3QgcGFzdGFzID0gW1xuICAgIHtuYW1lOiBcIkFsZnJlZG9cIiwgcHJpY2U6IFwiMTFcIiwgaW1hZ2U6IGFsZnJlZG9JbWFnZX0sXG4gICAge25hbWU6IFwiUGVubmVcIiwgcHJpY2U6IFwiMTFcIiwgaW1hZ2U6IHBlbm5lSW1hZ2V9LFxuICAgIHtuYW1lOiBcIkJvbG9nbmFcIiwgcHJpY2U6IFwiMTNcIiwgaW1hZ2U6IGJvbG9nbmFJbWFnZX1cbl07XG5cbmZ1bmN0aW9uIGxvYWRNZW51VGFiICgpIHtcbiAgICAvLyBIZWFkaW5nXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgY29uc3QgbWVudUhlYWRpbmdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51SGVhZGluZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZW51LWhlYWRpbmctY29udGFpbmVyJyk7XG4gICAgY29uc3QgbWVudUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIG1lbnVIZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ21lbnUtaGVhZGluZycpO1xuICAgIG1lbnVIZWFkaW5nLnRleHRDb250ZW50ID0gTUVOVV9USVRMRTtcbiAgICBtZW51SGVhZGluZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51SGVhZGluZyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtZW51SGVhZGluZ0NvbnRhaW5lcik7XG5cbiAgICAvLyBQaXp6YXNcbiAgICBjb25zdCBwaXp6YUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBpenphQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3BpenphLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IHBpenphSGVhZGluZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBpenphSGVhZGluZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwaXp6YS1oZWFkaW5nLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IHBpenphSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AzJyk7XG4gICAgcGl6emFIZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ3BpenphLWhlYWRpbmcnKTtcbiAgICBwaXp6YUhlYWRpbmcudGV4dENvbnRlbnQgPSBQSVpaQV9USVRMRTtcbiAgICBwaXp6YUhlYWRpbmdDb250YWluZXIuYXBwZW5kQ2hpbGQocGl6emFIZWFkaW5nKTtcbiAgICBwaXp6YUNvbnRhaW5lci5hcHBlbmRDaGlsZChwaXp6YUhlYWRpbmdDb250YWluZXIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGl6emFDb250YWluZXIpO1xuICAgIGNvbnN0IHBpenphQ2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBpenphQ2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwaXp6YS1jYXJkLWNvbnRhaW5lcicpO1xuICAgIHBpenphQ29udGFpbmVyLmFwcGVuZENoaWxkKHBpenphQ2FyZENvbnRhaW5lcik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwaXp6YXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgcGl6emFDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHBpenphQ2FyZC5jbGFzc0xpc3QuYWRkKCdwaXp6YS1jYXJkJyk7XG4gICAgICAgIGNvbnN0IHRvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0b3AuY2xhc3NMaXN0LmFkZCgncGl6emEtY2FyZC10b3AnKTtcbiAgICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBuYW1lLmNsYXNzTGlzdC5hZGQoJ2NhcmQtbmFtZScpO1xuICAgICAgICBuYW1lLnRleHRDb250ZW50ID0gcGl6emFzW2ldLm5hbWU7XG4gICAgICAgIGNvbnN0IHByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByaWNlLmNsYXNzTGlzdC5hZGQoJ2NhcmQtcHJpY2UnKTtcbiAgICAgICAgcHJpY2UudGV4dENvbnRlbnQgPSBwaXp6YXNbaV0ucHJpY2U7XG4gICAgICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGltYWdlLmNsYXNzTGlzdC5hZGQoJ2NhcmQtaW1hZ2UnKTtcbiAgICAgICAgaW1hZ2Uuc3JjID0gcGl6emFzW2ldLmltYWdlO1xuICAgICAgICB0b3AuYXBwZW5kQ2hpbGQobmFtZSk7XG4gICAgICAgIHRvcC5hcHBlbmRDaGlsZChwcmljZSk7XG4gICAgICAgIHBpenphQ2FyZC5hcHBlbmRDaGlsZCh0b3ApO1xuICAgICAgICBwaXp6YUNhcmQuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICAgICAgICBwaXp6YUNhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQocGl6emFDYXJkKTtcbiAgICB9XG5cbiAgICAvLyBQYXN0YXNcbiAgICBjb25zdCBwYXN0YUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBhc3RhQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Bhc3RhLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IHBhc3RhSGVhZGluZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBhc3RhSGVhZGluZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwYXN0YS1oZWFkaW5nLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IHBhc3RhSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AzJyk7XG4gICAgcGFzdGFIZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ3Bhc3RhLWhlYWRpbmcnKTtcbiAgICBwYXN0YUhlYWRpbmcudGV4dENvbnRlbnQgPSBQQVNUQV9USVRMRTtcbiAgICBwYXN0YUhlYWRpbmdDb250YWluZXIuYXBwZW5kQ2hpbGQocGFzdGFIZWFkaW5nKTtcbiAgICBwYXN0YUNvbnRhaW5lci5hcHBlbmRDaGlsZChwYXN0YUhlYWRpbmdDb250YWluZXIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGFzdGFDb250YWluZXIpO1xuICAgIGNvbnN0IHBhc3RhQ2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBhc3RhQ2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwYXN0YS1jYXJkLWNvbnRhaW5lcicpO1xuICAgIHBhc3RhQ29udGFpbmVyLmFwcGVuZENoaWxkKHBhc3RhQ2FyZENvbnRhaW5lcik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXN0YXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgcGFzdGFDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHBhc3RhQ2FyZC5jbGFzc0xpc3QuYWRkKCdwYXN0YS1jYXJkJyk7XG4gICAgICAgIGNvbnN0IHRvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0b3AuY2xhc3NMaXN0LmFkZCgncGFzdGEtY2FyZC10b3AnKTtcbiAgICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBuYW1lLmNsYXNzTGlzdC5hZGQoJ2NhcmQtbmFtZScpO1xuICAgICAgICBuYW1lLnRleHRDb250ZW50ID0gcGFzdGFzW2ldLm5hbWU7XG4gICAgICAgIGNvbnN0IHByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByaWNlLmNsYXNzTGlzdC5hZGQoJ2NhcmQtcHJpY2UnKTtcbiAgICAgICAgcHJpY2UudGV4dENvbnRlbnQgPSBwYXN0YXNbaV0ucHJpY2U7XG4gICAgICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGltYWdlLmNsYXNzTGlzdC5hZGQoJ2NhcmQtaW1hZ2UnKTtcbiAgICAgICAgaW1hZ2Uuc3JjID0gcGFzdGFzW2ldLmltYWdlO1xuICAgICAgICB0b3AuYXBwZW5kQ2hpbGQobmFtZSk7XG4gICAgICAgIHRvcC5hcHBlbmRDaGlsZChwcmljZSk7XG4gICAgICAgIHBhc3RhQ2FyZC5hcHBlbmRDaGlsZCh0b3ApO1xuICAgICAgICBwYXN0YUNhcmQuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICAgICAgICBwYXN0YUNhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQocGFzdGFDYXJkKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRNZW51VGFiOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGxvYWRQYWdlIGZyb20gJy4vbG9hZC1wYWdlJztcbmltcG9ydCBsb2FkQ29udGFjdFRhYiBmcm9tICcuL2NvbnRhY3QtdGFiJztcbmltcG9ydCBsb2FkSG9tZVRhYiBmcm9tICcuL2hvbWUtdGFiJztcbmltcG9ydCBsb2FkTWVudVRhYiBmcm9tICcuL21lbnUtdGFiJztcblxuY29uc3QgUGFnZUNvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKCkge1xuXG4gICAgbGV0IGNvbnRlbnQgPSBudWxsO1xuXG4gICAgY29uc3QgaW5pdGlhbGlzZSA9ICgpID0+IHtcbiAgICAgICAgbG9hZFBhZ2UoKTtcbiAgICAgICAgc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgICAgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgICAgIGFwcGVuZEhvbWVUYWIoKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0RXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lLWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXBwZW5kSG9tZVRhYik7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXBwZW5kTWVudVRhYik7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0LWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXBwZW5kQ29udGFjdFRhYik7XG4gICAgfTtcblxuICAgIGNvbnN0IGFwcGVuZEhvbWVUYWIgPSAoKSA9PiB7XG4gICAgICAgIGNsZWFyQ29udGVudCgpO1xuICAgICAgICBsb2FkSG9tZVRhYigpO1xuICAgIH07XG5cbiAgICBjb25zdCBhcHBlbmRNZW51VGFiID0gKCkgPT4ge1xuICAgICAgICBjbGVhckNvbnRlbnQoKTtcbiAgICAgICAgbG9hZE1lbnVUYWIoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgYXBwZW5kQ29udGFjdFRhYiA9ICgpID0+IHtcbiAgICAgICAgY2xlYXJDb250ZW50KCk7XG4gICAgICAgIGxvYWRDb250YWN0VGFiKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGNsZWFyQ29udGVudCA9ICgpID0+IHsgXG4gICAgICAgIHdoaWxlIChjb250ZW50Lmxhc3RDaGlsZCkge1xuICAgICAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50Lmxhc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIHsgaW5pdGlhbGlzZSB9O1xufSkoKTtcblxuUGFnZUNvbnRyb2xsZXIuaW5pdGlhbGlzZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==