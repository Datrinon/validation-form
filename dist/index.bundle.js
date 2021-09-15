/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\r\n.req-met {\r\n  color: green;\r\n}\r\n\r\n.req-met:after{\r\n  content: \"✔\";\r\n  position: absolute;\r\n  right: 0px;\r\n}\r\n\r\n.error.active {\r\n  color: red;\r\n}", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":";AACA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,UAAU;AACZ","sourcesContent":["\r\n.req-met {\r\n  color: green;\r\n}\r\n\r\n.req-met:after{\r\n  content: \"✔\";\r\n  position: absolute;\r\n  right: 0px;\r\n}\r\n\r\n.error.active {\r\n  color: red;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
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

/***/ "./src/data/plans.csv":
/*!****************************!*\
  !*** ./src/data/plans.csv ***!
  \****************************/
/***/ ((module) => {

module.exports = [{"id":"basic","value":"Basic Plan - FREE (with ads)","default":1},{"id":"pro","value":"Plus Plan - $9.99 / Mo.","default":0},{"id":"premium","value":"Max Plan - $14.99 / Mo.","default":0}]

/***/ }),

/***/ "./src/data/pwRequirements.csv":
/*!*************************************!*\
  !*** ./src/data/pwRequirements.csv ***!
  \*************************************/
/***/ ((module) => {

module.exports = [{"className":"length","textContent":"Contains at least 8 characters."},{"className":"digit","textContent":"Contains at least 1 digit."},{"className":"uppercase","textContent":"Contains at least 1 uppercase letter."},{"className":"lowercase","textContent":"Contains at least 1 lowercase letter."},{"className":"special","textContent":"Contains at least 1 special symbol."}]

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
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
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
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

"use strict";


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

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
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

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/component.js":
/*!**************************!*\
  !*** ./src/component.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Component)
/* harmony export */ });
/**
 * Component class. Contains various DOM elements.
 * Author: datrinon
 * Version: 1.3
 */

class Component {
  

  constructor() {
    this.mql = window.matchMedia("(max-width: 600px)");
  }

  /**
   * Initializes a basic HTML skeleton for the web page, generating a header,
   * main, and sticky footer.
   *
   * @param {*} headerTitle - What the web page is called.
   * @param {bool} emptyHeader - Should the header use a default structure?
   * The default structure looks like [ Logo | | | | Navigation Links]
   * @returns - An array containing references to the generated header, main, and footer.
   */
  initializeStructure(
    headerTitle,
    emptyHeader = false,
    createMonth,
    githubLink
  ) {
    const body = document.body;
    const mainWrapper = this.div("content");
    let header;
    if (emptyHeader) {
      header = document.createElement("header");
    } else {
      header = this.header(headerTitle);
    }
    header.id = "header";

    const main = document.createElement("main");
    const footer = this.footer(createMonth, githubLink);
    main.classList.add("main");

    mainWrapper.append(header, main);
    body.append(mainWrapper, footer);

    return [header, main, footer];
  }

  content() {
    let content = document.createElement("div");
    content.classList.add("content");

    let main = document.createElement("main");
    main.classList.add("main");

    content.append(main);

    return content;
  }

  header(title) {
    let header = document.createElement("header");
    let titleElem = document.createElement("h1");
    let menuButton = document.createElement("i");

    menuButton.id = "menu-button";
    menuButton.classList.add("fas", "fa-bars", "no-display");

    this.mql.addEventListener("change", (e) => {
      if (e.matches) {
        document.querySelector("#menu-button").classList.remove("no-display");
      } else {
        // it bigger than the query rule.
        document.querySelector("#menu-button").classList.add("no-display");
        document.querySelector("#navbar").classList.remove("slide-in-out");
      }
    });

    window.addEventListener("load", function () {
      document.querySelector("#menu-button").addEventListener("click", () => {
        console.log("menu pressed.");
        document.querySelector("#navbar").classList.toggle("slide-in-out");
      });
    });

    header.id = "header";
    // header.style.background = `url(${img})`;

    titleElem.id = "page-title";
    titleElem.textContent = title;

    titleElem.insertBefore(menuButton, titleElem.firstChild);
    header.append(titleElem);

    return header;
  }

  navbar(...links) {
    const nav = document.createElement("nav");
    const linkContainer = document.createElement("ul");

    nav.id = "navbar";
    linkContainer.id = "navbar-buttons-container";

    for (let link of links) {
      const linkButton = document.createElement("li");
      const linkAnchor = document.createElement("a");

      linkButton.classList.add("navbar-button");

      linkAnchor.id = `navlink-${link.replace(" ", "-").toLowerCase()}`;
      linkAnchor.textContent = link;
      linkAnchor.setAttribute("href", "#");

      linkButton.append(linkAnchor);
      linkContainer.append(linkButton);

      // Too specific.
      // linkAnchor.addEventListener("click", (e) => {
      //   let currentSectionId = document.querySelector(".main > section:not(.no-display)").id.toLowerCase();
      //   let chosenSectionId = e.currentTarget.textContent.toLowerCase();

      //   if (currentSectionId !== chosenSectionId) {
      //     document.querySelector(`#${currentSectionId}`).classList.add("no-display");
      //     document.querySelector(`#${chosenSectionId}`).classList.remove("no-display");
      //   }

      // });
    }

    nav.append(linkContainer);

    return nav;
  }

  banner(text, img) {
    let bannerContainer = document.createElement("figure");
    let banner = document.createElement("div");
    let caption = document.createElement("figcaption");

    bannerContainer.id = "banner";
    banner.id = "banner-image";
    caption.id = "banner-caption";

    banner.style.backgroundImage = `url(${img})`;

    caption.textContent = text;

    bannerContainer.append(banner, caption);

    return bannerContainer;
  }

  footer(createMonth, githubLink) {
    let footer = document.createElement("footer");
    footer.classList.add("footer");

    let text = `Created in ${createMonth} 2021. Odin Project x Dan T.`;
    let githubElem = document.createElement("a");
    let ghIcon = this.faIcon("fab", "fa-github-square", "icon");

    githubElem.append(ghIcon);
    githubElem.classList.add("footer-github-icon");
    githubElem.setAttribute("href", githubLink);
    githubElem.setAttribute("target", "_blank");
    githubElem.style.display = "inline-block";

    let p = document.createElement("p");

    p.textContent = text;
    p.append(githubElem);
    footer.append(p);

    return footer;
  }

  /**
   * Create an element with larger, emboldened, text,
   * similar to a pull quote in a magazine.
   *
   * @param msg {string} Text to include in the block quote
   */
  pullquote(msg) {
    let pull = document.createElement("aside");
    pull.textContent = msg;

    pull.classList.add("pull-quote");

    return pull;
  }

  section(id) {
    let element = document.createElement("section");
    element.id = id;
    element.classList.add("section");

    return element;
  }

  /**
   * Creates a text heading element.
   *
   * @param {*} text - The label for the header.
   * @param {*} level - The level of header.
   */
  heading(text, level, ...className) {
    if (level < 1 || level > 6) {
      throw Error("Heading levels can only be between 1 to 6!");
    }
    let header = document.createElement(`h${level}`);

    if (className !== null) {
      header.classList.add(...className);
    }
    header.textContent = text;

    return header;
  }

  paragraph(text, ...className) {
    let p = document.createElement("p");
    p.classList.add(...className);

    p.textContent = text;

    return p;
  }

  img(url, ...className) {
    let image = new Image();
    image.classList.add(...className);

    image.src = url;

    return image;
  }

  div(...className) {
    let div = document.createElement("div");
    div.classList.add(...className);

    return div;
  }

  button(label, ...className) {
    let btn = document.createElement("button");
    btn.classList.add(...className);

    btn.textContent = label;
    return btn;
  }

  /**
   * Generates a basic table with single-cell columns and rows, based on the imported file.
   *
   * @param {csv} data - Data to turn into a table. Please use webpack to import .csv files.
   */
  table(id = "", data) {
    let table = document.createElement("table");
    table.id = id;

    // Generate a table header row.
    let tableHeader = document.createElement("thead");
    let tableHeaderRow = document.createElement("tr");

    for (let col of Object.keys(data[0])) {
      let colCell = document.createElement("th");
      colCell.textContent = col;

      tableHeaderRow.append(colCell);
    }
    tableHeader.append(tableHeaderRow);

    table.append(tableHeader);

    const tableBody = document.createElement("tbody");
    // Generate table rows.
    for (let i = 0; i < data.length; i++) {
      let trow = document.createElement("tr");
      for (let prop in data[i]) {
        let tcell = document.createElement("td");

        tcell.textContent = data[i][prop];
        trow.append(tcell);
      }

      tableBody.append(trow);
    }
    table.append(tableBody);

    return table;
  }

  faIcon(category, name, ...className) {
    let fasIcon = document.createElement("i");
    fasIcon.classList.add(category, name);
    if (className !== null) {
      fasIcon.classList.add(...className);
    }

    return fasIcon;
  }

  span(textContent = null, ...className) {
    let span = document.createElement("span");
    if (className.length !== 0) {
      span.classList.add(...className);
    }
    span.textContent = textContent;

    return span;
  }

  formInput(labelText, type, inputId, name) {
    let label = document.createElement("label");
    label.setAttribute("for", inputId);
    label.textContent = labelText;

    let input = document.createElement("input");
    input.id = inputId;
    input.name = name;
    input.type = type;

    return [label, input];
  }

  dropdown(labelText, name, inputId, ...values) {
    let label = document.createElement("label");
    label.setAttribute("for", inputId);
    label.textContent = labelText;

    let select = document.createElement("select");
    select.setAttribute("name", name);
    select.setAttribute("id", inputId);

    for (let val of values) {
      let entry = document.createElement("option");
      entry.value = val;
      if (isNaN(val) && typeof val === "string") {
        entry.textContent = val[0].toUpperCase() + val.slice(1);
      } else {
        entry.textContent = val;
      }

      select.append(entry);
    }

    return [label, select];
  }

  textArea(labelText, name, inputId) {
    let label = document.createElement("label");
    label.setAttribute("for", inputId);
    label.textContent = labelText;

    let ta = document.createElement("textarea");
    ta.id = inputId;
    ta.setAttribute("name", name);

    return [label, ta];
  }

  /**
   * Create a confirm modal.
   *
   * @param {*} className - Classes the modal should belong to.
   * @param {*} title - The title appearing on the modal.
   * @param {*} message - The message appearing on the modal.
   * @param {*} positiveButtonLabel - Text for the OK button.
   * @param {*} negativeButtonLabel - Text for the cancel button.
   * @param {*} positiveCallback - Function to run if OK is pressed.
   * @param {*} negativeCallback - Function to run if cancel is pressed. 'null' by
   * default, which then just closes the modal.
   *
   * @returns - Returns the generated modal element.
   */
  confirmModal(
    className,
    title,
    message,
    positiveButtonLabel,
    negativeButtonLabel,
    positiveCallback,
    negativeCallback = null
  ) {
    let modalWrapper = this.div();
    modalWrapper.id = "prompt-wrapper";
    let modal = this.div(className);

    const titleHeader = this.heading(title, 1, "modal-header");
    const messageParagraph = this.paragraph(message, "modal-dialog");
    const positiveButton = this.button(positiveButtonLabel, "modal-confirm");
    const negativeButton = this.button(negativeButtonLabel, "modal-cancel");

    const buttonSection = this.div("modal-button-area");

    if (negativeCallback === null) {
      negativeCallback = () => {
        console.log("Negative pressed.");
        modalWrapper.remove();
      };
    }

    // positiveButton.addEventListener("click", positiveCallback);
    positiveButton.addEventListener("click", (e) => {
      positiveCallback(e);
      modalWrapper.remove();
    });
    negativeButton.addEventListener("click", negativeCallback);

    buttonSection.append(positiveButton, negativeButton);
    modal.append(titleHeader, messageParagraph, buttonSection);
    modalWrapper.append(modal);

    // styling moved to .css page.

    return modalWrapper;
  }

  /**
   * Display a brief, unobtrusive pop-up message at the bottom of the screen.
   * @param {*} textContent - The text the message should display.
   * @param {*} duration - The duration of the message in seconds.
   */
  toast(textContent, duration) {
    let toastBox = document.createElement("div");
    let toastMessage = document.createElement("paragraph");
    toastBox.classList.add("toast");
    toastMessage.textContent = textContent;
    toastMessage.classList.add("toast-message");

    toastBox.append(toastMessage);

    let toastBoxCss = "position: fixed; bottom: 10vh;";
    toastBoxCss += "width: 100vw;";
    toastBoxCss += `animation: fade-in-out ${duration}s;`;
    toastBoxCss += "z-index: 9999;";

    let toastMessageCss =
      "margin: 0 auto; width: 300px; display: block; background-color: grey;";
    toastMessageCss +=
      "text-align: center; border: 1px solid black; border-radius: 5px;";
    toastMessageCss += "color: white;";

    toastBox.style.cssText = toastBoxCss;
    toastMessage.style.cssText = toastMessageCss;

    toastBox.addEventListener("animationend", () => {
      toastBox.remove();
    });

    document.body.append(toastBox);
  }
}


/***/ }),

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Form)
/* harmony export */ });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility */ "./src/utility.js");


/**
 * A class for creating form elements with custom validation
* techniques, utilizing the Constraint Validation API. Every input that 
* you give to form is tracked in the inputs field, do use this to assign
* validation to the element with the method attachValidation().
 */
class Form {
  
  /**
   * The form element.
   * @type {HTMLFormElement}
   */
  form;
  /**
   * Contains the form's contents as a ul element.
   */
  #formContents;
  /**
   * The inputs given to the form, arranged in order of addition. 
   * @type {{id : {element : HTMLelement, type : type}}[]}
   */
  inputs;

  constructor(className) {
    this.form = _utility__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("form", className);
    this.#formContents = document.createElement("ul");
    
    this.form.append(this.#formContents);

    this.inputs = {};
  }

  /**
   * Add an input (with an accompanying label) to the form of this instance. A reference to the input 
   * can be obtained through the inputs object field.
   * 
   * @param {string} type - The type of input to add into the form.
   * @param {string} labelText - The label to advise what sort of input is needed.
   * @param {string} id - The id to refer to the input by; label will use this in "for=".
   * @param {boolean} required - Whether or not the input should be required.
   * @param {string} placeholder - The placeholder string to display in the field.
   * @param {string} classNames - Any additional class names assigned to the input.
   */
  addInputToForm(type="text", labelText, id, required, placeholder="", ...classNames) {
    const container = document.createElement("li");
    
    const labelView = document.createElement("label");
    labelView.setAttribute("for", id);
    labelView.textContent = labelText;

    const input = _utility__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("input", "form-input", ...classNames);
    input.setAttribute("type", type);
    input.setAttribute("required", required);
    input.id = id;
    input.name = id;
    input.setAttribute("placeholder", placeholder);

    container.append(labelView, input, _utility__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", "error"));
    
    this.inputs[id] = { element: container, type : type };

    this.#formContents.append(this.inputs[id].element);
  }

  /**
   * Attach a datalist element to an input. Appends it to the input.
   * 
   * @param {string} listId - The name of the list.
   * @param {string[]} list - A list of options to attach to the input.
   * @param {*} inputId - the ID of the input to attach the datalist to.
   */
  attachDatalist(listId, list, inputId) {
    const dataList = document.createElement("datalist");
    const inputField = this.form.querySelector(`#${inputId}`);
    
    inputField.setAttribute("list", listId);
    inputField.insertAdjacentElement("afterend", dataList);

    dataList.id = listId;

    list.forEach(entry => {
      let option = document.createElement("option");
      option.textContent = entry;
      dataList.append(option);
    });

    this.#addDatalistValidation(inputField, list);
  }

  /**
   * Create an options list and add it to the form.
   * 
   * @param {string} title - The title provided to the legend.
   * @param {string} isRadio - if true, then make a radio option list, else checkboxes.
   * @param { {id : string,
   *           value : string,
   *           selected : bool}[]} options 
   * The selections available on the options list.
   * id refers to the id that should be assigned the input. value refers to its textual
   * presentation.
   * @param {string} name - The name of the options list.
   * @param {boolean} required - Does the user need to answer the options list?
   */
  addOptionsListToForm(title, isRadio, options, name, required) {
    const container = document.createElement("li");
    const type = isRadio ? 'radio' : 'checkbox';
    const fieldset = document.createElement("fieldset");
    const legend = document.createElement("legend");

    legend.textContent = title;
    fieldset.append(legend);

    options.forEach(selection => {
      let container = document.createElement("div");
      let input = document.createElement("input");
      let label = document.createElement("label");

      input.setAttribute("type", type);
      input.id = selection.id;
      input.setAttribute("name", name);
      if (Number(selection.default) === 1) {
        input.setAttribute("checked", true);
      }

      label.setAttribute("for", input.id);
      label.textContent = selection.value;  

      container.append(input, label);
      fieldset.append(container);
    });
    
    // to make an options list required, you just need to set required on one field.
    // https://stackoverflow.com/a/8287947/14146474
    if (required) {
      fieldset.querySelector("div input").setAttribute("required", "true");
    }

    this.inputs[name] = { element: fieldset, type: type };

    container.append(fieldset);
    this.#formContents.append(container);
  }
  
  /**
   * Add submit and cancel buttons to the form.
   * @param {string} confirmMsg - Message to display on the confirm.
   * @param {string} cancelMsg - Message to display on cancel.
   */
  addSubmitCancelButtons(confirmMsg, cancelMsg) {
    let submitButton = _utility__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("button", "form-submit");
    let cancelButton = _utility__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("button", "form-cancel");

    submitButton.textContent = confirmMsg;
    cancelButton.textContent = cancelMsg;

    submitButton.setAttribute("type", "submit");
    cancelButton.setAttribute("type", "button");
    
    this.#formContents.append(submitButton, cancelButton);
  }

  /**
   * Adds basic validation for inputs with datalists. Meaning, the given input
   * matches an entry in the list.
   * 
   * @param input {HTMLElement} - An input element with an attached datalist.
   * @param datalist {string[]} - String array representing the list of options.
   */
  #addDatalistValidation(input, datalist) {
    const error = input.parentNode.querySelector(".error");

    input.addEventListener("focusout", () => {
      let userInput = input.value.toLowerCase();
      let found = datalist.findIndex(country => country.toLowerCase() === userInput);
      if (found === -1) {
        // keep this here to catch bad submissions.
        input.setCustomValidity(`Not a valid ${input.name}.`);
        error.classList.add("active");
        error.textContent = `Not a valid ${input.name}.`;
      } else {
        error.textContent = "";
        error.classList.remove("active");
      } 
    });      
  }

  /**
   * Add custom validation to a form input through the use of a callback.
   * The callback will be invoked each time the user moves out of focus of the
   * element.
   * @param {string} inputId - The id of the input to attach the validation to.
   * @param {function} callback - Callback to invoke to check for validation.
   * @param {string} event - The sort of event that causes the validation to be invoked.
   */
  attachValidation(inputId, callback, event="focusout") {
    const input = this.form.querySelector(`#${inputId}`);
    input.addEventListener(event, callback);
  }

  /**
   * Attach an annotation message below an input field. You can pass in multiple
   * messages; each element in the message block will be turned into a separate
   * p element.
   * @param {HTMLElement} inputId - The ID of the input to attach to.
   * @param {{string : string}[]} messages - The messages to include in the annotation.
   * Provide as a key-value pair, with the key being the class name for the element,
   * and the content being the message to show. 
   */
  attachAnnotation(inputId, ...messages) {
    const input = this.form.querySelector(`#${inputId}`);
    const container = _utility__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("ul", `${inputId}-annotations`);
    // convert messages into a 1D array.
    messages = messages.reduce((messages, message) => {
      return messages.concat(message);
    }, []);

    messages.forEach((msg) => {
      let note = document.createElement("li");
      note.className = msg.className;
      note.textContent = msg.textContent;

      container.append(note);
    });

    input.parentNode.append(container);
  }

  /**
   * A built-in method for checking password validation. Use this with 
   * pwRequirements.csv.
   */
  static addPasswordValidation(e) {
    let isValidPw = false;
    const password = e.currentTarget.value;
    const successClass = "req-met";
    const annotations = Array
        .from(document.querySelectorAll(".password-annotations > *"))
        .reduce((annotations, element) => {
          annotations[element.classList.item(0)] = element;
          return annotations;
        }, {});

    const requirementsNotMet = (annotationElement) => {
      isValidPw = false;
      annotationElement.classList.remove(successClass);
    }

    const requirementsMet = (annotationElement) => {
      isValidPw = true;
      annotationElement.classList.add(successClass);
    }

    if (password.length < 8) {
      requirementsNotMet(annotations.length);
    } else {
      requirementsMet(annotations.length);
    }

    if (password.match(/[0-9]/) === null) {
      requirementsNotMet(annotations.digit);
    } else {
      requirementsMet(annotations.digit);
    }

    if (password.match(/[A-Z]/) === null) {
      requirementsNotMet(annotations.uppercase);
    } else {
      requirementsMet(annotations.uppercase);
    }

    if (password.match(/[a-z]/) === null) {
      requirementsNotMet(annotations.lowercase);
    } else {
      requirementsMet(annotations.lowercase);
    }

    if (password.match(/\W/) === null) {
      requirementsNotMet(annotations.special);
    } else {
      requirementsMet(annotations.special);
    }

    if (!isValidPw) {
      e.currentTarget.setCustomValidity("Please ensure your password meets all requirements.");
    } else {
      e.currentTarget.setCustomValidity("");
    }
  }

  /**
   * A built-in method which ensures that password and confirm password matches.
   * If the confirm password does not match the password field, the span element
   * inside of the confirm password field will enable the active class. That is,
   *  as long as "confirm password" is not empty.
   * @param pwId {string} - The ID of the password input field.
   * @param confirmPwId {string} - The ID of the confirm password input field.
   */
  static addPasswordMatchValidation(form, pwId, confirmPwId, msg="Passwords do not match.") {
    const pwField = form.querySelector(`#${pwId}`);
    const confirmPwField = form.querySelector(`#${confirmPwId}`);
    const errorElement = confirmPwField.parentNode.querySelector(".error");

    confirmPwField.addEventListener("focusout", () => {
      if (confirmPwField.value !== "" 
          && pwField.value !== confirmPwField.value) {
        confirmPwField.setCustomValidity(msg);
        errorElement.classList.add("active");
        errorElement.textContent = msg;
      } else {
        confirmPwField.setCustomValidity("");
        errorElement.classList.remove("active");
        errorElement.textContent = "";
      }
    });
  }

  /**
   * Ensures an entered email is actually valid. Part of the provided validations 
   * of the form class.
   * @param {*} form 
   * @param {*} emailId 
   * @param {*} msg 
   */
  static addEmailValidation(form, emailId, msg="Please enter a valid email.") {
    const emailField = form.querySelector(`#${emailId}`);
    const errorElement = emailField.parentNode.querySelector(".error");

    emailField.addEventListener("focusout", () => {
      if (emailField.value.match(_utility__WEBPACK_IMPORTED_MODULE_0__["default"].emailRegex) === null) {
        emailField.setCustomValidity(msg);
        errorElement.classList.add("active");
        errorElement.textContent = msg;
      } else {
        emailField.setCustomValidity("");
        errorElement.classList.remove("active");
        errorElement.textContent = "";
      }
    });
  }
}


/***/ }),

/***/ "./src/images sync \\.(png|jpe?g|svg)$":
/*!**********************************************************!*\
  !*** ./src/images/ sync nonrecursive \.(png|jpe?g|svg)$ ***!
  \**********************************************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "./src/images sync \\.(png|jpe?g|svg)$";
module.exports = webpackEmptyContext;

/***/ }),

/***/ "./src/utility.js":
/*!************************!*\
  !*** ./src/utility.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Utility)
/* harmony export */ });
/**
 * A class with useful, general-purpose methods.
 */
class Utility {
  
  static emailRegex =  	
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  /**
   * Based on webpack's require to quickly import in all images in a folder.
   * See documentation https://www.npmjs.com/package/require-context to understand
   * more about the parameter.
   * 
   * @param r - require.context() function, used for importing all files in
   * a directory matching a pattern. Ex:
   * require.context("./images", false, /\.(png|jpe?g|svg)$/). Leave blank to use this.
   * @returns - An object containing all the images matching the require context,
   * the original filename (w/ extension) being the key referencing the image.
   */
  // eslint-disable-next-line no-undef
  static importAllImages(r = __webpack_require__("./src/images sync \\.(png|jpe?g|svg)$")) {
    let images = {};
    r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
    return images;
  }

  /**
   * Create an element with various classes.
   * @param {string} tag - The HTML tag of the element.
   * @param {string} defaultClass - Default class to refer to the element by.
   * @param  {string} classNames - (Optional) Additional classes to give the element.
   * @returns 
   */
  static createElement(tag, defaultClass, ...classNames) {
    const elem = document.createElement(tag);
    Utility.addClassesToElement(elem, defaultClass, ...classNames);

    return elem;
  }

  /**
   * A helper method which adds classes to a given element.
   * @param {HTMLElement} elem - The element to append classes to.
   * @param {string} defaultClass - The classname that said element should always have.
   * @param {string[]} classNames - The classnames to give the element (optional).
   * */ 
  static addClassesToElement(elem, defaultClass, ...classNames) {
      classNames.push(defaultClass);
      elem.classList.add(...classNames);
  }

  /**
   * For a given element, add an animation but only play it once. Afterwards,
   * unload the animation. This allows you to add the class to it again to 
   * play the animation; this is useful when associated with event triggers.
   * @param {HTMLElement} elem - An element to apply the animation to.
   * @param {string} animationName - A CSS class associated with an animation.
   */
  static triggerAnimation(elem, animationName) {
    elem.classList.add(animationName);

    elem.onanimationend = () => {elem.classList.remove(animationName)};
  }

  /**
   * Recursively scale the tree of a child node until the parent matching the given
   * selector is found. Returns NULL if no matching parent is found.
   * @param {HTMLElement} elem - A child node.
   * @param {string} selector - CSS Selector String.
   * 
   * @returns {HTMLelement} - Parent of elem.
   */
  static getMatchingParent(elem, selector) {
    while(!elem.parentNode.matches(selector)) {
      elem = elem.parentNode;
      if (elem.matches("html")) {
        return null;
      }
    }
    return elem;
  }

}

/***/ }),

/***/ "./src/data/countries.txt":
/*!********************************!*\
  !*** ./src/data/countries.txt ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = "Afghanistan\r\nAlbania\r\nAlgeria\r\nAmerican Samoa\r\nAndorra\r\nAngola\r\nAntigua and Barbuda\r\nArgentina\r\nArmenia\r\nAustralia\r\nAustria\r\nBahamas\r\nBahrain\r\nBangladesh\r\nBarbados\r\nBelarus\r\nBelgium\r\nBelize\r\nBenin\r\nBermuda\r\nBhutan\r\nBolivia\r\nBosnia and Herzegovina\r\nBotswana\r\nBrazil\r\nBrunei\r\nBulgaria\r\nBurkina Faso\r\nBurundi\r\nCambodia\r\nCameroon\r\nCanada\r\nCape Verde\r\nCentral African Republic\r\nChad\r\nChile\r\nChina\r\nColombia\r\nComoros\r\nCongo, Democratic Republic of the\r\nCongo, Republic of the\r\nCosta Rica\r\nC&ocirc;te d'Ivoire\r\nCroatia\r\nCuba\r\nCyprus\r\nCzech Republic\r\nDenmark\r\nDjibouti\r\nDominica\r\nDominican Republic\r\nEast Timor\r\nEcuador\r\nEgypt\r\nEl Salvador\r\nEquatorial Guinea\r\nEritrea\r\nEstonia\r\nEthiopia\r\nFiji\r\nFinland\r\nFrance\r\nGabon\r\nGambia\r\nGeorgia\r\nGermany\r\nGhana\r\nGreece\r\nGreenland\r\nGrenada\r\nGuam\r\nGuatemala\r\nGuinea\r\nGuinea-Bissau\r\nGuyana\r\nHaiti\r\nHonduras\r\nHong Kong\r\nHungary\r\nIceland\r\nIndia\r\nIndonesia\r\nIran\r\nIraq\r\nIreland\r\nIsrael\r\nItaly\r\nJamaica\r\nJapan\r\nJordan\r\nKazakhstan\r\nKenya\r\nKiribati\r\nNorth Korea\r\nSouth Korea\r\nKuwait\r\nKyrgyzstan\r\nLaos\r\nLatvia\r\nLebanon\r\nLesotho\r\nLiberia\r\nLibya\r\nLiechtenstein\r\nLithuania\r\nLuxembourg\r\nMacedonia\r\nMadagascar\r\nMalawi\r\nMalaysia\r\nMaldives\r\nMali\r\nMalta\r\nMarshall Islands\r\nMauritania\r\nMauritius\r\nMexico\r\nMicronesia\r\nMoldova\r\nMonaco\r\nMongolia\r\nMontenegro\r\nMorocco\r\nMozambique\r\nMyanmar\r\nNamibia\r\nNauru\r\nNepal\r\nNetherlands\r\nNew Zealand\r\nNicaragua\r\nNiger\r\nNigeria\r\nNorway\r\nNorthern Mariana Islands\r\nOman\r\nPakistan\r\nPalau\r\nPalestine\r\nPanama\r\nPapua New Guinea\r\nParaguay\r\nPeru\r\nPhilippines\r\nPoland\r\nPortugal\r\nPuerto Rico\r\nQatar\r\nRomania\r\nRussia\r\nRwanda\r\nSaint Kitts and Nevis\r\nSaint Lucia\r\nSaint Vincent and the Grenadines\r\nSamoa\r\nSan Marino\r\nSao Tome and Principe\r\nSaudi Arabia\r\nSenegal\r\nSerbia and Montenegro\r\nSeychelles\r\nSierra Leone\r\nSingapore\r\nSlovakia\r\nSlovenia\r\nSolomon Islands\r\nSomalia\r\nSouth Africa\r\nSpain\r\nSri Lanka\r\nSudan\r\nSudan, South\r\nSuriname\r\nSwaziland\r\nSweden\r\nSwitzerland\r\nSyria\r\nTaiwan\r\nTajikistan\r\nTanzania\r\nThailand\r\nTogo\r\nTonga\r\nTrinidad and Tobago\r\nTunisia\r\nTurkey\r\nTurkmenistan\r\nTuvalu\r\nUganda\r\nUkraine\r\nUnited Arab Emirates\r\nUnited Kingdom\r\nUnited States\r\nUruguay\r\nUzbekistan\r\nVanuatu\r\nVatican City\r\nVenezuela\r\nVietnam\r\nVirgin Islands, British\r\nVirgin Islands, U.S.\r\nYemen\r\nZambia\r\nZimbabwe";

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_countries_txt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/countries.txt */ "./src/data/countries.txt");
/* harmony import */ var _data_plans_csv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/plans.csv */ "./src/data/plans.csv");
/* harmony import */ var _data_plans_csv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_data_plans_csv__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_pwRequirements_csv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/pwRequirements.csv */ "./src/data/pwRequirements.csv");
/* harmony import */ var _data_pwRequirements_csv__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_data_pwRequirements_csv__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form */ "./src/form.js");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component */ "./src/component.js");
// data



// css

// js



const countries = _data_countries_txt__WEBPACK_IMPORTED_MODULE_0__.split("\r\n");

(function main() {
  const c = new _component__WEBPACK_IMPORTED_MODULE_5__["default"]();
  const signUpForm = new _form__WEBPACK_IMPORTED_MODULE_4__["default"]("sign-up-form");

  const container = c.div("sign-up");
  container.append(c.heading("Sign-Up", 1));

  signUpForm.addInputToForm("email", "Email", "email", true, "", "email-field");
  _form__WEBPACK_IMPORTED_MODULE_4__["default"].addEmailValidation(signUpForm.form, "email");

  signUpForm.addInputToForm("text", "Country", "country", true, "", "country-field");
  signUpForm.attachDatalist("countries", countries, "country");
  
  signUpForm.addInputToForm("text", "ZIP Code", "zip", true);

  signUpForm.addOptionsListToForm("Select a Plan", true, (_data_plans_csv__WEBPACK_IMPORTED_MODULE_1___default()), "plan", true);

  signUpForm.addInputToForm("password", "Password", "password", true);
  signUpForm.attachValidation("password", _form__WEBPACK_IMPORTED_MODULE_4__["default"].addPasswordValidation, "input")
  signUpForm.attachAnnotation("password", (_data_pwRequirements_csv__WEBPACK_IMPORTED_MODULE_2___default()));

  signUpForm.addInputToForm("password", "Confirm Password", "confirm-password", true);
  _form__WEBPACK_IMPORTED_MODULE_4__["default"].addPasswordMatchValidation(signUpForm.form, "password", "confirm-password");

  signUpForm.addSubmitCancelButtons("Sign Up", "Go Back");

  container.append(signUpForm.form);
  document.body.append(container);
}());


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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a0RBQVM7QUFDekIseUJBQXlCLDZDQUFJO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGdFQUF1QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQsd0RBQUs7QUFDOUQ7QUFDQTtBQUNBLDBDQUEwQyxtRUFBMEI7QUFDcEUsMENBQTBDLGlFQUFjO0FBQ3hEO0FBQ0E7QUFDQSxFQUFFLHdFQUErQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmFsaWRhdGlvbi1mb3JtLXByYWN0aWNlLy4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly92YWxpZGF0aW9uLWZvcm0tcHJhY3RpY2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3ZhbGlkYXRpb24tZm9ybS1wcmFjdGljZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL3ZhbGlkYXRpb24tZm9ybS1wcmFjdGljZS8uL3NyYy9kYXRhL3BsYW5zLmNzdiIsIndlYnBhY2s6Ly92YWxpZGF0aW9uLWZvcm0tcHJhY3RpY2UvLi9zcmMvZGF0YS9wd1JlcXVpcmVtZW50cy5jc3YiLCJ3ZWJwYWNrOi8vdmFsaWRhdGlvbi1mb3JtLXByYWN0aWNlLy4vc3JjL2luZGV4LmNzcz9jZmU0Iiwid2VicGFjazovL3ZhbGlkYXRpb24tZm9ybS1wcmFjdGljZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly92YWxpZGF0aW9uLWZvcm0tcHJhY3RpY2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3ZhbGlkYXRpb24tZm9ybS1wcmFjdGljZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly92YWxpZGF0aW9uLWZvcm0tcHJhY3RpY2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdmFsaWRhdGlvbi1mb3JtLXByYWN0aWNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdmFsaWRhdGlvbi1mb3JtLXByYWN0aWNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdmFsaWRhdGlvbi1mb3JtLXByYWN0aWNlLy4vc3JjL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly92YWxpZGF0aW9uLWZvcm0tcHJhY3RpY2UvLi9zcmMvZm9ybS5qcyIsIndlYnBhY2s6Ly92YWxpZGF0aW9uLWZvcm0tcHJhY3RpY2UvLi9zcmMvaW1hZ2VzfHN5bmN8bm9ucmVjdXJzaXZlfC8uKHBuZ3xqcGUiLCJ3ZWJwYWNrOi8vdmFsaWRhdGlvbi1mb3JtLXByYWN0aWNlLy4vc3JjL3V0aWxpdHkuanMiLCJ3ZWJwYWNrOi8vdmFsaWRhdGlvbi1mb3JtLXByYWN0aWNlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3ZhbGlkYXRpb24tZm9ybS1wcmFjdGljZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly92YWxpZGF0aW9uLWZvcm0tcHJhY3RpY2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3ZhbGlkYXRpb24tZm9ybS1wcmFjdGljZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3ZhbGlkYXRpb24tZm9ybS1wcmFjdGljZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3ZhbGlkYXRpb24tZm9ybS1wcmFjdGljZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcclxcbi5yZXEtbWV0IHtcXHJcXG4gIGNvbG9yOiBncmVlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnJlcS1tZXQ6YWZ0ZXJ7XFxyXFxuICBjb250ZW50OiBcXFwi4pyUXFxcIjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHJpZ2h0OiAwcHg7XFxyXFxufVxcclxcblxcclxcbi5lcnJvci5hY3RpdmUge1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7QUFDWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXHJcXG4ucmVxLW1ldCB7XFxyXFxuICBjb2xvcjogZ3JlZW47XFxyXFxufVxcclxcblxcclxcbi5yZXEtbWV0OmFmdGVye1xcclxcbiAgY29udGVudDogXFxcIuKclFxcXCI7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICByaWdodDogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZXJyb3IuYWN0aXZlIHtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBbe1wiaWRcIjpcImJhc2ljXCIsXCJ2YWx1ZVwiOlwiQmFzaWMgUGxhbiAtIEZSRUUgKHdpdGggYWRzKVwiLFwiZGVmYXVsdFwiOjF9LHtcImlkXCI6XCJwcm9cIixcInZhbHVlXCI6XCJQbHVzIFBsYW4gLSAkOS45OSAvIE1vLlwiLFwiZGVmYXVsdFwiOjB9LHtcImlkXCI6XCJwcmVtaXVtXCIsXCJ2YWx1ZVwiOlwiTWF4IFBsYW4gLSAkMTQuOTkgLyBNby5cIixcImRlZmF1bHRcIjowfV0iLCJtb2R1bGUuZXhwb3J0cyA9IFt7XCJjbGFzc05hbWVcIjpcImxlbmd0aFwiLFwidGV4dENvbnRlbnRcIjpcIkNvbnRhaW5zIGF0IGxlYXN0IDggY2hhcmFjdGVycy5cIn0se1wiY2xhc3NOYW1lXCI6XCJkaWdpdFwiLFwidGV4dENvbnRlbnRcIjpcIkNvbnRhaW5zIGF0IGxlYXN0IDEgZGlnaXQuXCJ9LHtcImNsYXNzTmFtZVwiOlwidXBwZXJjYXNlXCIsXCJ0ZXh0Q29udGVudFwiOlwiQ29udGFpbnMgYXQgbGVhc3QgMSB1cHBlcmNhc2UgbGV0dGVyLlwifSx7XCJjbGFzc05hbWVcIjpcImxvd2VyY2FzZVwiLFwidGV4dENvbnRlbnRcIjpcIkNvbnRhaW5zIGF0IGxlYXN0IDEgbG93ZXJjYXNlIGxldHRlci5cIn0se1wiY2xhc3NOYW1lXCI6XCJzcGVjaWFsXCIsXCJ0ZXh0Q29udGVudFwiOlwiQ29udGFpbnMgYXQgbGVhc3QgMSBzcGVjaWFsIHN5bWJvbC5cIn1dIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKipcclxuICogQ29tcG9uZW50IGNsYXNzLiBDb250YWlucyB2YXJpb3VzIERPTSBlbGVtZW50cy5cclxuICogQXV0aG9yOiBkYXRyaW5vblxyXG4gKiBWZXJzaW9uOiAxLjNcclxuICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnQge1xyXG4gIFxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMubXFsID0gd2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiA2MDBweClcIik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBJbml0aWFsaXplcyBhIGJhc2ljIEhUTUwgc2tlbGV0b24gZm9yIHRoZSB3ZWIgcGFnZSwgZ2VuZXJhdGluZyBhIGhlYWRlcixcclxuICAgKiBtYWluLCBhbmQgc3RpY2t5IGZvb3Rlci5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7Kn0gaGVhZGVyVGl0bGUgLSBXaGF0IHRoZSB3ZWIgcGFnZSBpcyBjYWxsZWQuXHJcbiAgICogQHBhcmFtIHtib29sfSBlbXB0eUhlYWRlciAtIFNob3VsZCB0aGUgaGVhZGVyIHVzZSBhIGRlZmF1bHQgc3RydWN0dXJlP1xyXG4gICAqIFRoZSBkZWZhdWx0IHN0cnVjdHVyZSBsb29rcyBsaWtlIFsgTG9nbyB8IHwgfCB8IE5hdmlnYXRpb24gTGlua3NdXHJcbiAgICogQHJldHVybnMgLSBBbiBhcnJheSBjb250YWluaW5nIHJlZmVyZW5jZXMgdG8gdGhlIGdlbmVyYXRlZCBoZWFkZXIsIG1haW4sIGFuZCBmb290ZXIuXHJcbiAgICovXHJcbiAgaW5pdGlhbGl6ZVN0cnVjdHVyZShcclxuICAgIGhlYWRlclRpdGxlLFxyXG4gICAgZW1wdHlIZWFkZXIgPSBmYWxzZSxcclxuICAgIGNyZWF0ZU1vbnRoLFxyXG4gICAgZ2l0aHViTGlua1xyXG4gICkge1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XHJcbiAgICBjb25zdCBtYWluV3JhcHBlciA9IHRoaXMuZGl2KFwiY29udGVudFwiKTtcclxuICAgIGxldCBoZWFkZXI7XHJcbiAgICBpZiAoZW1wdHlIZWFkZXIpIHtcclxuICAgICAgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGhlYWRlciA9IHRoaXMuaGVhZGVyKGhlYWRlclRpdGxlKTtcclxuICAgIH1cclxuICAgIGhlYWRlci5pZCA9IFwiaGVhZGVyXCI7XHJcblxyXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xyXG4gICAgY29uc3QgZm9vdGVyID0gdGhpcy5mb290ZXIoY3JlYXRlTW9udGgsIGdpdGh1YkxpbmspO1xyXG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcclxuXHJcbiAgICBtYWluV3JhcHBlci5hcHBlbmQoaGVhZGVyLCBtYWluKTtcclxuICAgIGJvZHkuYXBwZW5kKG1haW5XcmFwcGVyLCBmb290ZXIpO1xyXG5cclxuICAgIHJldHVybiBbaGVhZGVyLCBtYWluLCBmb290ZXJdO1xyXG4gIH1cclxuXHJcbiAgY29udGVudCgpIHtcclxuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRcIik7XHJcblxyXG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcclxuICAgIG1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5cIik7XHJcblxyXG4gICAgY29udGVudC5hcHBlbmQobWFpbik7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICBoZWFkZXIodGl0bGUpIHtcclxuICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xyXG4gICAgbGV0IHRpdGxlRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgIGxldCBtZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XHJcblxyXG4gICAgbWVudUJ1dHRvbi5pZCA9IFwibWVudS1idXR0b25cIjtcclxuICAgIG1lbnVCdXR0b24uY2xhc3NMaXN0LmFkZChcImZhc1wiLCBcImZhLWJhcnNcIiwgXCJuby1kaXNwbGF5XCIpO1xyXG5cclxuICAgIHRoaXMubXFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcclxuICAgICAgaWYgKGUubWF0Y2hlcykge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudS1idXR0b25cIikuY2xhc3NMaXN0LnJlbW92ZShcIm5vLWRpc3BsYXlcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gaXQgYmlnZ2VyIHRoYW4gdGhlIHF1ZXJ5IHJ1bGUuXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51LWJ1dHRvblwiKS5jbGFzc0xpc3QuYWRkKFwibm8tZGlzcGxheVwiKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hdmJhclwiKS5jbGFzc0xpc3QucmVtb3ZlKFwic2xpZGUtaW4tb3V0XCIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnUtYnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJtZW51IHByZXNzZWQuXCIpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmF2YmFyXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJzbGlkZS1pbi1vdXRcIik7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaGVhZGVyLmlkID0gXCJoZWFkZXJcIjtcclxuICAgIC8vIGhlYWRlci5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybCgke2ltZ30pYDtcclxuXHJcbiAgICB0aXRsZUVsZW0uaWQgPSBcInBhZ2UtdGl0bGVcIjtcclxuICAgIHRpdGxlRWxlbS50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG5cclxuICAgIHRpdGxlRWxlbS5pbnNlcnRCZWZvcmUobWVudUJ1dHRvbiwgdGl0bGVFbGVtLmZpcnN0Q2hpbGQpO1xyXG4gICAgaGVhZGVyLmFwcGVuZCh0aXRsZUVsZW0pO1xyXG5cclxuICAgIHJldHVybiBoZWFkZXI7XHJcbiAgfVxyXG5cclxuICBuYXZiYXIoLi4ubGlua3MpIHtcclxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XHJcbiAgICBjb25zdCBsaW5rQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG5cclxuICAgIG5hdi5pZCA9IFwibmF2YmFyXCI7XHJcbiAgICBsaW5rQ29udGFpbmVyLmlkID0gXCJuYXZiYXItYnV0dG9ucy1jb250YWluZXJcIjtcclxuXHJcbiAgICBmb3IgKGxldCBsaW5rIG9mIGxpbmtzKSB7XHJcbiAgICAgIGNvbnN0IGxpbmtCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgIGNvbnN0IGxpbmtBbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuXHJcbiAgICAgIGxpbmtCdXR0b24uY2xhc3NMaXN0LmFkZChcIm5hdmJhci1idXR0b25cIik7XHJcblxyXG4gICAgICBsaW5rQW5jaG9yLmlkID0gYG5hdmxpbmstJHtsaW5rLnJlcGxhY2UoXCIgXCIsIFwiLVwiKS50b0xvd2VyQ2FzZSgpfWA7XHJcbiAgICAgIGxpbmtBbmNob3IudGV4dENvbnRlbnQgPSBsaW5rO1xyXG4gICAgICBsaW5rQW5jaG9yLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCIjXCIpO1xyXG5cclxuICAgICAgbGlua0J1dHRvbi5hcHBlbmQobGlua0FuY2hvcik7XHJcbiAgICAgIGxpbmtDb250YWluZXIuYXBwZW5kKGxpbmtCdXR0b24pO1xyXG5cclxuICAgICAgLy8gVG9vIHNwZWNpZmljLlxyXG4gICAgICAvLyBsaW5rQW5jaG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAvLyAgIGxldCBjdXJyZW50U2VjdGlvbklkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluID4gc2VjdGlvbjpub3QoLm5vLWRpc3BsYXkpXCIpLmlkLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgIC8vICAgbGV0IGNob3NlblNlY3Rpb25JZCA9IGUuY3VycmVudFRhcmdldC50ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgLy8gICBpZiAoY3VycmVudFNlY3Rpb25JZCAhPT0gY2hvc2VuU2VjdGlvbklkKSB7XHJcbiAgICAgIC8vICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtjdXJyZW50U2VjdGlvbklkfWApLmNsYXNzTGlzdC5hZGQoXCJuby1kaXNwbGF5XCIpO1xyXG4gICAgICAvLyAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Y2hvc2VuU2VjdGlvbklkfWApLmNsYXNzTGlzdC5yZW1vdmUoXCJuby1kaXNwbGF5XCIpO1xyXG4gICAgICAvLyAgIH1cclxuXHJcbiAgICAgIC8vIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5hdi5hcHBlbmQobGlua0NvbnRhaW5lcik7XHJcblxyXG4gICAgcmV0dXJuIG5hdjtcclxuICB9XHJcblxyXG4gIGJhbm5lcih0ZXh0LCBpbWcpIHtcclxuICAgIGxldCBiYW5uZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmlndXJlXCIpO1xyXG4gICAgbGV0IGJhbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsZXQgY2FwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWdjYXB0aW9uXCIpO1xyXG5cclxuICAgIGJhbm5lckNvbnRhaW5lci5pZCA9IFwiYmFubmVyXCI7XHJcbiAgICBiYW5uZXIuaWQgPSBcImJhbm5lci1pbWFnZVwiO1xyXG4gICAgY2FwdGlvbi5pZCA9IFwiYmFubmVyLWNhcHRpb25cIjtcclxuXHJcbiAgICBiYW5uZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2ltZ30pYDtcclxuXHJcbiAgICBjYXB0aW9uLnRleHRDb250ZW50ID0gdGV4dDtcclxuXHJcbiAgICBiYW5uZXJDb250YWluZXIuYXBwZW5kKGJhbm5lciwgY2FwdGlvbik7XHJcblxyXG4gICAgcmV0dXJuIGJhbm5lckNvbnRhaW5lcjtcclxuICB9XHJcblxyXG4gIGZvb3RlcihjcmVhdGVNb250aCwgZ2l0aHViTGluaykge1xyXG4gICAgbGV0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XHJcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZChcImZvb3RlclwiKTtcclxuXHJcbiAgICBsZXQgdGV4dCA9IGBDcmVhdGVkIGluICR7Y3JlYXRlTW9udGh9IDIwMjEuIE9kaW4gUHJvamVjdCB4IERhbiBULmA7XHJcbiAgICBsZXQgZ2l0aHViRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgbGV0IGdoSWNvbiA9IHRoaXMuZmFJY29uKFwiZmFiXCIsIFwiZmEtZ2l0aHViLXNxdWFyZVwiLCBcImljb25cIik7XHJcblxyXG4gICAgZ2l0aHViRWxlbS5hcHBlbmQoZ2hJY29uKTtcclxuICAgIGdpdGh1YkVsZW0uY2xhc3NMaXN0LmFkZChcImZvb3Rlci1naXRodWItaWNvblwiKTtcclxuICAgIGdpdGh1YkVsZW0uc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBnaXRodWJMaW5rKTtcclxuICAgIGdpdGh1YkVsZW0uc2V0QXR0cmlidXRlKFwidGFyZ2V0XCIsIFwiX2JsYW5rXCIpO1xyXG4gICAgZ2l0aHViRWxlbS5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuXHJcbiAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG5cclxuICAgIHAudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gICAgcC5hcHBlbmQoZ2l0aHViRWxlbSk7XHJcbiAgICBmb290ZXIuYXBwZW5kKHApO1xyXG5cclxuICAgIHJldHVybiBmb290ZXI7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGUgYW4gZWxlbWVudCB3aXRoIGxhcmdlciwgZW1ib2xkZW5lZCwgdGV4dCxcclxuICAgKiBzaW1pbGFyIHRvIGEgcHVsbCBxdW90ZSBpbiBhIG1hZ2F6aW5lLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIG1zZyB7c3RyaW5nfSBUZXh0IHRvIGluY2x1ZGUgaW4gdGhlIGJsb2NrIHF1b3RlXHJcbiAgICovXHJcbiAgcHVsbHF1b3RlKG1zZykge1xyXG4gICAgbGV0IHB1bGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXNpZGVcIik7XHJcbiAgICBwdWxsLnRleHRDb250ZW50ID0gbXNnO1xyXG5cclxuICAgIHB1bGwuY2xhc3NMaXN0LmFkZChcInB1bGwtcXVvdGVcIik7XHJcblxyXG4gICAgcmV0dXJuIHB1bGw7XHJcbiAgfVxyXG5cclxuICBzZWN0aW9uKGlkKSB7XHJcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xyXG4gICAgZWxlbWVudC5pZCA9IGlkO1xyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwic2VjdGlvblwiKTtcclxuXHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYSB0ZXh0IGhlYWRpbmcgZWxlbWVudC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7Kn0gdGV4dCAtIFRoZSBsYWJlbCBmb3IgdGhlIGhlYWRlci5cclxuICAgKiBAcGFyYW0geyp9IGxldmVsIC0gVGhlIGxldmVsIG9mIGhlYWRlci5cclxuICAgKi9cclxuICBoZWFkaW5nKHRleHQsIGxldmVsLCAuLi5jbGFzc05hbWUpIHtcclxuICAgIGlmIChsZXZlbCA8IDEgfHwgbGV2ZWwgPiA2KSB7XHJcbiAgICAgIHRocm93IEVycm9yKFwiSGVhZGluZyBsZXZlbHMgY2FuIG9ubHkgYmUgYmV0d2VlbiAxIHRvIDYhXCIpO1xyXG4gICAgfVxyXG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGgke2xldmVsfWApO1xyXG5cclxuICAgIGlmIChjbGFzc05hbWUgIT09IG51bGwpIHtcclxuICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NOYW1lKTtcclxuICAgIH1cclxuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IHRleHQ7XHJcblxyXG4gICAgcmV0dXJuIGhlYWRlcjtcclxuICB9XHJcblxyXG4gIHBhcmFncmFwaCh0ZXh0LCAuLi5jbGFzc05hbWUpIHtcclxuICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBwLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NOYW1lKTtcclxuXHJcbiAgICBwLnRleHRDb250ZW50ID0gdGV4dDtcclxuXHJcbiAgICByZXR1cm4gcDtcclxuICB9XHJcblxyXG4gIGltZyh1cmwsIC4uLmNsYXNzTmFtZSkge1xyXG4gICAgbGV0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzTmFtZSk7XHJcblxyXG4gICAgaW1hZ2Uuc3JjID0gdXJsO1xyXG5cclxuICAgIHJldHVybiBpbWFnZTtcclxuICB9XHJcblxyXG4gIGRpdiguLi5jbGFzc05hbWUpIHtcclxuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NOYW1lKTtcclxuXHJcbiAgICByZXR1cm4gZGl2O1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uKGxhYmVsLCAuLi5jbGFzc05hbWUpIHtcclxuICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgYnRuLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NOYW1lKTtcclxuXHJcbiAgICBidG4udGV4dENvbnRlbnQgPSBsYWJlbDtcclxuICAgIHJldHVybiBidG47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZW5lcmF0ZXMgYSBiYXNpYyB0YWJsZSB3aXRoIHNpbmdsZS1jZWxsIGNvbHVtbnMgYW5kIHJvd3MsIGJhc2VkIG9uIHRoZSBpbXBvcnRlZCBmaWxlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtjc3Z9IGRhdGEgLSBEYXRhIHRvIHR1cm4gaW50byBhIHRhYmxlLiBQbGVhc2UgdXNlIHdlYnBhY2sgdG8gaW1wb3J0IC5jc3YgZmlsZXMuXHJcbiAgICovXHJcbiAgdGFibGUoaWQgPSBcIlwiLCBkYXRhKSB7XHJcbiAgICBsZXQgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XHJcbiAgICB0YWJsZS5pZCA9IGlkO1xyXG5cclxuICAgIC8vIEdlbmVyYXRlIGEgdGFibGUgaGVhZGVyIHJvdy5cclxuICAgIGxldCB0YWJsZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aGVhZFwiKTtcclxuICAgIGxldCB0YWJsZUhlYWRlclJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuXHJcbiAgICBmb3IgKGxldCBjb2wgb2YgT2JqZWN0LmtleXMoZGF0YVswXSkpIHtcclxuICAgICAgbGV0IGNvbENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XHJcbiAgICAgIGNvbENlbGwudGV4dENvbnRlbnQgPSBjb2w7XHJcblxyXG4gICAgICB0YWJsZUhlYWRlclJvdy5hcHBlbmQoY29sQ2VsbCk7XHJcbiAgICB9XHJcbiAgICB0YWJsZUhlYWRlci5hcHBlbmQodGFibGVIZWFkZXJSb3cpO1xyXG5cclxuICAgIHRhYmxlLmFwcGVuZCh0YWJsZUhlYWRlcik7XHJcblxyXG4gICAgY29uc3QgdGFibGVCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRib2R5XCIpO1xyXG4gICAgLy8gR2VuZXJhdGUgdGFibGUgcm93cy5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgdHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgICAgZm9yIChsZXQgcHJvcCBpbiBkYXRhW2ldKSB7XHJcbiAgICAgICAgbGV0IHRjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG5cclxuICAgICAgICB0Y2VsbC50ZXh0Q29udGVudCA9IGRhdGFbaV1bcHJvcF07XHJcbiAgICAgICAgdHJvdy5hcHBlbmQodGNlbGwpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0YWJsZUJvZHkuYXBwZW5kKHRyb3cpO1xyXG4gICAgfVxyXG4gICAgdGFibGUuYXBwZW5kKHRhYmxlQm9keSk7XHJcblxyXG4gICAgcmV0dXJuIHRhYmxlO1xyXG4gIH1cclxuXHJcbiAgZmFJY29uKGNhdGVnb3J5LCBuYW1lLCAuLi5jbGFzc05hbWUpIHtcclxuICAgIGxldCBmYXNJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XHJcbiAgICBmYXNJY29uLmNsYXNzTGlzdC5hZGQoY2F0ZWdvcnksIG5hbWUpO1xyXG4gICAgaWYgKGNsYXNzTmFtZSAhPT0gbnVsbCkge1xyXG4gICAgICBmYXNJY29uLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NOYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFzSWNvbjtcclxuICB9XHJcblxyXG4gIHNwYW4odGV4dENvbnRlbnQgPSBudWxsLCAuLi5jbGFzc05hbWUpIHtcclxuICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBpZiAoY2xhc3NOYW1lLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICBzcGFuLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NOYW1lKTtcclxuICAgIH1cclxuICAgIHNwYW4udGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcclxuXHJcbiAgICByZXR1cm4gc3BhbjtcclxuICB9XHJcblxyXG4gIGZvcm1JbnB1dChsYWJlbFRleHQsIHR5cGUsIGlucHV0SWQsIG5hbWUpIHtcclxuICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBpbnB1dElkKTtcclxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gbGFiZWxUZXh0O1xyXG5cclxuICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGlucHV0LmlkID0gaW5wdXRJZDtcclxuICAgIGlucHV0Lm5hbWUgPSBuYW1lO1xyXG4gICAgaW5wdXQudHlwZSA9IHR5cGU7XHJcblxyXG4gICAgcmV0dXJuIFtsYWJlbCwgaW5wdXRdO1xyXG4gIH1cclxuXHJcbiAgZHJvcGRvd24obGFiZWxUZXh0LCBuYW1lLCBpbnB1dElkLCAuLi52YWx1ZXMpIHtcclxuICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBpbnB1dElkKTtcclxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gbGFiZWxUZXh0O1xyXG5cclxuICAgIGxldCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xyXG4gICAgc2VsZWN0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgbmFtZSk7XHJcbiAgICBzZWxlY3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgaW5wdXRJZCk7XHJcblxyXG4gICAgZm9yIChsZXQgdmFsIG9mIHZhbHVlcykge1xyXG4gICAgICBsZXQgZW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgICBlbnRyeS52YWx1ZSA9IHZhbDtcclxuICAgICAgaWYgKGlzTmFOKHZhbCkgJiYgdHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgIGVudHJ5LnRleHRDb250ZW50ID0gdmFsWzBdLnRvVXBwZXJDYXNlKCkgKyB2YWwuc2xpY2UoMSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZW50cnkudGV4dENvbnRlbnQgPSB2YWw7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNlbGVjdC5hcHBlbmQoZW50cnkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBbbGFiZWwsIHNlbGVjdF07XHJcbiAgfVxyXG5cclxuICB0ZXh0QXJlYShsYWJlbFRleHQsIG5hbWUsIGlucHV0SWQpIHtcclxuICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBpbnB1dElkKTtcclxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gbGFiZWxUZXh0O1xyXG5cclxuICAgIGxldCB0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcclxuICAgIHRhLmlkID0gaW5wdXRJZDtcclxuICAgIHRhLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgbmFtZSk7XHJcblxyXG4gICAgcmV0dXJuIFtsYWJlbCwgdGFdO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlIGEgY29uZmlybSBtb2RhbC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7Kn0gY2xhc3NOYW1lIC0gQ2xhc3NlcyB0aGUgbW9kYWwgc2hvdWxkIGJlbG9uZyB0by5cclxuICAgKiBAcGFyYW0geyp9IHRpdGxlIC0gVGhlIHRpdGxlIGFwcGVhcmluZyBvbiB0aGUgbW9kYWwuXHJcbiAgICogQHBhcmFtIHsqfSBtZXNzYWdlIC0gVGhlIG1lc3NhZ2UgYXBwZWFyaW5nIG9uIHRoZSBtb2RhbC5cclxuICAgKiBAcGFyYW0geyp9IHBvc2l0aXZlQnV0dG9uTGFiZWwgLSBUZXh0IGZvciB0aGUgT0sgYnV0dG9uLlxyXG4gICAqIEBwYXJhbSB7Kn0gbmVnYXRpdmVCdXR0b25MYWJlbCAtIFRleHQgZm9yIHRoZSBjYW5jZWwgYnV0dG9uLlxyXG4gICAqIEBwYXJhbSB7Kn0gcG9zaXRpdmVDYWxsYmFjayAtIEZ1bmN0aW9uIHRvIHJ1biBpZiBPSyBpcyBwcmVzc2VkLlxyXG4gICAqIEBwYXJhbSB7Kn0gbmVnYXRpdmVDYWxsYmFjayAtIEZ1bmN0aW9uIHRvIHJ1biBpZiBjYW5jZWwgaXMgcHJlc3NlZC4gJ251bGwnIGJ5XHJcbiAgICogZGVmYXVsdCwgd2hpY2ggdGhlbiBqdXN0IGNsb3NlcyB0aGUgbW9kYWwuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyAtIFJldHVybnMgdGhlIGdlbmVyYXRlZCBtb2RhbCBlbGVtZW50LlxyXG4gICAqL1xyXG4gIGNvbmZpcm1Nb2RhbChcclxuICAgIGNsYXNzTmFtZSxcclxuICAgIHRpdGxlLFxyXG4gICAgbWVzc2FnZSxcclxuICAgIHBvc2l0aXZlQnV0dG9uTGFiZWwsXHJcbiAgICBuZWdhdGl2ZUJ1dHRvbkxhYmVsLFxyXG4gICAgcG9zaXRpdmVDYWxsYmFjayxcclxuICAgIG5lZ2F0aXZlQ2FsbGJhY2sgPSBudWxsXHJcbiAgKSB7XHJcbiAgICBsZXQgbW9kYWxXcmFwcGVyID0gdGhpcy5kaXYoKTtcclxuICAgIG1vZGFsV3JhcHBlci5pZCA9IFwicHJvbXB0LXdyYXBwZXJcIjtcclxuICAgIGxldCBtb2RhbCA9IHRoaXMuZGl2KGNsYXNzTmFtZSk7XHJcblxyXG4gICAgY29uc3QgdGl0bGVIZWFkZXIgPSB0aGlzLmhlYWRpbmcodGl0bGUsIDEsIFwibW9kYWwtaGVhZGVyXCIpO1xyXG4gICAgY29uc3QgbWVzc2FnZVBhcmFncmFwaCA9IHRoaXMucGFyYWdyYXBoKG1lc3NhZ2UsIFwibW9kYWwtZGlhbG9nXCIpO1xyXG4gICAgY29uc3QgcG9zaXRpdmVCdXR0b24gPSB0aGlzLmJ1dHRvbihwb3NpdGl2ZUJ1dHRvbkxhYmVsLCBcIm1vZGFsLWNvbmZpcm1cIik7XHJcbiAgICBjb25zdCBuZWdhdGl2ZUJ1dHRvbiA9IHRoaXMuYnV0dG9uKG5lZ2F0aXZlQnV0dG9uTGFiZWwsIFwibW9kYWwtY2FuY2VsXCIpO1xyXG5cclxuICAgIGNvbnN0IGJ1dHRvblNlY3Rpb24gPSB0aGlzLmRpdihcIm1vZGFsLWJ1dHRvbi1hcmVhXCIpO1xyXG5cclxuICAgIGlmIChuZWdhdGl2ZUNhbGxiYWNrID09PSBudWxsKSB7XHJcbiAgICAgIG5lZ2F0aXZlQ2FsbGJhY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJOZWdhdGl2ZSBwcmVzc2VkLlwiKTtcclxuICAgICAgICBtb2RhbFdyYXBwZXIucmVtb3ZlKCk7XHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcG9zaXRpdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHBvc2l0aXZlQ2FsbGJhY2spO1xyXG4gICAgcG9zaXRpdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIHBvc2l0aXZlQ2FsbGJhY2soZSk7XHJcbiAgICAgIG1vZGFsV3JhcHBlci5yZW1vdmUoKTtcclxuICAgIH0pO1xyXG4gICAgbmVnYXRpdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG5lZ2F0aXZlQ2FsbGJhY2spO1xyXG5cclxuICAgIGJ1dHRvblNlY3Rpb24uYXBwZW5kKHBvc2l0aXZlQnV0dG9uLCBuZWdhdGl2ZUJ1dHRvbik7XHJcbiAgICBtb2RhbC5hcHBlbmQodGl0bGVIZWFkZXIsIG1lc3NhZ2VQYXJhZ3JhcGgsIGJ1dHRvblNlY3Rpb24pO1xyXG4gICAgbW9kYWxXcmFwcGVyLmFwcGVuZChtb2RhbCk7XHJcblxyXG4gICAgLy8gc3R5bGluZyBtb3ZlZCB0byAuY3NzIHBhZ2UuXHJcblxyXG4gICAgcmV0dXJuIG1vZGFsV3JhcHBlcjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERpc3BsYXkgYSBicmllZiwgdW5vYnRydXNpdmUgcG9wLXVwIG1lc3NhZ2UgYXQgdGhlIGJvdHRvbSBvZiB0aGUgc2NyZWVuLlxyXG4gICAqIEBwYXJhbSB7Kn0gdGV4dENvbnRlbnQgLSBUaGUgdGV4dCB0aGUgbWVzc2FnZSBzaG91bGQgZGlzcGxheS5cclxuICAgKiBAcGFyYW0geyp9IGR1cmF0aW9uIC0gVGhlIGR1cmF0aW9uIG9mIHRoZSBtZXNzYWdlIGluIHNlY29uZHMuXHJcbiAgICovXHJcbiAgdG9hc3QodGV4dENvbnRlbnQsIGR1cmF0aW9uKSB7XHJcbiAgICBsZXQgdG9hc3RCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbGV0IHRvYXN0TWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwYXJhZ3JhcGhcIik7XHJcbiAgICB0b2FzdEJveC5jbGFzc0xpc3QuYWRkKFwidG9hc3RcIik7XHJcbiAgICB0b2FzdE1lc3NhZ2UudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcclxuICAgIHRvYXN0TWVzc2FnZS5jbGFzc0xpc3QuYWRkKFwidG9hc3QtbWVzc2FnZVwiKTtcclxuXHJcbiAgICB0b2FzdEJveC5hcHBlbmQodG9hc3RNZXNzYWdlKTtcclxuXHJcbiAgICBsZXQgdG9hc3RCb3hDc3MgPSBcInBvc2l0aW9uOiBmaXhlZDsgYm90dG9tOiAxMHZoO1wiO1xyXG4gICAgdG9hc3RCb3hDc3MgKz0gXCJ3aWR0aDogMTAwdnc7XCI7XHJcbiAgICB0b2FzdEJveENzcyArPSBgYW5pbWF0aW9uOiBmYWRlLWluLW91dCAke2R1cmF0aW9ufXM7YDtcclxuICAgIHRvYXN0Qm94Q3NzICs9IFwiei1pbmRleDogOTk5OTtcIjtcclxuXHJcbiAgICBsZXQgdG9hc3RNZXNzYWdlQ3NzID1cclxuICAgICAgXCJtYXJnaW46IDAgYXV0bzsgd2lkdGg6IDMwMHB4OyBkaXNwbGF5OiBibG9jazsgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcIjtcclxuICAgIHRvYXN0TWVzc2FnZUNzcyArPVxyXG4gICAgICBcInRleHQtYWxpZ246IGNlbnRlcjsgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7IGJvcmRlci1yYWRpdXM6IDVweDtcIjtcclxuICAgIHRvYXN0TWVzc2FnZUNzcyArPSBcImNvbG9yOiB3aGl0ZTtcIjtcclxuXHJcbiAgICB0b2FzdEJveC5zdHlsZS5jc3NUZXh0ID0gdG9hc3RCb3hDc3M7XHJcbiAgICB0b2FzdE1lc3NhZ2Uuc3R5bGUuY3NzVGV4dCA9IHRvYXN0TWVzc2FnZUNzcztcclxuXHJcbiAgICB0b2FzdEJveC5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsICgpID0+IHtcclxuICAgICAgdG9hc3RCb3gucmVtb3ZlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZCh0b2FzdEJveCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBVdGlsaXR5IGZyb20gXCIuL3V0aWxpdHlcIjtcclxuXHJcbi8qKlxyXG4gKiBBIGNsYXNzIGZvciBjcmVhdGluZyBmb3JtIGVsZW1lbnRzIHdpdGggY3VzdG9tIHZhbGlkYXRpb25cclxuKiB0ZWNobmlxdWVzLCB1dGlsaXppbmcgdGhlIENvbnN0cmFpbnQgVmFsaWRhdGlvbiBBUEkuIEV2ZXJ5IGlucHV0IHRoYXQgXHJcbiogeW91IGdpdmUgdG8gZm9ybSBpcyB0cmFja2VkIGluIHRoZSBpbnB1dHMgZmllbGQsIGRvIHVzZSB0aGlzIHRvIGFzc2lnblxyXG4qIHZhbGlkYXRpb24gdG8gdGhlIGVsZW1lbnQgd2l0aCB0aGUgbWV0aG9kIGF0dGFjaFZhbGlkYXRpb24oKS5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm0ge1xyXG4gIFxyXG4gIC8qKlxyXG4gICAqIFRoZSBmb3JtIGVsZW1lbnQuXHJcbiAgICogQHR5cGUge0hUTUxGb3JtRWxlbWVudH1cclxuICAgKi9cclxuICBmb3JtO1xyXG4gIC8qKlxyXG4gICAqIENvbnRhaW5zIHRoZSBmb3JtJ3MgY29udGVudHMgYXMgYSB1bCBlbGVtZW50LlxyXG4gICAqL1xyXG4gICNmb3JtQ29udGVudHM7XHJcbiAgLyoqXHJcbiAgICogVGhlIGlucHV0cyBnaXZlbiB0byB0aGUgZm9ybSwgYXJyYW5nZWQgaW4gb3JkZXIgb2YgYWRkaXRpb24uIFxyXG4gICAqIEB0eXBlIHt7aWQgOiB7ZWxlbWVudCA6IEhUTUxlbGVtZW50LCB0eXBlIDogdHlwZX19W119XHJcbiAgICovXHJcbiAgaW5wdXRzO1xyXG5cclxuICBjb25zdHJ1Y3RvcihjbGFzc05hbWUpIHtcclxuICAgIHRoaXMuZm9ybSA9IFV0aWxpdHkuY3JlYXRlRWxlbWVudChcImZvcm1cIiwgY2xhc3NOYW1lKTtcclxuICAgIHRoaXMuI2Zvcm1Db250ZW50cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICAgIFxyXG4gICAgdGhpcy5mb3JtLmFwcGVuZCh0aGlzLiNmb3JtQ29udGVudHMpO1xyXG5cclxuICAgIHRoaXMuaW5wdXRzID0ge307XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZGQgYW4gaW5wdXQgKHdpdGggYW4gYWNjb21wYW55aW5nIGxhYmVsKSB0byB0aGUgZm9ybSBvZiB0aGlzIGluc3RhbmNlLiBBIHJlZmVyZW5jZSB0byB0aGUgaW5wdXQgXHJcbiAgICogY2FuIGJlIG9idGFpbmVkIHRocm91Z2ggdGhlIGlucHV0cyBvYmplY3QgZmllbGQuXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgLSBUaGUgdHlwZSBvZiBpbnB1dCB0byBhZGQgaW50byB0aGUgZm9ybS5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbGFiZWxUZXh0IC0gVGhlIGxhYmVsIHRvIGFkdmlzZSB3aGF0IHNvcnQgb2YgaW5wdXQgaXMgbmVlZGVkLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpZCAtIFRoZSBpZCB0byByZWZlciB0byB0aGUgaW5wdXQgYnk7IGxhYmVsIHdpbGwgdXNlIHRoaXMgaW4gXCJmb3I9XCIuXHJcbiAgICogQHBhcmFtIHtib29sZWFufSByZXF1aXJlZCAtIFdoZXRoZXIgb3Igbm90IHRoZSBpbnB1dCBzaG91bGQgYmUgcmVxdWlyZWQuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBsYWNlaG9sZGVyIC0gVGhlIHBsYWNlaG9sZGVyIHN0cmluZyB0byBkaXNwbGF5IGluIHRoZSBmaWVsZC5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lcyAtIEFueSBhZGRpdGlvbmFsIGNsYXNzIG5hbWVzIGFzc2lnbmVkIHRvIHRoZSBpbnB1dC5cclxuICAgKi9cclxuICBhZGRJbnB1dFRvRm9ybSh0eXBlPVwidGV4dFwiLCBsYWJlbFRleHQsIGlkLCByZXF1aXJlZCwgcGxhY2Vob2xkZXI9XCJcIiwgLi4uY2xhc3NOYW1lcykge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgXHJcbiAgICBjb25zdCBsYWJlbFZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICBsYWJlbFZpZXcuc2V0QXR0cmlidXRlKFwiZm9yXCIsIGlkKTtcclxuICAgIGxhYmVsVmlldy50ZXh0Q29udGVudCA9IGxhYmVsVGV4dDtcclxuXHJcbiAgICBjb25zdCBpbnB1dCA9IFV0aWxpdHkuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIFwiZm9ybS1pbnB1dFwiLCAuLi5jbGFzc05hbWVzKTtcclxuICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgdHlwZSk7XHJcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCByZXF1aXJlZCk7XHJcbiAgICBpbnB1dC5pZCA9IGlkO1xyXG4gICAgaW5wdXQubmFtZSA9IGlkO1xyXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgcGxhY2Vob2xkZXIpO1xyXG5cclxuICAgIGNvbnRhaW5lci5hcHBlbmQobGFiZWxWaWV3LCBpbnB1dCwgVXRpbGl0eS5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBcImVycm9yXCIpKTtcclxuICAgIFxyXG4gICAgdGhpcy5pbnB1dHNbaWRdID0geyBlbGVtZW50OiBjb250YWluZXIsIHR5cGUgOiB0eXBlIH07XHJcblxyXG4gICAgdGhpcy4jZm9ybUNvbnRlbnRzLmFwcGVuZCh0aGlzLmlucHV0c1tpZF0uZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBdHRhY2ggYSBkYXRhbGlzdCBlbGVtZW50IHRvIGFuIGlucHV0LiBBcHBlbmRzIGl0IHRvIHRoZSBpbnB1dC5cclxuICAgKiBcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbGlzdElkIC0gVGhlIG5hbWUgb2YgdGhlIGxpc3QuXHJcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gbGlzdCAtIEEgbGlzdCBvZiBvcHRpb25zIHRvIGF0dGFjaCB0byB0aGUgaW5wdXQuXHJcbiAgICogQHBhcmFtIHsqfSBpbnB1dElkIC0gdGhlIElEIG9mIHRoZSBpbnB1dCB0byBhdHRhY2ggdGhlIGRhdGFsaXN0IHRvLlxyXG4gICAqL1xyXG4gIGF0dGFjaERhdGFsaXN0KGxpc3RJZCwgbGlzdCwgaW5wdXRJZCkge1xyXG4gICAgY29uc3QgZGF0YUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGF0YWxpc3RcIik7XHJcbiAgICBjb25zdCBpbnB1dEZpZWxkID0gdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3IoYCMke2lucHV0SWR9YCk7XHJcbiAgICBcclxuICAgIGlucHV0RmllbGQuc2V0QXR0cmlidXRlKFwibGlzdFwiLCBsaXN0SWQpO1xyXG4gICAgaW5wdXRGaWVsZC5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJhZnRlcmVuZFwiLCBkYXRhTGlzdCk7XHJcblxyXG4gICAgZGF0YUxpc3QuaWQgPSBsaXN0SWQ7XHJcblxyXG4gICAgbGlzdC5mb3JFYWNoKGVudHJ5ID0+IHtcclxuICAgICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGVudHJ5O1xyXG4gICAgICBkYXRhTGlzdC5hcHBlbmQob3B0aW9uKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuI2FkZERhdGFsaXN0VmFsaWRhdGlvbihpbnB1dEZpZWxkLCBsaXN0KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhbiBvcHRpb25zIGxpc3QgYW5kIGFkZCBpdCB0byB0aGUgZm9ybS5cclxuICAgKiBcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGl0bGUgLSBUaGUgdGl0bGUgcHJvdmlkZWQgdG8gdGhlIGxlZ2VuZC5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gaXNSYWRpbyAtIGlmIHRydWUsIHRoZW4gbWFrZSBhIHJhZGlvIG9wdGlvbiBsaXN0LCBlbHNlIGNoZWNrYm94ZXMuXHJcbiAgICogQHBhcmFtIHsge2lkIDogc3RyaW5nLFxyXG4gICAqICAgICAgICAgICB2YWx1ZSA6IHN0cmluZyxcclxuICAgKiAgICAgICAgICAgc2VsZWN0ZWQgOiBib29sfVtdfSBvcHRpb25zIFxyXG4gICAqIFRoZSBzZWxlY3Rpb25zIGF2YWlsYWJsZSBvbiB0aGUgb3B0aW9ucyBsaXN0LlxyXG4gICAqIGlkIHJlZmVycyB0byB0aGUgaWQgdGhhdCBzaG91bGQgYmUgYXNzaWduZWQgdGhlIGlucHV0LiB2YWx1ZSByZWZlcnMgdG8gaXRzIHRleHR1YWxcclxuICAgKiBwcmVzZW50YXRpb24uXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgb3B0aW9ucyBsaXN0LlxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gcmVxdWlyZWQgLSBEb2VzIHRoZSB1c2VyIG5lZWQgdG8gYW5zd2VyIHRoZSBvcHRpb25zIGxpc3Q/XHJcbiAgICovXHJcbiAgYWRkT3B0aW9uc0xpc3RUb0Zvcm0odGl0bGUsIGlzUmFkaW8sIG9wdGlvbnMsIG5hbWUsIHJlcXVpcmVkKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBjb25zdCB0eXBlID0gaXNSYWRpbyA/ICdyYWRpbycgOiAnY2hlY2tib3gnO1xyXG4gICAgY29uc3QgZmllbGRzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIik7XHJcbiAgICBjb25zdCBsZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGVnZW5kXCIpO1xyXG5cclxuICAgIGxlZ2VuZC50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG4gICAgZmllbGRzZXQuYXBwZW5kKGxlZ2VuZCk7XHJcblxyXG4gICAgb3B0aW9ucy5mb3JFYWNoKHNlbGVjdGlvbiA9PiB7XHJcbiAgICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuXHJcbiAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgdHlwZSk7XHJcbiAgICAgIGlucHV0LmlkID0gc2VsZWN0aW9uLmlkO1xyXG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIG5hbWUpO1xyXG4gICAgICBpZiAoTnVtYmVyKHNlbGVjdGlvbi5kZWZhdWx0KSA9PT0gMSkge1xyXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIiwgdHJ1ZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBpbnB1dC5pZCk7XHJcbiAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gc2VsZWN0aW9uLnZhbHVlOyAgXHJcblxyXG4gICAgICBjb250YWluZXIuYXBwZW5kKGlucHV0LCBsYWJlbCk7XHJcbiAgICAgIGZpZWxkc2V0LmFwcGVuZChjb250YWluZXIpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIC8vIHRvIG1ha2UgYW4gb3B0aW9ucyBsaXN0IHJlcXVpcmVkLCB5b3UganVzdCBuZWVkIHRvIHNldCByZXF1aXJlZCBvbiBvbmUgZmllbGQuXHJcbiAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvODI4Nzk0Ny8xNDE0NjQ3NFxyXG4gICAgaWYgKHJlcXVpcmVkKSB7XHJcbiAgICAgIGZpZWxkc2V0LnF1ZXJ5U2VsZWN0b3IoXCJkaXYgaW5wdXRcIikuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgXCJ0cnVlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaW5wdXRzW25hbWVdID0geyBlbGVtZW50OiBmaWVsZHNldCwgdHlwZTogdHlwZSB9O1xyXG5cclxuICAgIGNvbnRhaW5lci5hcHBlbmQoZmllbGRzZXQpO1xyXG4gICAgdGhpcy4jZm9ybUNvbnRlbnRzLmFwcGVuZChjb250YWluZXIpO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiBBZGQgc3VibWl0IGFuZCBjYW5jZWwgYnV0dG9ucyB0byB0aGUgZm9ybS5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gY29uZmlybU1zZyAtIE1lc3NhZ2UgdG8gZGlzcGxheSBvbiB0aGUgY29uZmlybS5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2FuY2VsTXNnIC0gTWVzc2FnZSB0byBkaXNwbGF5IG9uIGNhbmNlbC5cclxuICAgKi9cclxuICBhZGRTdWJtaXRDYW5jZWxCdXR0b25zKGNvbmZpcm1Nc2csIGNhbmNlbE1zZykge1xyXG4gICAgbGV0IHN1Ym1pdEJ1dHRvbiA9IFV0aWxpdHkuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBcImZvcm0tc3VibWl0XCIpO1xyXG4gICAgbGV0IGNhbmNlbEJ1dHRvbiA9IFV0aWxpdHkuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBcImZvcm0tY2FuY2VsXCIpO1xyXG5cclxuICAgIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9IGNvbmZpcm1Nc2c7XHJcbiAgICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSBjYW5jZWxNc2c7XHJcblxyXG4gICAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XHJcbiAgICBjYW5jZWxCdXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcclxuICAgIFxyXG4gICAgdGhpcy4jZm9ybUNvbnRlbnRzLmFwcGVuZChzdWJtaXRCdXR0b24sIGNhbmNlbEJ1dHRvbik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZGRzIGJhc2ljIHZhbGlkYXRpb24gZm9yIGlucHV0cyB3aXRoIGRhdGFsaXN0cy4gTWVhbmluZywgdGhlIGdpdmVuIGlucHV0XHJcbiAgICogbWF0Y2hlcyBhbiBlbnRyeSBpbiB0aGUgbGlzdC5cclxuICAgKiBcclxuICAgKiBAcGFyYW0gaW5wdXQge0hUTUxFbGVtZW50fSAtIEFuIGlucHV0IGVsZW1lbnQgd2l0aCBhbiBhdHRhY2hlZCBkYXRhbGlzdC5cclxuICAgKiBAcGFyYW0gZGF0YWxpc3Qge3N0cmluZ1tdfSAtIFN0cmluZyBhcnJheSByZXByZXNlbnRpbmcgdGhlIGxpc3Qgb2Ygb3B0aW9ucy5cclxuICAgKi9cclxuICAjYWRkRGF0YWxpc3RWYWxpZGF0aW9uKGlucHV0LCBkYXRhbGlzdCkge1xyXG4gICAgY29uc3QgZXJyb3IgPSBpbnB1dC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoXCIuZXJyb3JcIik7XHJcblxyXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsICgpID0+IHtcclxuICAgICAgbGV0IHVzZXJJbnB1dCA9IGlucHV0LnZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgIGxldCBmb3VuZCA9IGRhdGFsaXN0LmZpbmRJbmRleChjb3VudHJ5ID0+IGNvdW50cnkudG9Mb3dlckNhc2UoKSA9PT0gdXNlcklucHV0KTtcclxuICAgICAgaWYgKGZvdW5kID09PSAtMSkge1xyXG4gICAgICAgIC8vIGtlZXAgdGhpcyBoZXJlIHRvIGNhdGNoIGJhZCBzdWJtaXNzaW9ucy5cclxuICAgICAgICBpbnB1dC5zZXRDdXN0b21WYWxpZGl0eShgTm90IGEgdmFsaWQgJHtpbnB1dC5uYW1lfS5gKTtcclxuICAgICAgICBlcnJvci5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIGVycm9yLnRleHRDb250ZW50ID0gYE5vdCBhIHZhbGlkICR7aW5wdXQubmFtZX0uYDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBlcnJvci50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICAgICAgZXJyb3IuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgfSBcclxuICAgIH0pOyAgICAgIFxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRkIGN1c3RvbSB2YWxpZGF0aW9uIHRvIGEgZm9ybSBpbnB1dCB0aHJvdWdoIHRoZSB1c2Ugb2YgYSBjYWxsYmFjay5cclxuICAgKiBUaGUgY2FsbGJhY2sgd2lsbCBiZSBpbnZva2VkIGVhY2ggdGltZSB0aGUgdXNlciBtb3ZlcyBvdXQgb2YgZm9jdXMgb2YgdGhlXHJcbiAgICogZWxlbWVudC5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gaW5wdXRJZCAtIFRoZSBpZCBvZiB0aGUgaW5wdXQgdG8gYXR0YWNoIHRoZSB2YWxpZGF0aW9uIHRvLlxyXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIC0gQ2FsbGJhY2sgdG8gaW52b2tlIHRvIGNoZWNrIGZvciB2YWxpZGF0aW9uLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudCAtIFRoZSBzb3J0IG9mIGV2ZW50IHRoYXQgY2F1c2VzIHRoZSB2YWxpZGF0aW9uIHRvIGJlIGludm9rZWQuXHJcbiAgICovXHJcbiAgYXR0YWNoVmFsaWRhdGlvbihpbnB1dElkLCBjYWxsYmFjaywgZXZlbnQ9XCJmb2N1c291dFwiKSB7XHJcbiAgICBjb25zdCBpbnB1dCA9IHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yKGAjJHtpbnB1dElkfWApO1xyXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2spO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQXR0YWNoIGFuIGFubm90YXRpb24gbWVzc2FnZSBiZWxvdyBhbiBpbnB1dCBmaWVsZC4gWW91IGNhbiBwYXNzIGluIG11bHRpcGxlXHJcbiAgICogbWVzc2FnZXM7IGVhY2ggZWxlbWVudCBpbiB0aGUgbWVzc2FnZSBibG9jayB3aWxsIGJlIHR1cm5lZCBpbnRvIGEgc2VwYXJhdGVcclxuICAgKiBwIGVsZW1lbnQuXHJcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gaW5wdXRJZCAtIFRoZSBJRCBvZiB0aGUgaW5wdXQgdG8gYXR0YWNoIHRvLlxyXG4gICAqIEBwYXJhbSB7e3N0cmluZyA6IHN0cmluZ31bXX0gbWVzc2FnZXMgLSBUaGUgbWVzc2FnZXMgdG8gaW5jbHVkZSBpbiB0aGUgYW5ub3RhdGlvbi5cclxuICAgKiBQcm92aWRlIGFzIGEga2V5LXZhbHVlIHBhaXIsIHdpdGggdGhlIGtleSBiZWluZyB0aGUgY2xhc3MgbmFtZSBmb3IgdGhlIGVsZW1lbnQsXHJcbiAgICogYW5kIHRoZSBjb250ZW50IGJlaW5nIHRoZSBtZXNzYWdlIHRvIHNob3cuIFxyXG4gICAqL1xyXG4gIGF0dGFjaEFubm90YXRpb24oaW5wdXRJZCwgLi4ubWVzc2FnZXMpIHtcclxuICAgIGNvbnN0IGlucHV0ID0gdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3IoYCMke2lucHV0SWR9YCk7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBVdGlsaXR5LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCBgJHtpbnB1dElkfS1hbm5vdGF0aW9uc2ApO1xyXG4gICAgLy8gY29udmVydCBtZXNzYWdlcyBpbnRvIGEgMUQgYXJyYXkuXHJcbiAgICBtZXNzYWdlcyA9IG1lc3NhZ2VzLnJlZHVjZSgobWVzc2FnZXMsIG1lc3NhZ2UpID0+IHtcclxuICAgICAgcmV0dXJuIG1lc3NhZ2VzLmNvbmNhdChtZXNzYWdlKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBtZXNzYWdlcy5mb3JFYWNoKChtc2cpID0+IHtcclxuICAgICAgbGV0IG5vdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgIG5vdGUuY2xhc3NOYW1lID0gbXNnLmNsYXNzTmFtZTtcclxuICAgICAgbm90ZS50ZXh0Q29udGVudCA9IG1zZy50ZXh0Q29udGVudDtcclxuXHJcbiAgICAgIGNvbnRhaW5lci5hcHBlbmQobm90ZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpbnB1dC5wYXJlbnROb2RlLmFwcGVuZChjb250YWluZXIpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQSBidWlsdC1pbiBtZXRob2QgZm9yIGNoZWNraW5nIHBhc3N3b3JkIHZhbGlkYXRpb24uIFVzZSB0aGlzIHdpdGggXHJcbiAgICogcHdSZXF1aXJlbWVudHMuY3N2LlxyXG4gICAqL1xyXG4gIHN0YXRpYyBhZGRQYXNzd29yZFZhbGlkYXRpb24oZSkge1xyXG4gICAgbGV0IGlzVmFsaWRQdyA9IGZhbHNlO1xyXG4gICAgY29uc3QgcGFzc3dvcmQgPSBlLmN1cnJlbnRUYXJnZXQudmFsdWU7XHJcbiAgICBjb25zdCBzdWNjZXNzQ2xhc3MgPSBcInJlcS1tZXRcIjtcclxuICAgIGNvbnN0IGFubm90YXRpb25zID0gQXJyYXlcclxuICAgICAgICAuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBhc3N3b3JkLWFubm90YXRpb25zID4gKlwiKSlcclxuICAgICAgICAucmVkdWNlKChhbm5vdGF0aW9ucywgZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgYW5ub3RhdGlvbnNbZWxlbWVudC5jbGFzc0xpc3QuaXRlbSgwKV0gPSBlbGVtZW50O1xyXG4gICAgICAgICAgcmV0dXJuIGFubm90YXRpb25zO1xyXG4gICAgICAgIH0sIHt9KTtcclxuXHJcbiAgICBjb25zdCByZXF1aXJlbWVudHNOb3RNZXQgPSAoYW5ub3RhdGlvbkVsZW1lbnQpID0+IHtcclxuICAgICAgaXNWYWxpZFB3ID0gZmFsc2U7XHJcbiAgICAgIGFubm90YXRpb25FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoc3VjY2Vzc0NsYXNzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXF1aXJlbWVudHNNZXQgPSAoYW5ub3RhdGlvbkVsZW1lbnQpID0+IHtcclxuICAgICAgaXNWYWxpZFB3ID0gdHJ1ZTtcclxuICAgICAgYW5ub3RhdGlvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZChzdWNjZXNzQ2xhc3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChwYXNzd29yZC5sZW5ndGggPCA4KSB7XHJcbiAgICAgIHJlcXVpcmVtZW50c05vdE1ldChhbm5vdGF0aW9ucy5sZW5ndGgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVxdWlyZW1lbnRzTWV0KGFubm90YXRpb25zLmxlbmd0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBhc3N3b3JkLm1hdGNoKC9bMC05XS8pID09PSBudWxsKSB7XHJcbiAgICAgIHJlcXVpcmVtZW50c05vdE1ldChhbm5vdGF0aW9ucy5kaWdpdCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXF1aXJlbWVudHNNZXQoYW5ub3RhdGlvbnMuZGlnaXQpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChwYXNzd29yZC5tYXRjaCgvW0EtWl0vKSA9PT0gbnVsbCkge1xyXG4gICAgICByZXF1aXJlbWVudHNOb3RNZXQoYW5ub3RhdGlvbnMudXBwZXJjYXNlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlcXVpcmVtZW50c01ldChhbm5vdGF0aW9ucy51cHBlcmNhc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChwYXNzd29yZC5tYXRjaCgvW2Etel0vKSA9PT0gbnVsbCkge1xyXG4gICAgICByZXF1aXJlbWVudHNOb3RNZXQoYW5ub3RhdGlvbnMubG93ZXJjYXNlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlcXVpcmVtZW50c01ldChhbm5vdGF0aW9ucy5sb3dlcmNhc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChwYXNzd29yZC5tYXRjaCgvXFxXLykgPT09IG51bGwpIHtcclxuICAgICAgcmVxdWlyZW1lbnRzTm90TWV0KGFubm90YXRpb25zLnNwZWNpYWwpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVxdWlyZW1lbnRzTWV0KGFubm90YXRpb25zLnNwZWNpYWwpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghaXNWYWxpZFB3KSB7XHJcbiAgICAgIGUuY3VycmVudFRhcmdldC5zZXRDdXN0b21WYWxpZGl0eShcIlBsZWFzZSBlbnN1cmUgeW91ciBwYXNzd29yZCBtZWV0cyBhbGwgcmVxdWlyZW1lbnRzLlwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGUuY3VycmVudFRhcmdldC5zZXRDdXN0b21WYWxpZGl0eShcIlwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgYnVpbHQtaW4gbWV0aG9kIHdoaWNoIGVuc3VyZXMgdGhhdCBwYXNzd29yZCBhbmQgY29uZmlybSBwYXNzd29yZCBtYXRjaGVzLlxyXG4gICAqIElmIHRoZSBjb25maXJtIHBhc3N3b3JkIGRvZXMgbm90IG1hdGNoIHRoZSBwYXNzd29yZCBmaWVsZCwgdGhlIHNwYW4gZWxlbWVudFxyXG4gICAqIGluc2lkZSBvZiB0aGUgY29uZmlybSBwYXNzd29yZCBmaWVsZCB3aWxsIGVuYWJsZSB0aGUgYWN0aXZlIGNsYXNzLiBUaGF0IGlzLFxyXG4gICAqICBhcyBsb25nIGFzIFwiY29uZmlybSBwYXNzd29yZFwiIGlzIG5vdCBlbXB0eS5cclxuICAgKiBAcGFyYW0gcHdJZCB7c3RyaW5nfSAtIFRoZSBJRCBvZiB0aGUgcGFzc3dvcmQgaW5wdXQgZmllbGQuXHJcbiAgICogQHBhcmFtIGNvbmZpcm1Qd0lkIHtzdHJpbmd9IC0gVGhlIElEIG9mIHRoZSBjb25maXJtIHBhc3N3b3JkIGlucHV0IGZpZWxkLlxyXG4gICAqL1xyXG4gIHN0YXRpYyBhZGRQYXNzd29yZE1hdGNoVmFsaWRhdGlvbihmb3JtLCBwd0lkLCBjb25maXJtUHdJZCwgbXNnPVwiUGFzc3dvcmRzIGRvIG5vdCBtYXRjaC5cIikge1xyXG4gICAgY29uc3QgcHdGaWVsZCA9IGZvcm0ucXVlcnlTZWxlY3RvcihgIyR7cHdJZH1gKTtcclxuICAgIGNvbnN0IGNvbmZpcm1Qd0ZpZWxkID0gZm9ybS5xdWVyeVNlbGVjdG9yKGAjJHtjb25maXJtUHdJZH1gKTtcclxuICAgIGNvbnN0IGVycm9yRWxlbWVudCA9IGNvbmZpcm1Qd0ZpZWxkLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcihcIi5lcnJvclwiKTtcclxuXHJcbiAgICBjb25maXJtUHdGaWVsZC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgKCkgPT4ge1xyXG4gICAgICBpZiAoY29uZmlybVB3RmllbGQudmFsdWUgIT09IFwiXCIgXHJcbiAgICAgICAgICAmJiBwd0ZpZWxkLnZhbHVlICE9PSBjb25maXJtUHdGaWVsZC52YWx1ZSkge1xyXG4gICAgICAgIGNvbmZpcm1Qd0ZpZWxkLnNldEN1c3RvbVZhbGlkaXR5KG1zZyk7XHJcbiAgICAgICAgZXJyb3JFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gbXNnO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbmZpcm1Qd0ZpZWxkLnNldEN1c3RvbVZhbGlkaXR5KFwiXCIpO1xyXG4gICAgICAgIGVycm9yRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIGVycm9yRWxlbWVudC50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRW5zdXJlcyBhbiBlbnRlcmVkIGVtYWlsIGlzIGFjdHVhbGx5IHZhbGlkLiBQYXJ0IG9mIHRoZSBwcm92aWRlZCB2YWxpZGF0aW9ucyBcclxuICAgKiBvZiB0aGUgZm9ybSBjbGFzcy5cclxuICAgKiBAcGFyYW0geyp9IGZvcm0gXHJcbiAgICogQHBhcmFtIHsqfSBlbWFpbElkIFxyXG4gICAqIEBwYXJhbSB7Kn0gbXNnIFxyXG4gICAqL1xyXG4gIHN0YXRpYyBhZGRFbWFpbFZhbGlkYXRpb24oZm9ybSwgZW1haWxJZCwgbXNnPVwiUGxlYXNlIGVudGVyIGEgdmFsaWQgZW1haWwuXCIpIHtcclxuICAgIGNvbnN0IGVtYWlsRmllbGQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoYCMke2VtYWlsSWR9YCk7XHJcbiAgICBjb25zdCBlcnJvckVsZW1lbnQgPSBlbWFpbEZpZWxkLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcihcIi5lcnJvclwiKTtcclxuXHJcbiAgICBlbWFpbEZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCAoKSA9PiB7XHJcbiAgICAgIGlmIChlbWFpbEZpZWxkLnZhbHVlLm1hdGNoKFV0aWxpdHkuZW1haWxSZWdleCkgPT09IG51bGwpIHtcclxuICAgICAgICBlbWFpbEZpZWxkLnNldEN1c3RvbVZhbGlkaXR5KG1zZyk7XHJcbiAgICAgICAgZXJyb3JFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gbXNnO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVtYWlsRmllbGQuc2V0Q3VzdG9tVmFsaWRpdHkoXCJcIik7XHJcbiAgICAgICAgZXJyb3JFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUNvbnRleHQocmVxKSB7XG5cdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHR0aHJvdyBlO1xufVxud2VicGFja0VtcHR5Q29udGV4dC5rZXlzID0gKCkgPT4gKFtdKTtcbndlYnBhY2tFbXB0eUNvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUNvbnRleHQ7XG53ZWJwYWNrRW1wdHlDb250ZXh0LmlkID0gXCIuL3NyYy9pbWFnZXMgc3luYyBcXFxcLihwbmd8anBlP2d8c3ZnKSRcIjtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0VtcHR5Q29udGV4dDsiLCIvKipcclxuICogQSBjbGFzcyB3aXRoIHVzZWZ1bCwgZ2VuZXJhbC1wdXJwb3NlIG1ldGhvZHMuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVdGlsaXR5IHtcclxuICBcclxuICBzdGF0aWMgZW1haWxSZWdleCA9ICBcdFxyXG4gIC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xyXG5cclxuICAvKipcclxuICAgKiBCYXNlZCBvbiB3ZWJwYWNrJ3MgcmVxdWlyZSB0byBxdWlja2x5IGltcG9ydCBpbiBhbGwgaW1hZ2VzIGluIGEgZm9sZGVyLlxyXG4gICAqIFNlZSBkb2N1bWVudGF0aW9uIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL3JlcXVpcmUtY29udGV4dCB0byB1bmRlcnN0YW5kXHJcbiAgICogbW9yZSBhYm91dCB0aGUgcGFyYW1ldGVyLlxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSByIC0gcmVxdWlyZS5jb250ZXh0KCkgZnVuY3Rpb24sIHVzZWQgZm9yIGltcG9ydGluZyBhbGwgZmlsZXMgaW5cclxuICAgKiBhIGRpcmVjdG9yeSBtYXRjaGluZyBhIHBhdHRlcm4uIEV4OlxyXG4gICAqIHJlcXVpcmUuY29udGV4dChcIi4vaW1hZ2VzXCIsIGZhbHNlLCAvXFwuKHBuZ3xqcGU/Z3xzdmcpJC8pLiBMZWF2ZSBibGFuayB0byB1c2UgdGhpcy5cclxuICAgKiBAcmV0dXJucyAtIEFuIG9iamVjdCBjb250YWluaW5nIGFsbCB0aGUgaW1hZ2VzIG1hdGNoaW5nIHRoZSByZXF1aXJlIGNvbnRleHQsXHJcbiAgICogdGhlIG9yaWdpbmFsIGZpbGVuYW1lICh3LyBleHRlbnNpb24pIGJlaW5nIHRoZSBrZXkgcmVmZXJlbmNpbmcgdGhlIGltYWdlLlxyXG4gICAqL1xyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxyXG4gIHN0YXRpYyBpbXBvcnRBbGxJbWFnZXMociA9IHJlcXVpcmUuY29udGV4dChcIi4vaW1hZ2VzXCIsIGZhbHNlLCAvXFwuKHBuZ3xqcGU/Z3xzdmcpJC8pKSB7XHJcbiAgICBsZXQgaW1hZ2VzID0ge307XHJcbiAgICByLmtleXMoKS5tYXAoKGl0ZW0pID0+IHsgaW1hZ2VzW2l0ZW0ucmVwbGFjZSgnLi8nLCAnJyldID0gcihpdGVtKTsgfSk7XHJcbiAgICByZXR1cm4gaW1hZ2VzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlIGFuIGVsZW1lbnQgd2l0aCB2YXJpb3VzIGNsYXNzZXMuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRhZyAtIFRoZSBIVE1MIHRhZyBvZiB0aGUgZWxlbWVudC5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGVmYXVsdENsYXNzIC0gRGVmYXVsdCBjbGFzcyB0byByZWZlciB0byB0aGUgZWxlbWVudCBieS5cclxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IGNsYXNzTmFtZXMgLSAoT3B0aW9uYWwpIEFkZGl0aW9uYWwgY2xhc3NlcyB0byBnaXZlIHRoZSBlbGVtZW50LlxyXG4gICAqIEByZXR1cm5zIFxyXG4gICAqL1xyXG4gIHN0YXRpYyBjcmVhdGVFbGVtZW50KHRhZywgZGVmYXVsdENsYXNzLCAuLi5jbGFzc05hbWVzKSB7XHJcbiAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xyXG4gICAgVXRpbGl0eS5hZGRDbGFzc2VzVG9FbGVtZW50KGVsZW0sIGRlZmF1bHRDbGFzcywgLi4uY2xhc3NOYW1lcyk7XHJcblxyXG4gICAgcmV0dXJuIGVsZW07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBIGhlbHBlciBtZXRob2Qgd2hpY2ggYWRkcyBjbGFzc2VzIHRvIGEgZ2l2ZW4gZWxlbWVudC5cclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtIC0gVGhlIGVsZW1lbnQgdG8gYXBwZW5kIGNsYXNzZXMgdG8uXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRlZmF1bHRDbGFzcyAtIFRoZSBjbGFzc25hbWUgdGhhdCBzYWlkIGVsZW1lbnQgc2hvdWxkIGFsd2F5cyBoYXZlLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGNsYXNzTmFtZXMgLSBUaGUgY2xhc3NuYW1lcyB0byBnaXZlIHRoZSBlbGVtZW50IChvcHRpb25hbCkuXHJcbiAgICogKi8gXHJcbiAgc3RhdGljIGFkZENsYXNzZXNUb0VsZW1lbnQoZWxlbSwgZGVmYXVsdENsYXNzLCAuLi5jbGFzc05hbWVzKSB7XHJcbiAgICAgIGNsYXNzTmFtZXMucHVzaChkZWZhdWx0Q2xhc3MpO1xyXG4gICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NOYW1lcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGb3IgYSBnaXZlbiBlbGVtZW50LCBhZGQgYW4gYW5pbWF0aW9uIGJ1dCBvbmx5IHBsYXkgaXQgb25jZS4gQWZ0ZXJ3YXJkcyxcclxuICAgKiB1bmxvYWQgdGhlIGFuaW1hdGlvbi4gVGhpcyBhbGxvd3MgeW91IHRvIGFkZCB0aGUgY2xhc3MgdG8gaXQgYWdhaW4gdG8gXHJcbiAgICogcGxheSB0aGUgYW5pbWF0aW9uOyB0aGlzIGlzIHVzZWZ1bCB3aGVuIGFzc29jaWF0ZWQgd2l0aCBldmVudCB0cmlnZ2Vycy5cclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtIC0gQW4gZWxlbWVudCB0byBhcHBseSB0aGUgYW5pbWF0aW9uIHRvLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhbmltYXRpb25OYW1lIC0gQSBDU1MgY2xhc3MgYXNzb2NpYXRlZCB3aXRoIGFuIGFuaW1hdGlvbi5cclxuICAgKi9cclxuICBzdGF0aWMgdHJpZ2dlckFuaW1hdGlvbihlbGVtLCBhbmltYXRpb25OYW1lKSB7XHJcbiAgICBlbGVtLmNsYXNzTGlzdC5hZGQoYW5pbWF0aW9uTmFtZSk7XHJcblxyXG4gICAgZWxlbS5vbmFuaW1hdGlvbmVuZCA9ICgpID0+IHtlbGVtLmNsYXNzTGlzdC5yZW1vdmUoYW5pbWF0aW9uTmFtZSl9O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVjdXJzaXZlbHkgc2NhbGUgdGhlIHRyZWUgb2YgYSBjaGlsZCBub2RlIHVudGlsIHRoZSBwYXJlbnQgbWF0Y2hpbmcgdGhlIGdpdmVuXHJcbiAgICogc2VsZWN0b3IgaXMgZm91bmQuIFJldHVybnMgTlVMTCBpZiBubyBtYXRjaGluZyBwYXJlbnQgaXMgZm91bmQuXHJcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbSAtIEEgY2hpbGQgbm9kZS5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3IgLSBDU1MgU2VsZWN0b3IgU3RyaW5nLlxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIHtIVE1MZWxlbWVudH0gLSBQYXJlbnQgb2YgZWxlbS5cclxuICAgKi9cclxuICBzdGF0aWMgZ2V0TWF0Y2hpbmdQYXJlbnQoZWxlbSwgc2VsZWN0b3IpIHtcclxuICAgIHdoaWxlKCFlbGVtLnBhcmVudE5vZGUubWF0Y2hlcyhzZWxlY3RvcikpIHtcclxuICAgICAgZWxlbSA9IGVsZW0ucGFyZW50Tm9kZTtcclxuICAgICAgaWYgKGVsZW0ubWF0Y2hlcyhcImh0bWxcIikpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVsZW07XHJcbiAgfVxyXG5cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBkYXRhXHJcbmltcG9ydCBDb3VudHJpZXMgZnJvbSAnLi9kYXRhL2NvdW50cmllcy50eHQnO1xyXG5pbXBvcnQgUGxhbnMgZnJvbSAnLi9kYXRhL3BsYW5zLmNzdic7XHJcbmltcG9ydCBQV1JlcXVpcmVtZW50cyBmcm9tICcuL2RhdGEvcHdSZXF1aXJlbWVudHMuY3N2JztcclxuLy8gY3NzXHJcbmltcG9ydCAnLi9pbmRleC5jc3MnO1xyXG4vLyBqc1xyXG5pbXBvcnQgRm9ybSBmcm9tICcuL2Zvcm0nO1xyXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50JztcclxuXHJcbmNvbnN0IGNvdW50cmllcyA9IENvdW50cmllcy5zcGxpdChcIlxcclxcblwiKTtcclxuXHJcbihmdW5jdGlvbiBtYWluKCkge1xyXG4gIGNvbnN0IGMgPSBuZXcgQ29tcG9uZW50KCk7XHJcbiAgY29uc3Qgc2lnblVwRm9ybSA9IG5ldyBGb3JtKFwic2lnbi11cC1mb3JtXCIpO1xyXG5cclxuICBjb25zdCBjb250YWluZXIgPSBjLmRpdihcInNpZ24tdXBcIik7XHJcbiAgY29udGFpbmVyLmFwcGVuZChjLmhlYWRpbmcoXCJTaWduLVVwXCIsIDEpKTtcclxuXHJcbiAgc2lnblVwRm9ybS5hZGRJbnB1dFRvRm9ybShcImVtYWlsXCIsIFwiRW1haWxcIiwgXCJlbWFpbFwiLCB0cnVlLCBcIlwiLCBcImVtYWlsLWZpZWxkXCIpO1xyXG4gIEZvcm0uYWRkRW1haWxWYWxpZGF0aW9uKHNpZ25VcEZvcm0uZm9ybSwgXCJlbWFpbFwiKTtcclxuXHJcbiAgc2lnblVwRm9ybS5hZGRJbnB1dFRvRm9ybShcInRleHRcIiwgXCJDb3VudHJ5XCIsIFwiY291bnRyeVwiLCB0cnVlLCBcIlwiLCBcImNvdW50cnktZmllbGRcIik7XHJcbiAgc2lnblVwRm9ybS5hdHRhY2hEYXRhbGlzdChcImNvdW50cmllc1wiLCBjb3VudHJpZXMsIFwiY291bnRyeVwiKTtcclxuICBcclxuICBzaWduVXBGb3JtLmFkZElucHV0VG9Gb3JtKFwidGV4dFwiLCBcIlpJUCBDb2RlXCIsIFwiemlwXCIsIHRydWUpO1xyXG5cclxuICBzaWduVXBGb3JtLmFkZE9wdGlvbnNMaXN0VG9Gb3JtKFwiU2VsZWN0IGEgUGxhblwiLCB0cnVlLCBQbGFucywgXCJwbGFuXCIsIHRydWUpO1xyXG5cclxuICBzaWduVXBGb3JtLmFkZElucHV0VG9Gb3JtKFwicGFzc3dvcmRcIiwgXCJQYXNzd29yZFwiLCBcInBhc3N3b3JkXCIsIHRydWUpO1xyXG4gIHNpZ25VcEZvcm0uYXR0YWNoVmFsaWRhdGlvbihcInBhc3N3b3JkXCIsIEZvcm0uYWRkUGFzc3dvcmRWYWxpZGF0aW9uLCBcImlucHV0XCIpXHJcbiAgc2lnblVwRm9ybS5hdHRhY2hBbm5vdGF0aW9uKFwicGFzc3dvcmRcIiwgUFdSZXF1aXJlbWVudHMpO1xyXG5cclxuICBzaWduVXBGb3JtLmFkZElucHV0VG9Gb3JtKFwicGFzc3dvcmRcIiwgXCJDb25maXJtIFBhc3N3b3JkXCIsIFwiY29uZmlybS1wYXNzd29yZFwiLCB0cnVlKTtcclxuICBGb3JtLmFkZFBhc3N3b3JkTWF0Y2hWYWxpZGF0aW9uKHNpZ25VcEZvcm0uZm9ybSwgXCJwYXNzd29yZFwiLCBcImNvbmZpcm0tcGFzc3dvcmRcIik7XHJcblxyXG4gIHNpZ25VcEZvcm0uYWRkU3VibWl0Q2FuY2VsQnV0dG9ucyhcIlNpZ24gVXBcIiwgXCJHbyBCYWNrXCIpO1xyXG5cclxuICBjb250YWluZXIuYXBwZW5kKHNpZ25VcEZvcm0uZm9ybSk7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmQoY29udGFpbmVyKTtcclxufSgpKTtcclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==