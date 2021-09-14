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
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
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

module.exports = [{"id":"basic","value":"Basic Plan - FREE (with ads)","default":1},{"id":"pro","value":"Pro Plan - $9.99 / Mo.","default":0},{"id":"premium","value":"Premium Plan - $14.99 / Mo.","default":0}]

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
* techniques, utilizing the Constraint Validation API.
 */
class Form {
  
  /**
   * The form element.
   * @type {HTMLFormElement}
   */
  form;
  /**
   * The inputs given to the form, arranged in order of addition. 
   * @type {{id : {element : HTMLelement, type : type}}[]}
   */
  inputs;

  constructor(className) {
    this.form = _utility__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("form", className);
    let ul = document.createElement("ul");
    
    this.form.append(ul);

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
   * @param {string} classNames - Any additional class names assigned to the input.
   */
  addInputToForm(type="text", labelText, id, required, ...classNames) {
    const container = document.createElement("li");
    
    const labelView = document.createElement("label");
    labelView.setAttribute("for", id);
    labelView.textContent = labelText;

    const input = _utility__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("input", "form-input", ...classNames);
    input.setAttribute("type", type);
    input.setAttribute("required", required);
    input.id = id;
    input.name = id;

    container.append(labelView, input, document.createElement("span"));
    
    this.inputs[id] = { element: container, type : type };

    this.form.append(this.inputs[id].element);
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
    this.form.querySelector(`#${inputId}`).setAttribute("list", listId);
    this.form.querySelector(`#${inputId}`)
        .insertAdjacentElement("afterend", dataList);

    dataList.id = listId;

    list.forEach(entry => {
      let option = document.createElement("option");
      option.textContent = entry;
      dataList.append(option);
    });
  }

  /**
   * Create an options list and add it to the form.
   * 
   * @param {string} title - The title provided to the legend.
   * @param {string} isRadio - if true, then make a radio option list, else checkboxes.
   * @param { {id : string,
   *           value : string,
   *           selected : bool}[], } options 
   * The selections available on the options list.
   * id refers to the id that should be assigned the input. value refers to its textual
   * presentation.
   * @param {string} name - The name of the options list.
   * @param {boolean} required - Does the user need to answer the options list?
   */
  addOptionsListToForm(title, isRadio, options, name, required) {
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

    this.form.append(fieldset);
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
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form */ "./src/form.js");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component */ "./src/component.js");
// data


// css

// js



const countries = _data_countries_txt__WEBPACK_IMPORTED_MODULE_0__.split("\r\n");

(function main() {
  const c = new _component__WEBPACK_IMPORTED_MODULE_4__["default"]();
  const signUpForm = new _form__WEBPACK_IMPORTED_MODULE_3__["default"]("sign-up-form");

  const container = c.div("sign-up");
  container.append(c.heading("Sign-Up", 1));

  signUpForm.addInputToForm("email", "Email", "email", true, "email-field");

  signUpForm.addInputToForm("text", "Country", "country", true, "country-field");
  signUpForm.attachDatalist("countries", countries, "country");
  
  signUpForm.addInputToForm("text", "ZIP Code", "zip", true);

  signUpForm.addOptionsListToForm("Select a Plan", true, (_data_plans_csv__WEBPACK_IMPORTED_MODULE_1___default()), "plan", true);

  signUpForm.addInputToForm("password", "Password", "password", true);
  signUpForm.addInputToForm("password", "Confirm Password", "confirm-password", true);


  container.append(signUpForm.form);
  document.body.append(container);
}());


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxHQUFHO0FBQ2hCLGFBQWEsR0FBRztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLE1BQU07QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixpQkFBaUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCx3REFBSztBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL3ZhbGlkYXRpb24tZm9ybS1wcmFjdGljZS8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vdmFsaWRhdGlvbi1mb3JtLXByYWN0aWNlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly92YWxpZGF0aW9uLWZvcm0tcHJhY3RpY2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly92YWxpZGF0aW9uLWZvcm0tcHJhY3RpY2UvLi9zcmMvZGF0YS9wbGFucy5jc3YiLCJ3ZWJwYWNrOi8vdmFsaWRhdGlvbi1mb3JtLXByYWN0aWNlLy4vc3JjL2luZGV4LmNzcz9jZmU0Iiwid2VicGFjazovL3ZhbGlkYXRpb24tZm9ybS1wcmFjdGljZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly92YWxpZGF0aW9uLWZvcm0tcHJhY3RpY2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3ZhbGlkYXRpb24tZm9ybS1wcmFjdGljZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly92YWxpZGF0aW9uLWZvcm0tcHJhY3RpY2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdmFsaWRhdGlvbi1mb3JtLXByYWN0aWNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdmFsaWRhdGlvbi1mb3JtLXByYWN0aWNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdmFsaWRhdGlvbi1mb3JtLXByYWN0aWNlLy4vc3JjL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly92YWxpZGF0aW9uLWZvcm0tcHJhY3RpY2UvLi9zcmMvZm9ybS5qcyIsIndlYnBhY2s6Ly92YWxpZGF0aW9uLWZvcm0tcHJhY3RpY2UvLi9zcmMvaW1hZ2VzfHN5bmN8bm9ucmVjdXJzaXZlfC8uKHBuZ3xqcGUiLCJ3ZWJwYWNrOi8vdmFsaWRhdGlvbi1mb3JtLXByYWN0aWNlLy4vc3JjL3V0aWxpdHkuanMiLCJ3ZWJwYWNrOi8vdmFsaWRhdGlvbi1mb3JtLXByYWN0aWNlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3ZhbGlkYXRpb24tZm9ybS1wcmFjdGljZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly92YWxpZGF0aW9uLWZvcm0tcHJhY3RpY2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3ZhbGlkYXRpb24tZm9ybS1wcmFjdGljZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3ZhbGlkYXRpb24tZm9ybS1wcmFjdGljZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3ZhbGlkYXRpb24tZm9ybS1wcmFjdGljZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBbe1wiaWRcIjpcImJhc2ljXCIsXCJ2YWx1ZVwiOlwiQmFzaWMgUGxhbiAtIEZSRUUgKHdpdGggYWRzKVwiLFwiZGVmYXVsdFwiOjF9LHtcImlkXCI6XCJwcm9cIixcInZhbHVlXCI6XCJQcm8gUGxhbiAtICQ5Ljk5IC8gTW8uXCIsXCJkZWZhdWx0XCI6MH0se1wiaWRcIjpcInByZW1pdW1cIixcInZhbHVlXCI6XCJQcmVtaXVtIFBsYW4gLSAkMTQuOTkgLyBNby5cIixcImRlZmF1bHRcIjowfV0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qKlxyXG4gKiBDb21wb25lbnQgY2xhc3MuIENvbnRhaW5zIHZhcmlvdXMgRE9NIGVsZW1lbnRzLlxyXG4gKiBBdXRob3I6IGRhdHJpbm9uXHJcbiAqIFZlcnNpb246IDEuM1xyXG4gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudCB7XHJcbiAgXHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5tcWwgPSB3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDYwMHB4KVwiKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEluaXRpYWxpemVzIGEgYmFzaWMgSFRNTCBza2VsZXRvbiBmb3IgdGhlIHdlYiBwYWdlLCBnZW5lcmF0aW5nIGEgaGVhZGVyLFxyXG4gICAqIG1haW4sIGFuZCBzdGlja3kgZm9vdGVyLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHsqfSBoZWFkZXJUaXRsZSAtIFdoYXQgdGhlIHdlYiBwYWdlIGlzIGNhbGxlZC5cclxuICAgKiBAcGFyYW0ge2Jvb2x9IGVtcHR5SGVhZGVyIC0gU2hvdWxkIHRoZSBoZWFkZXIgdXNlIGEgZGVmYXVsdCBzdHJ1Y3R1cmU/XHJcbiAgICogVGhlIGRlZmF1bHQgc3RydWN0dXJlIGxvb2tzIGxpa2UgWyBMb2dvIHwgfCB8IHwgTmF2aWdhdGlvbiBMaW5rc11cclxuICAgKiBAcmV0dXJucyAtIEFuIGFycmF5IGNvbnRhaW5pbmcgcmVmZXJlbmNlcyB0byB0aGUgZ2VuZXJhdGVkIGhlYWRlciwgbWFpbiwgYW5kIGZvb3Rlci5cclxuICAgKi9cclxuICBpbml0aWFsaXplU3RydWN0dXJlKFxyXG4gICAgaGVhZGVyVGl0bGUsXHJcbiAgICBlbXB0eUhlYWRlciA9IGZhbHNlLFxyXG4gICAgY3JlYXRlTW9udGgsXHJcbiAgICBnaXRodWJMaW5rXHJcbiAgKSB7XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcclxuICAgIGNvbnN0IG1haW5XcmFwcGVyID0gdGhpcy5kaXYoXCJjb250ZW50XCIpO1xyXG4gICAgbGV0IGhlYWRlcjtcclxuICAgIGlmIChlbXB0eUhlYWRlcikge1xyXG4gICAgICBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaGVhZGVyID0gdGhpcy5oZWFkZXIoaGVhZGVyVGl0bGUpO1xyXG4gICAgfVxyXG4gICAgaGVhZGVyLmlkID0gXCJoZWFkZXJcIjtcclxuXHJcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XHJcbiAgICBjb25zdCBmb290ZXIgPSB0aGlzLmZvb3RlcihjcmVhdGVNb250aCwgZ2l0aHViTGluayk7XHJcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xyXG5cclxuICAgIG1haW5XcmFwcGVyLmFwcGVuZChoZWFkZXIsIG1haW4pO1xyXG4gICAgYm9keS5hcHBlbmQobWFpbldyYXBwZXIsIGZvb3Rlcik7XHJcblxyXG4gICAgcmV0dXJuIFtoZWFkZXIsIG1haW4sIGZvb3Rlcl07XHJcbiAgfVxyXG5cclxuICBjb250ZW50KCkge1xyXG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiY29udGVudFwiKTtcclxuXHJcbiAgICBsZXQgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xyXG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcclxuXHJcbiAgICBjb250ZW50LmFwcGVuZChtYWluKTtcclxuXHJcbiAgICByZXR1cm4gY29udGVudDtcclxuICB9XHJcblxyXG4gIGhlYWRlcih0aXRsZSkge1xyXG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XHJcbiAgICBsZXQgdGl0bGVFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgbGV0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcclxuXHJcbiAgICBtZW51QnV0dG9uLmlkID0gXCJtZW51LWJ1dHRvblwiO1xyXG4gICAgbWVudUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZmFzXCIsIFwiZmEtYmFyc1wiLCBcIm5vLWRpc3BsYXlcIik7XHJcblxyXG4gICAgdGhpcy5tcWwuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4ge1xyXG4gICAgICBpZiAoZS5tYXRjaGVzKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51LWJ1dHRvblwiKS5jbGFzc0xpc3QucmVtb3ZlKFwibm8tZGlzcGxheVwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBpdCBiaWdnZXIgdGhhbiB0aGUgcXVlcnkgcnVsZS5cclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnUtYnV0dG9uXCIpLmNsYXNzTGlzdC5hZGQoXCJuby1kaXNwbGF5XCIpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmF2YmFyXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJzbGlkZS1pbi1vdXRcIik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudS1idXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm1lbnUgcHJlc3NlZC5cIik7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYXZiYXJcIikuY2xhc3NMaXN0LnRvZ2dsZShcInNsaWRlLWluLW91dFwiKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBoZWFkZXIuaWQgPSBcImhlYWRlclwiO1xyXG4gICAgLy8gaGVhZGVyLnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCR7aW1nfSlgO1xyXG5cclxuICAgIHRpdGxlRWxlbS5pZCA9IFwicGFnZS10aXRsZVwiO1xyXG4gICAgdGl0bGVFbGVtLnRleHRDb250ZW50ID0gdGl0bGU7XHJcblxyXG4gICAgdGl0bGVFbGVtLmluc2VydEJlZm9yZShtZW51QnV0dG9uLCB0aXRsZUVsZW0uZmlyc3RDaGlsZCk7XHJcbiAgICBoZWFkZXIuYXBwZW5kKHRpdGxlRWxlbSk7XHJcblxyXG4gICAgcmV0dXJuIGhlYWRlcjtcclxuICB9XHJcblxyXG4gIG5hdmJhciguLi5saW5rcykge1xyXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcclxuICAgIGNvbnN0IGxpbmtDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcblxyXG4gICAgbmF2LmlkID0gXCJuYXZiYXJcIjtcclxuICAgIGxpbmtDb250YWluZXIuaWQgPSBcIm5hdmJhci1idXR0b25zLWNvbnRhaW5lclwiO1xyXG5cclxuICAgIGZvciAobGV0IGxpbmsgb2YgbGlua3MpIHtcclxuICAgICAgY29uc3QgbGlua0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgY29uc3QgbGlua0FuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG5cclxuICAgICAgbGlua0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwibmF2YmFyLWJ1dHRvblwiKTtcclxuXHJcbiAgICAgIGxpbmtBbmNob3IuaWQgPSBgbmF2bGluay0ke2xpbmsucmVwbGFjZShcIiBcIiwgXCItXCIpLnRvTG93ZXJDYXNlKCl9YDtcclxuICAgICAgbGlua0FuY2hvci50ZXh0Q29udGVudCA9IGxpbms7XHJcbiAgICAgIGxpbmtBbmNob3Iuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcIiNcIik7XHJcblxyXG4gICAgICBsaW5rQnV0dG9uLmFwcGVuZChsaW5rQW5jaG9yKTtcclxuICAgICAgbGlua0NvbnRhaW5lci5hcHBlbmQobGlua0J1dHRvbik7XHJcblxyXG4gICAgICAvLyBUb28gc3BlY2lmaWMuXHJcbiAgICAgIC8vIGxpbmtBbmNob3IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIC8vICAgbGV0IGN1cnJlbnRTZWN0aW9uSWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4gPiBzZWN0aW9uOm5vdCgubm8tZGlzcGxheSlcIikuaWQudG9Mb3dlckNhc2UoKTtcclxuICAgICAgLy8gICBsZXQgY2hvc2VuU2VjdGlvbklkID0gZS5jdXJyZW50VGFyZ2V0LnRleHRDb250ZW50LnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgICAvLyAgIGlmIChjdXJyZW50U2VjdGlvbklkICE9PSBjaG9zZW5TZWN0aW9uSWQpIHtcclxuICAgICAgLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2N1cnJlbnRTZWN0aW9uSWR9YCkuY2xhc3NMaXN0LmFkZChcIm5vLWRpc3BsYXlcIik7XHJcbiAgICAgIC8vICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtjaG9zZW5TZWN0aW9uSWR9YCkuY2xhc3NMaXN0LnJlbW92ZShcIm5vLWRpc3BsYXlcIik7XHJcbiAgICAgIC8vICAgfVxyXG5cclxuICAgICAgLy8gfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmF2LmFwcGVuZChsaW5rQ29udGFpbmVyKTtcclxuXHJcbiAgICByZXR1cm4gbmF2O1xyXG4gIH1cclxuXHJcbiAgYmFubmVyKHRleHQsIGltZykge1xyXG4gICAgbGV0IGJhbm5lckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWd1cmVcIik7XHJcbiAgICBsZXQgYmFubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxldCBjYXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZ2NhcHRpb25cIik7XHJcblxyXG4gICAgYmFubmVyQ29udGFpbmVyLmlkID0gXCJiYW5uZXJcIjtcclxuICAgIGJhbm5lci5pZCA9IFwiYmFubmVyLWltYWdlXCI7XHJcbiAgICBjYXB0aW9uLmlkID0gXCJiYW5uZXItY2FwdGlvblwiO1xyXG5cclxuICAgIGJhbm5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7aW1nfSlgO1xyXG5cclxuICAgIGNhcHRpb24udGV4dENvbnRlbnQgPSB0ZXh0O1xyXG5cclxuICAgIGJhbm5lckNvbnRhaW5lci5hcHBlbmQoYmFubmVyLCBjYXB0aW9uKTtcclxuXHJcbiAgICByZXR1cm4gYmFubmVyQ29udGFpbmVyO1xyXG4gIH1cclxuXHJcbiAgZm9vdGVyKGNyZWF0ZU1vbnRoLCBnaXRodWJMaW5rKSB7XHJcbiAgICBsZXQgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcclxuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyXCIpO1xyXG5cclxuICAgIGxldCB0ZXh0ID0gYENyZWF0ZWQgaW4gJHtjcmVhdGVNb250aH0gMjAyMS4gT2RpbiBQcm9qZWN0IHggRGFuIFQuYDtcclxuICAgIGxldCBnaXRodWJFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICBsZXQgZ2hJY29uID0gdGhpcy5mYUljb24oXCJmYWJcIiwgXCJmYS1naXRodWItc3F1YXJlXCIsIFwiaWNvblwiKTtcclxuXHJcbiAgICBnaXRodWJFbGVtLmFwcGVuZChnaEljb24pO1xyXG4gICAgZ2l0aHViRWxlbS5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyLWdpdGh1Yi1pY29uXCIpO1xyXG4gICAgZ2l0aHViRWxlbS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGdpdGh1YkxpbmspO1xyXG4gICAgZ2l0aHViRWxlbS5zZXRBdHRyaWJ1dGUoXCJ0YXJnZXRcIiwgXCJfYmxhbmtcIik7XHJcbiAgICBnaXRodWJFbGVtLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG5cclxuICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcblxyXG4gICAgcC50ZXh0Q29udGVudCA9IHRleHQ7XHJcbiAgICBwLmFwcGVuZChnaXRodWJFbGVtKTtcclxuICAgIGZvb3Rlci5hcHBlbmQocCk7XHJcblxyXG4gICAgcmV0dXJuIGZvb3RlcjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhbiBlbGVtZW50IHdpdGggbGFyZ2VyLCBlbWJvbGRlbmVkLCB0ZXh0LFxyXG4gICAqIHNpbWlsYXIgdG8gYSBwdWxsIHF1b3RlIGluIGEgbWFnYXppbmUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gbXNnIHtzdHJpbmd9IFRleHQgdG8gaW5jbHVkZSBpbiB0aGUgYmxvY2sgcXVvdGVcclxuICAgKi9cclxuICBwdWxscXVvdGUobXNnKSB7XHJcbiAgICBsZXQgcHVsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhc2lkZVwiKTtcclxuICAgIHB1bGwudGV4dENvbnRlbnQgPSBtc2c7XHJcblxyXG4gICAgcHVsbC5jbGFzc0xpc3QuYWRkKFwicHVsbC1xdW90ZVwiKTtcclxuXHJcbiAgICByZXR1cm4gcHVsbDtcclxuICB9XHJcblxyXG4gIHNlY3Rpb24oaWQpIHtcclxuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XHJcbiAgICBlbGVtZW50LmlkID0gaWQ7XHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJzZWN0aW9uXCIpO1xyXG5cclxuICAgIHJldHVybiBlbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhIHRleHQgaGVhZGluZyBlbGVtZW50LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHsqfSB0ZXh0IC0gVGhlIGxhYmVsIGZvciB0aGUgaGVhZGVyLlxyXG4gICAqIEBwYXJhbSB7Kn0gbGV2ZWwgLSBUaGUgbGV2ZWwgb2YgaGVhZGVyLlxyXG4gICAqL1xyXG4gIGhlYWRpbmcodGV4dCwgbGV2ZWwsIC4uLmNsYXNzTmFtZSkge1xyXG4gICAgaWYgKGxldmVsIDwgMSB8fCBsZXZlbCA+IDYpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoXCJIZWFkaW5nIGxldmVscyBjYW4gb25seSBiZSBiZXR3ZWVuIDEgdG8gNiFcIik7XHJcbiAgICB9XHJcbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgaCR7bGV2ZWx9YCk7XHJcblxyXG4gICAgaWYgKGNsYXNzTmFtZSAhPT0gbnVsbCkge1xyXG4gICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCguLi5jbGFzc05hbWUpO1xyXG4gICAgfVxyXG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gdGV4dDtcclxuXHJcbiAgICByZXR1cm4gaGVhZGVyO1xyXG4gIH1cclxuXHJcbiAgcGFyYWdyYXBoKHRleHQsIC4uLmNsYXNzTmFtZSkge1xyXG4gICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHAuY2xhc3NMaXN0LmFkZCguLi5jbGFzc05hbWUpO1xyXG5cclxuICAgIHAudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG5cclxuICAgIHJldHVybiBwO1xyXG4gIH1cclxuXHJcbiAgaW1nKHVybCwgLi4uY2xhc3NOYW1lKSB7XHJcbiAgICBsZXQgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltYWdlLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NOYW1lKTtcclxuXHJcbiAgICBpbWFnZS5zcmMgPSB1cmw7XHJcblxyXG4gICAgcmV0dXJuIGltYWdlO1xyXG4gIH1cclxuXHJcbiAgZGl2KC4uLmNsYXNzTmFtZSkge1xyXG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCguLi5jbGFzc05hbWUpO1xyXG5cclxuICAgIHJldHVybiBkaXY7XHJcbiAgfVxyXG5cclxuICBidXR0b24obGFiZWwsIC4uLmNsYXNzTmFtZSkge1xyXG4gICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBidG4uY2xhc3NMaXN0LmFkZCguLi5jbGFzc05hbWUpO1xyXG5cclxuICAgIGJ0bi50ZXh0Q29udGVudCA9IGxhYmVsO1xyXG4gICAgcmV0dXJuIGJ0bjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdlbmVyYXRlcyBhIGJhc2ljIHRhYmxlIHdpdGggc2luZ2xlLWNlbGwgY29sdW1ucyBhbmQgcm93cywgYmFzZWQgb24gdGhlIGltcG9ydGVkIGZpbGUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge2Nzdn0gZGF0YSAtIERhdGEgdG8gdHVybiBpbnRvIGEgdGFibGUuIFBsZWFzZSB1c2Ugd2VicGFjayB0byBpbXBvcnQgLmNzdiBmaWxlcy5cclxuICAgKi9cclxuICB0YWJsZShpZCA9IFwiXCIsIGRhdGEpIHtcclxuICAgIGxldCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcclxuICAgIHRhYmxlLmlkID0gaWQ7XHJcblxyXG4gICAgLy8gR2VuZXJhdGUgYSB0YWJsZSBoZWFkZXIgcm93LlxyXG4gICAgbGV0IHRhYmxlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoZWFkXCIpO1xyXG4gICAgbGV0IHRhYmxlSGVhZGVyUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG5cclxuICAgIGZvciAobGV0IGNvbCBvZiBPYmplY3Qua2V5cyhkYXRhWzBdKSkge1xyXG4gICAgICBsZXQgY29sQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcclxuICAgICAgY29sQ2VsbC50ZXh0Q29udGVudCA9IGNvbDtcclxuXHJcbiAgICAgIHRhYmxlSGVhZGVyUm93LmFwcGVuZChjb2xDZWxsKTtcclxuICAgIH1cclxuICAgIHRhYmxlSGVhZGVyLmFwcGVuZCh0YWJsZUhlYWRlclJvdyk7XHJcblxyXG4gICAgdGFibGUuYXBwZW5kKHRhYmxlSGVhZGVyKTtcclxuXHJcbiAgICBjb25zdCB0YWJsZUJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIik7XHJcbiAgICAvLyBHZW5lcmF0ZSB0YWJsZSByb3dzLlxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxldCB0cm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgICBmb3IgKGxldCBwcm9wIGluIGRhdGFbaV0pIHtcclxuICAgICAgICBsZXQgdGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcblxyXG4gICAgICAgIHRjZWxsLnRleHRDb250ZW50ID0gZGF0YVtpXVtwcm9wXTtcclxuICAgICAgICB0cm93LmFwcGVuZCh0Y2VsbCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRhYmxlQm9keS5hcHBlbmQodHJvdyk7XHJcbiAgICB9XHJcbiAgICB0YWJsZS5hcHBlbmQodGFibGVCb2R5KTtcclxuXHJcbiAgICByZXR1cm4gdGFibGU7XHJcbiAgfVxyXG5cclxuICBmYUljb24oY2F0ZWdvcnksIG5hbWUsIC4uLmNsYXNzTmFtZSkge1xyXG4gICAgbGV0IGZhc0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcclxuICAgIGZhc0ljb24uY2xhc3NMaXN0LmFkZChjYXRlZ29yeSwgbmFtZSk7XHJcbiAgICBpZiAoY2xhc3NOYW1lICE9PSBudWxsKSB7XHJcbiAgICAgIGZhc0ljb24uY2xhc3NMaXN0LmFkZCguLi5jbGFzc05hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYXNJY29uO1xyXG4gIH1cclxuXHJcbiAgc3Bhbih0ZXh0Q29udGVudCA9IG51bGwsIC4uLmNsYXNzTmFtZSkge1xyXG4gICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIGlmIChjbGFzc05hbWUubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgIHNwYW4uY2xhc3NMaXN0LmFkZCguLi5jbGFzc05hbWUpO1xyXG4gICAgfVxyXG4gICAgc3Bhbi50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xyXG5cclxuICAgIHJldHVybiBzcGFuO1xyXG4gIH1cclxuXHJcbiAgZm9ybUlucHV0KGxhYmVsVGV4dCwgdHlwZSwgaW5wdXRJZCwgbmFtZSkge1xyXG4gICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIGlucHV0SWQpO1xyXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBsYWJlbFRleHQ7XHJcblxyXG4gICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgaW5wdXQuaWQgPSBpbnB1dElkO1xyXG4gICAgaW5wdXQubmFtZSA9IG5hbWU7XHJcbiAgICBpbnB1dC50eXBlID0gdHlwZTtcclxuXHJcbiAgICByZXR1cm4gW2xhYmVsLCBpbnB1dF07XHJcbiAgfVxyXG5cclxuICBkcm9wZG93bihsYWJlbFRleHQsIG5hbWUsIGlucHV0SWQsIC4uLnZhbHVlcykge1xyXG4gICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIGlucHV0SWQpO1xyXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBsYWJlbFRleHQ7XHJcblxyXG4gICAgbGV0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XHJcbiAgICBzZWxlY3Quc2V0QXR0cmlidXRlKFwibmFtZVwiLCBuYW1lKTtcclxuICAgIHNlbGVjdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpbnB1dElkKTtcclxuXHJcbiAgICBmb3IgKGxldCB2YWwgb2YgdmFsdWVzKSB7XHJcbiAgICAgIGxldCBlbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICAgIGVudHJ5LnZhbHVlID0gdmFsO1xyXG4gICAgICBpZiAoaXNOYU4odmFsKSAmJiB0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgZW50cnkudGV4dENvbnRlbnQgPSB2YWxbMF0udG9VcHBlckNhc2UoKSArIHZhbC5zbGljZSgxKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBlbnRyeS50ZXh0Q29udGVudCA9IHZhbDtcclxuICAgICAgfVxyXG5cclxuICAgICAgc2VsZWN0LmFwcGVuZChlbnRyeSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFtsYWJlbCwgc2VsZWN0XTtcclxuICB9XHJcblxyXG4gIHRleHRBcmVhKGxhYmVsVGV4dCwgbmFtZSwgaW5wdXRJZCkge1xyXG4gICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIGlucHV0SWQpO1xyXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBsYWJlbFRleHQ7XHJcblxyXG4gICAgbGV0IHRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xyXG4gICAgdGEuaWQgPSBpbnB1dElkO1xyXG4gICAgdGEuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBuYW1lKTtcclxuXHJcbiAgICByZXR1cm4gW2xhYmVsLCB0YV07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGUgYSBjb25maXJtIG1vZGFsLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHsqfSBjbGFzc05hbWUgLSBDbGFzc2VzIHRoZSBtb2RhbCBzaG91bGQgYmVsb25nIHRvLlxyXG4gICAqIEBwYXJhbSB7Kn0gdGl0bGUgLSBUaGUgdGl0bGUgYXBwZWFyaW5nIG9uIHRoZSBtb2RhbC5cclxuICAgKiBAcGFyYW0geyp9IG1lc3NhZ2UgLSBUaGUgbWVzc2FnZSBhcHBlYXJpbmcgb24gdGhlIG1vZGFsLlxyXG4gICAqIEBwYXJhbSB7Kn0gcG9zaXRpdmVCdXR0b25MYWJlbCAtIFRleHQgZm9yIHRoZSBPSyBidXR0b24uXHJcbiAgICogQHBhcmFtIHsqfSBuZWdhdGl2ZUJ1dHRvbkxhYmVsIC0gVGV4dCBmb3IgdGhlIGNhbmNlbCBidXR0b24uXHJcbiAgICogQHBhcmFtIHsqfSBwb3NpdGl2ZUNhbGxiYWNrIC0gRnVuY3Rpb24gdG8gcnVuIGlmIE9LIGlzIHByZXNzZWQuXHJcbiAgICogQHBhcmFtIHsqfSBuZWdhdGl2ZUNhbGxiYWNrIC0gRnVuY3Rpb24gdG8gcnVuIGlmIGNhbmNlbCBpcyBwcmVzc2VkLiAnbnVsbCcgYnlcclxuICAgKiBkZWZhdWx0LCB3aGljaCB0aGVuIGp1c3QgY2xvc2VzIHRoZSBtb2RhbC5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIC0gUmV0dXJucyB0aGUgZ2VuZXJhdGVkIG1vZGFsIGVsZW1lbnQuXHJcbiAgICovXHJcbiAgY29uZmlybU1vZGFsKFxyXG4gICAgY2xhc3NOYW1lLFxyXG4gICAgdGl0bGUsXHJcbiAgICBtZXNzYWdlLFxyXG4gICAgcG9zaXRpdmVCdXR0b25MYWJlbCxcclxuICAgIG5lZ2F0aXZlQnV0dG9uTGFiZWwsXHJcbiAgICBwb3NpdGl2ZUNhbGxiYWNrLFxyXG4gICAgbmVnYXRpdmVDYWxsYmFjayA9IG51bGxcclxuICApIHtcclxuICAgIGxldCBtb2RhbFdyYXBwZXIgPSB0aGlzLmRpdigpO1xyXG4gICAgbW9kYWxXcmFwcGVyLmlkID0gXCJwcm9tcHQtd3JhcHBlclwiO1xyXG4gICAgbGV0IG1vZGFsID0gdGhpcy5kaXYoY2xhc3NOYW1lKTtcclxuXHJcbiAgICBjb25zdCB0aXRsZUhlYWRlciA9IHRoaXMuaGVhZGluZyh0aXRsZSwgMSwgXCJtb2RhbC1oZWFkZXJcIik7XHJcbiAgICBjb25zdCBtZXNzYWdlUGFyYWdyYXBoID0gdGhpcy5wYXJhZ3JhcGgobWVzc2FnZSwgXCJtb2RhbC1kaWFsb2dcIik7XHJcbiAgICBjb25zdCBwb3NpdGl2ZUJ1dHRvbiA9IHRoaXMuYnV0dG9uKHBvc2l0aXZlQnV0dG9uTGFiZWwsIFwibW9kYWwtY29uZmlybVwiKTtcclxuICAgIGNvbnN0IG5lZ2F0aXZlQnV0dG9uID0gdGhpcy5idXR0b24obmVnYXRpdmVCdXR0b25MYWJlbCwgXCJtb2RhbC1jYW5jZWxcIik7XHJcblxyXG4gICAgY29uc3QgYnV0dG9uU2VjdGlvbiA9IHRoaXMuZGl2KFwibW9kYWwtYnV0dG9uLWFyZWFcIik7XHJcblxyXG4gICAgaWYgKG5lZ2F0aXZlQ2FsbGJhY2sgPT09IG51bGwpIHtcclxuICAgICAgbmVnYXRpdmVDYWxsYmFjayA9ICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk5lZ2F0aXZlIHByZXNzZWQuXCIpO1xyXG4gICAgICAgIG1vZGFsV3JhcHBlci5yZW1vdmUoKTtcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBwb3NpdGl2ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcG9zaXRpdmVDYWxsYmFjayk7XHJcbiAgICBwb3NpdGl2ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgcG9zaXRpdmVDYWxsYmFjayhlKTtcclxuICAgICAgbW9kYWxXcmFwcGVyLnJlbW92ZSgpO1xyXG4gICAgfSk7XHJcbiAgICBuZWdhdGl2ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbmVnYXRpdmVDYWxsYmFjayk7XHJcblxyXG4gICAgYnV0dG9uU2VjdGlvbi5hcHBlbmQocG9zaXRpdmVCdXR0b24sIG5lZ2F0aXZlQnV0dG9uKTtcclxuICAgIG1vZGFsLmFwcGVuZCh0aXRsZUhlYWRlciwgbWVzc2FnZVBhcmFncmFwaCwgYnV0dG9uU2VjdGlvbik7XHJcbiAgICBtb2RhbFdyYXBwZXIuYXBwZW5kKG1vZGFsKTtcclxuXHJcbiAgICAvLyBzdHlsaW5nIG1vdmVkIHRvIC5jc3MgcGFnZS5cclxuXHJcbiAgICByZXR1cm4gbW9kYWxXcmFwcGVyO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGlzcGxheSBhIGJyaWVmLCB1bm9idHJ1c2l2ZSBwb3AtdXAgbWVzc2FnZSBhdCB0aGUgYm90dG9tIG9mIHRoZSBzY3JlZW4uXHJcbiAgICogQHBhcmFtIHsqfSB0ZXh0Q29udGVudCAtIFRoZSB0ZXh0IHRoZSBtZXNzYWdlIHNob3VsZCBkaXNwbGF5LlxyXG4gICAqIEBwYXJhbSB7Kn0gZHVyYXRpb24gLSBUaGUgZHVyYXRpb24gb2YgdGhlIG1lc3NhZ2UgaW4gc2Vjb25kcy5cclxuICAgKi9cclxuICB0b2FzdCh0ZXh0Q29udGVudCwgZHVyYXRpb24pIHtcclxuICAgIGxldCB0b2FzdEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsZXQgdG9hc3RNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBhcmFncmFwaFwiKTtcclxuICAgIHRvYXN0Qm94LmNsYXNzTGlzdC5hZGQoXCJ0b2FzdFwiKTtcclxuICAgIHRvYXN0TWVzc2FnZS50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xyXG4gICAgdG9hc3RNZXNzYWdlLmNsYXNzTGlzdC5hZGQoXCJ0b2FzdC1tZXNzYWdlXCIpO1xyXG5cclxuICAgIHRvYXN0Qm94LmFwcGVuZCh0b2FzdE1lc3NhZ2UpO1xyXG5cclxuICAgIGxldCB0b2FzdEJveENzcyA9IFwicG9zaXRpb246IGZpeGVkOyBib3R0b206IDEwdmg7XCI7XHJcbiAgICB0b2FzdEJveENzcyArPSBcIndpZHRoOiAxMDB2dztcIjtcclxuICAgIHRvYXN0Qm94Q3NzICs9IGBhbmltYXRpb246IGZhZGUtaW4tb3V0ICR7ZHVyYXRpb259cztgO1xyXG4gICAgdG9hc3RCb3hDc3MgKz0gXCJ6LWluZGV4OiA5OTk5O1wiO1xyXG5cclxuICAgIGxldCB0b2FzdE1lc3NhZ2VDc3MgPVxyXG4gICAgICBcIm1hcmdpbjogMCBhdXRvOyB3aWR0aDogMzAwcHg7IGRpc3BsYXk6IGJsb2NrOyBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1wiO1xyXG4gICAgdG9hc3RNZXNzYWdlQ3NzICs9XHJcbiAgICAgIFwidGV4dC1hbGlnbjogY2VudGVyOyBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgYm9yZGVyLXJhZGl1czogNXB4O1wiO1xyXG4gICAgdG9hc3RNZXNzYWdlQ3NzICs9IFwiY29sb3I6IHdoaXRlO1wiO1xyXG5cclxuICAgIHRvYXN0Qm94LnN0eWxlLmNzc1RleHQgPSB0b2FzdEJveENzcztcclxuICAgIHRvYXN0TWVzc2FnZS5zdHlsZS5jc3NUZXh0ID0gdG9hc3RNZXNzYWdlQ3NzO1xyXG5cclxuICAgIHRvYXN0Qm94LmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgKCkgPT4ge1xyXG4gICAgICB0b2FzdEJveC5yZW1vdmUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHRvYXN0Qm94KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFV0aWxpdHkgZnJvbSBcIi4vdXRpbGl0eVwiO1xyXG5cclxuLyoqXHJcbiAqIEEgY2xhc3MgZm9yIGNyZWF0aW5nIGZvcm0gZWxlbWVudHMgd2l0aCBjdXN0b20gdmFsaWRhdGlvblxyXG4qIHRlY2huaXF1ZXMsIHV0aWxpemluZyB0aGUgQ29uc3RyYWludCBWYWxpZGF0aW9uIEFQSS5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm0ge1xyXG4gIFxyXG4gIC8qKlxyXG4gICAqIFRoZSBmb3JtIGVsZW1lbnQuXHJcbiAgICogQHR5cGUge0hUTUxGb3JtRWxlbWVudH1cclxuICAgKi9cclxuICBmb3JtO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBpbnB1dHMgZ2l2ZW4gdG8gdGhlIGZvcm0sIGFycmFuZ2VkIGluIG9yZGVyIG9mIGFkZGl0aW9uLiBcclxuICAgKiBAdHlwZSB7e2lkIDoge2VsZW1lbnQgOiBIVE1MZWxlbWVudCwgdHlwZSA6IHR5cGV9fVtdfVxyXG4gICAqL1xyXG4gIGlucHV0cztcclxuXHJcbiAgY29uc3RydWN0b3IoY2xhc3NOYW1lKSB7XHJcbiAgICB0aGlzLmZvcm0gPSBVdGlsaXR5LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIsIGNsYXNzTmFtZSk7XHJcbiAgICBsZXQgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgICBcclxuICAgIHRoaXMuZm9ybS5hcHBlbmQodWwpO1xyXG5cclxuICAgIHRoaXMuaW5wdXRzID0ge307XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZGQgYW4gaW5wdXQgKHdpdGggYW4gYWNjb21wYW55aW5nIGxhYmVsKSB0byB0aGUgZm9ybSBvZiB0aGlzIGluc3RhbmNlLiBBIHJlZmVyZW5jZSB0byB0aGUgaW5wdXQgXHJcbiAgICogY2FuIGJlIG9idGFpbmVkIHRocm91Z2ggdGhlIGlucHV0cyBvYmplY3QgZmllbGQuXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgLSBUaGUgdHlwZSBvZiBpbnB1dCB0byBhZGQgaW50byB0aGUgZm9ybS5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbGFiZWxUZXh0IC0gVGhlIGxhYmVsIHRvIGFkdmlzZSB3aGF0IHNvcnQgb2YgaW5wdXQgaXMgbmVlZGVkLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpZCAtIFRoZSBpZCB0byByZWZlciB0byB0aGUgaW5wdXQgYnk7IGxhYmVsIHdpbGwgdXNlIHRoaXMgaW4gXCJmb3I9XCIuXHJcbiAgICogQHBhcmFtIHtib29sZWFufSByZXF1aXJlZCAtIFdoZXRoZXIgb3Igbm90IHRoZSBpbnB1dCBzaG91bGQgYmUgcmVxdWlyZWQuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZXMgLSBBbnkgYWRkaXRpb25hbCBjbGFzcyBuYW1lcyBhc3NpZ25lZCB0byB0aGUgaW5wdXQuXHJcbiAgICovXHJcbiAgYWRkSW5wdXRUb0Zvcm0odHlwZT1cInRleHRcIiwgbGFiZWxUZXh0LCBpZCwgcmVxdWlyZWQsIC4uLmNsYXNzTmFtZXMpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgIFxyXG4gICAgY29uc3QgbGFiZWxWaWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgbGFiZWxWaWV3LnNldEF0dHJpYnV0ZShcImZvclwiLCBpZCk7XHJcbiAgICBsYWJlbFZpZXcudGV4dENvbnRlbnQgPSBsYWJlbFRleHQ7XHJcblxyXG4gICAgY29uc3QgaW5wdXQgPSBVdGlsaXR5LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCBcImZvcm0taW5wdXRcIiwgLi4uY2xhc3NOYW1lcyk7XHJcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIHR5cGUpO1xyXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgcmVxdWlyZWQpO1xyXG4gICAgaW5wdXQuaWQgPSBpZDtcclxuICAgIGlucHV0Lm5hbWUgPSBpZDtcclxuXHJcbiAgICBjb250YWluZXIuYXBwZW5kKGxhYmVsVmlldywgaW5wdXQsIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpKTtcclxuICAgIFxyXG4gICAgdGhpcy5pbnB1dHNbaWRdID0geyBlbGVtZW50OiBjb250YWluZXIsIHR5cGUgOiB0eXBlIH07XHJcblxyXG4gICAgdGhpcy5mb3JtLmFwcGVuZCh0aGlzLmlucHV0c1tpZF0uZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBdHRhY2ggYSBkYXRhbGlzdCBlbGVtZW50IHRvIGFuIGlucHV0LiBBcHBlbmRzIGl0IHRvIHRoZSBpbnB1dC5cclxuICAgKiBcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbGlzdElkIC0gVGhlIG5hbWUgb2YgdGhlIGxpc3QuXHJcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gbGlzdCAtIEEgbGlzdCBvZiBvcHRpb25zIHRvIGF0dGFjaCB0byB0aGUgaW5wdXQuXHJcbiAgICogQHBhcmFtIHsqfSBpbnB1dElkIC0gdGhlIElEIG9mIHRoZSBpbnB1dCB0byBhdHRhY2ggdGhlIGRhdGFsaXN0IHRvLlxyXG4gICAqL1xyXG4gIGF0dGFjaERhdGFsaXN0KGxpc3RJZCwgbGlzdCwgaW5wdXRJZCkge1xyXG4gICAgY29uc3QgZGF0YUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGF0YWxpc3RcIik7XHJcbiAgICB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvcihgIyR7aW5wdXRJZH1gKS5zZXRBdHRyaWJ1dGUoXCJsaXN0XCIsIGxpc3RJZCk7XHJcbiAgICB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvcihgIyR7aW5wdXRJZH1gKVxyXG4gICAgICAgIC5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJhZnRlcmVuZFwiLCBkYXRhTGlzdCk7XHJcblxyXG4gICAgZGF0YUxpc3QuaWQgPSBsaXN0SWQ7XHJcblxyXG4gICAgbGlzdC5mb3JFYWNoKGVudHJ5ID0+IHtcclxuICAgICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGVudHJ5O1xyXG4gICAgICBkYXRhTGlzdC5hcHBlbmQob3B0aW9uKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlIGFuIG9wdGlvbnMgbGlzdCBhbmQgYWRkIGl0IHRvIHRoZSBmb3JtLlxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0aXRsZSAtIFRoZSB0aXRsZSBwcm92aWRlZCB0byB0aGUgbGVnZW5kLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpc1JhZGlvIC0gaWYgdHJ1ZSwgdGhlbiBtYWtlIGEgcmFkaW8gb3B0aW9uIGxpc3QsIGVsc2UgY2hlY2tib3hlcy5cclxuICAgKiBAcGFyYW0geyB7aWQgOiBzdHJpbmcsXHJcbiAgICogICAgICAgICAgIHZhbHVlIDogc3RyaW5nLFxyXG4gICAqICAgICAgICAgICBzZWxlY3RlZCA6IGJvb2x9W10sIH0gb3B0aW9ucyBcclxuICAgKiBUaGUgc2VsZWN0aW9ucyBhdmFpbGFibGUgb24gdGhlIG9wdGlvbnMgbGlzdC5cclxuICAgKiBpZCByZWZlcnMgdG8gdGhlIGlkIHRoYXQgc2hvdWxkIGJlIGFzc2lnbmVkIHRoZSBpbnB1dC4gdmFsdWUgcmVmZXJzIHRvIGl0cyB0ZXh0dWFsXHJcbiAgICogcHJlc2VudGF0aW9uLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gVGhlIG5hbWUgb2YgdGhlIG9wdGlvbnMgbGlzdC5cclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHJlcXVpcmVkIC0gRG9lcyB0aGUgdXNlciBuZWVkIHRvIGFuc3dlciB0aGUgb3B0aW9ucyBsaXN0P1xyXG4gICAqL1xyXG4gIGFkZE9wdGlvbnNMaXN0VG9Gb3JtKHRpdGxlLCBpc1JhZGlvLCBvcHRpb25zLCBuYW1lLCByZXF1aXJlZCkge1xyXG4gICAgY29uc3QgdHlwZSA9IGlzUmFkaW8gPyAncmFkaW8nIDogJ2NoZWNrYm94JztcclxuICAgIGNvbnN0IGZpZWxkc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpO1xyXG4gICAgY29uc3QgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxlZ2VuZFwiKTtcclxuXHJcbiAgICBsZWdlbmQudGV4dENvbnRlbnQgPSB0aXRsZTtcclxuICAgIGZpZWxkc2V0LmFwcGVuZChsZWdlbmQpO1xyXG5cclxuICAgIG9wdGlvbnMuZm9yRWFjaChzZWxlY3Rpb24gPT4ge1xyXG4gICAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcblxyXG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIHR5cGUpO1xyXG4gICAgICBpbnB1dC5pZCA9IHNlbGVjdGlvbi5pZDtcclxuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBuYW1lKTtcclxuICAgICAgaWYgKE51bWJlcihzZWxlY3Rpb24uZGVmYXVsdCkgPT09IDEpIHtcclxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsIHRydWUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgaW5wdXQuaWQpO1xyXG4gICAgICBsYWJlbC50ZXh0Q29udGVudCA9IHNlbGVjdGlvbi52YWx1ZTsgIFxyXG5cclxuICAgICAgY29udGFpbmVyLmFwcGVuZChpbnB1dCwgbGFiZWwpO1xyXG4gICAgICBmaWVsZHNldC5hcHBlbmQoY29udGFpbmVyKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICAvLyB0byBtYWtlIGFuIG9wdGlvbnMgbGlzdCByZXF1aXJlZCwgeW91IGp1c3QgbmVlZCB0byBzZXQgcmVxdWlyZWQgb24gb25lIGZpZWxkLlxyXG4gICAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzgyODc5NDcvMTQxNDY0NzRcclxuICAgIGlmIChyZXF1aXJlZCkge1xyXG4gICAgICBmaWVsZHNldC5xdWVyeVNlbGVjdG9yKFwiZGl2IGlucHV0XCIpLnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwidHJ1ZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmlucHV0c1tuYW1lXSA9IHsgZWxlbWVudDogZmllbGRzZXQsIHR5cGU6IHR5cGUgfTtcclxuXHJcbiAgICB0aGlzLmZvcm0uYXBwZW5kKGZpZWxkc2V0KTtcclxuICB9XHJcbiAgXHJcbn1cclxuIiwiZnVuY3Rpb24gd2VicGFja0VtcHR5Q29udGV4dChyZXEpIHtcblx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdHRocm93IGU7XG59XG53ZWJwYWNrRW1wdHlDb250ZXh0LmtleXMgPSAoKSA9PiAoW10pO1xud2VicGFja0VtcHR5Q29udGV4dC5yZXNvbHZlID0gd2VicGFja0VtcHR5Q29udGV4dDtcbndlYnBhY2tFbXB0eUNvbnRleHQuaWQgPSBcIi4vc3JjL2ltYWdlcyBzeW5jIFxcXFwuKHBuZ3xqcGU/Z3xzdmcpJFwiO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrRW1wdHlDb250ZXh0OyIsIi8qKlxyXG4gKiBBIGNsYXNzIHdpdGggdXNlZnVsLCBnZW5lcmFsLXB1cnBvc2UgbWV0aG9kcy5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFV0aWxpdHkge1xyXG4gIFxyXG4gIC8qKlxyXG4gICAqIEJhc2VkIG9uIHdlYnBhY2sncyByZXF1aXJlIHRvIHF1aWNrbHkgaW1wb3J0IGluIGFsbCBpbWFnZXMgaW4gYSBmb2xkZXIuXHJcbiAgICogU2VlIGRvY3VtZW50YXRpb24gaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvcmVxdWlyZS1jb250ZXh0IHRvIHVuZGVyc3RhbmRcclxuICAgKiBtb3JlIGFib3V0IHRoZSBwYXJhbWV0ZXIuXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHIgLSByZXF1aXJlLmNvbnRleHQoKSBmdW5jdGlvbiwgdXNlZCBmb3IgaW1wb3J0aW5nIGFsbCBmaWxlcyBpblxyXG4gICAqIGEgZGlyZWN0b3J5IG1hdGNoaW5nIGEgcGF0dGVybi4gRXg6XHJcbiAgICogcmVxdWlyZS5jb250ZXh0KFwiLi9pbWFnZXNcIiwgZmFsc2UsIC9cXC4ocG5nfGpwZT9nfHN2ZykkLykuIExlYXZlIGJsYW5rIHRvIHVzZSB0aGlzLlxyXG4gICAqIEByZXR1cm5zIC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgYWxsIHRoZSBpbWFnZXMgbWF0Y2hpbmcgdGhlIHJlcXVpcmUgY29udGV4dCxcclxuICAgKiB0aGUgb3JpZ2luYWwgZmlsZW5hbWUgKHcvIGV4dGVuc2lvbikgYmVpbmcgdGhlIGtleSByZWZlcmVuY2luZyB0aGUgaW1hZ2UuXHJcbiAgICovXHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXHJcbiAgc3RhdGljIGltcG9ydEFsbEltYWdlcyhyID0gcmVxdWlyZS5jb250ZXh0KFwiLi9pbWFnZXNcIiwgZmFsc2UsIC9cXC4ocG5nfGpwZT9nfHN2ZykkLykpIHtcclxuICAgIGxldCBpbWFnZXMgPSB7fTtcclxuICAgIHIua2V5cygpLm1hcCgoaXRlbSkgPT4geyBpbWFnZXNbaXRlbS5yZXBsYWNlKCcuLycsICcnKV0gPSByKGl0ZW0pOyB9KTtcclxuICAgIHJldHVybiBpbWFnZXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGUgYW4gZWxlbWVudCB3aXRoIHZhcmlvdXMgY2xhc3Nlcy5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGFnIC0gVGhlIEhUTUwgdGFnIG9mIHRoZSBlbGVtZW50LlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkZWZhdWx0Q2xhc3MgLSBEZWZhdWx0IGNsYXNzIHRvIHJlZmVyIHRvIHRoZSBlbGVtZW50IGJ5LlxyXG4gICAqIEBwYXJhbSAge3N0cmluZ30gY2xhc3NOYW1lcyAtIChPcHRpb25hbCkgQWRkaXRpb25hbCBjbGFzc2VzIHRvIGdpdmUgdGhlIGVsZW1lbnQuXHJcbiAgICogQHJldHVybnMgXHJcbiAgICovXHJcbiAgc3RhdGljIGNyZWF0ZUVsZW1lbnQodGFnLCBkZWZhdWx0Q2xhc3MsIC4uLmNsYXNzTmFtZXMpIHtcclxuICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XHJcbiAgICBVdGlsaXR5LmFkZENsYXNzZXNUb0VsZW1lbnQoZWxlbSwgZGVmYXVsdENsYXNzLCAuLi5jbGFzc05hbWVzKTtcclxuXHJcbiAgICByZXR1cm4gZWxlbTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgaGVscGVyIG1ldGhvZCB3aGljaCBhZGRzIGNsYXNzZXMgdG8gYSBnaXZlbiBlbGVtZW50LlxyXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW0gLSBUaGUgZWxlbWVudCB0byBhcHBlbmQgY2xhc3NlcyB0by5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGVmYXVsdENsYXNzIC0gVGhlIGNsYXNzbmFtZSB0aGF0IHNhaWQgZWxlbWVudCBzaG91bGQgYWx3YXlzIGhhdmUuXHJcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gY2xhc3NOYW1lcyAtIFRoZSBjbGFzc25hbWVzIHRvIGdpdmUgdGhlIGVsZW1lbnQgKG9wdGlvbmFsKS5cclxuICAgKiAqLyBcclxuICBzdGF0aWMgYWRkQ2xhc3Nlc1RvRWxlbWVudChlbGVtLCBkZWZhdWx0Q2xhc3MsIC4uLmNsYXNzTmFtZXMpIHtcclxuICAgICAgY2xhc3NOYW1lcy5wdXNoKGRlZmF1bHRDbGFzcyk7XHJcbiAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZCguLi5jbGFzc05hbWVzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZvciBhIGdpdmVuIGVsZW1lbnQsIGFkZCBhbiBhbmltYXRpb24gYnV0IG9ubHkgcGxheSBpdCBvbmNlLiBBZnRlcndhcmRzLFxyXG4gICAqIHVubG9hZCB0aGUgYW5pbWF0aW9uLiBUaGlzIGFsbG93cyB5b3UgdG8gYWRkIHRoZSBjbGFzcyB0byBpdCBhZ2FpbiB0byBcclxuICAgKiBwbGF5IHRoZSBhbmltYXRpb247IHRoaXMgaXMgdXNlZnVsIHdoZW4gYXNzb2NpYXRlZCB3aXRoIGV2ZW50IHRyaWdnZXJzLlxyXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW0gLSBBbiBlbGVtZW50IHRvIGFwcGx5IHRoZSBhbmltYXRpb24gdG8uXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGFuaW1hdGlvbk5hbWUgLSBBIENTUyBjbGFzcyBhc3NvY2lhdGVkIHdpdGggYW4gYW5pbWF0aW9uLlxyXG4gICAqL1xyXG4gIHN0YXRpYyB0cmlnZ2VyQW5pbWF0aW9uKGVsZW0sIGFuaW1hdGlvbk5hbWUpIHtcclxuICAgIGVsZW0uY2xhc3NMaXN0LmFkZChhbmltYXRpb25OYW1lKTtcclxuXHJcbiAgICBlbGVtLm9uYW5pbWF0aW9uZW5kID0gKCkgPT4ge2VsZW0uY2xhc3NMaXN0LnJlbW92ZShhbmltYXRpb25OYW1lKX07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZWN1cnNpdmVseSBzY2FsZSB0aGUgdHJlZSBvZiBhIGNoaWxkIG5vZGUgdW50aWwgdGhlIHBhcmVudCBtYXRjaGluZyB0aGUgZ2l2ZW5cclxuICAgKiBzZWxlY3RvciBpcyBmb3VuZC4gUmV0dXJucyBOVUxMIGlmIG5vIG1hdGNoaW5nIHBhcmVudCBpcyBmb3VuZC5cclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtIC0gQSBjaGlsZCBub2RlLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvciAtIENTUyBTZWxlY3RvciBTdHJpbmcuXHJcbiAgICogXHJcbiAgICogQHJldHVybnMge0hUTUxlbGVtZW50fSAtIFBhcmVudCBvZiBlbGVtLlxyXG4gICAqL1xyXG4gIHN0YXRpYyBnZXRNYXRjaGluZ1BhcmVudChlbGVtLCBzZWxlY3Rvcikge1xyXG4gICAgd2hpbGUoIWVsZW0ucGFyZW50Tm9kZS5tYXRjaGVzKHNlbGVjdG9yKSkge1xyXG4gICAgICBlbGVtID0gZWxlbS5wYXJlbnROb2RlO1xyXG4gICAgICBpZiAoZWxlbS5tYXRjaGVzKFwiaHRtbFwiKSkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZWxlbTtcclxuICB9XHJcblxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIGRhdGFcclxuaW1wb3J0IENvdW50cmllcyBmcm9tICcuL2RhdGEvY291bnRyaWVzLnR4dCc7XHJcbmltcG9ydCBQbGFucyBmcm9tICcuL2RhdGEvcGxhbnMuY3N2JztcclxuLy8gY3NzXHJcbmltcG9ydCAnLi9pbmRleC5jc3MnXHJcbi8vIGpzXHJcbmltcG9ydCBGb3JtIGZyb20gJy4vZm9ybSdcclxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudCc7XHJcblxyXG5jb25zdCBjb3VudHJpZXMgPSBDb3VudHJpZXMuc3BsaXQoXCJcXHJcXG5cIik7XHJcblxyXG4oZnVuY3Rpb24gbWFpbigpIHtcclxuICBjb25zdCBjID0gbmV3IENvbXBvbmVudCgpO1xyXG4gIGNvbnN0IHNpZ25VcEZvcm0gPSBuZXcgRm9ybShcInNpZ24tdXAtZm9ybVwiKTtcclxuXHJcbiAgY29uc3QgY29udGFpbmVyID0gYy5kaXYoXCJzaWduLXVwXCIpO1xyXG4gIGNvbnRhaW5lci5hcHBlbmQoYy5oZWFkaW5nKFwiU2lnbi1VcFwiLCAxKSk7XHJcblxyXG4gIHNpZ25VcEZvcm0uYWRkSW5wdXRUb0Zvcm0oXCJlbWFpbFwiLCBcIkVtYWlsXCIsIFwiZW1haWxcIiwgdHJ1ZSwgXCJlbWFpbC1maWVsZFwiKTtcclxuXHJcbiAgc2lnblVwRm9ybS5hZGRJbnB1dFRvRm9ybShcInRleHRcIiwgXCJDb3VudHJ5XCIsIFwiY291bnRyeVwiLCB0cnVlLCBcImNvdW50cnktZmllbGRcIik7XHJcbiAgc2lnblVwRm9ybS5hdHRhY2hEYXRhbGlzdChcImNvdW50cmllc1wiLCBjb3VudHJpZXMsIFwiY291bnRyeVwiKTtcclxuICBcclxuICBzaWduVXBGb3JtLmFkZElucHV0VG9Gb3JtKFwidGV4dFwiLCBcIlpJUCBDb2RlXCIsIFwiemlwXCIsIHRydWUpO1xyXG5cclxuICBzaWduVXBGb3JtLmFkZE9wdGlvbnNMaXN0VG9Gb3JtKFwiU2VsZWN0IGEgUGxhblwiLCB0cnVlLCBQbGFucywgXCJwbGFuXCIsIHRydWUpO1xyXG5cclxuICBzaWduVXBGb3JtLmFkZElucHV0VG9Gb3JtKFwicGFzc3dvcmRcIiwgXCJQYXNzd29yZFwiLCBcInBhc3N3b3JkXCIsIHRydWUpO1xyXG4gIHNpZ25VcEZvcm0uYWRkSW5wdXRUb0Zvcm0oXCJwYXNzd29yZFwiLCBcIkNvbmZpcm0gUGFzc3dvcmRcIiwgXCJjb25maXJtLXBhc3N3b3JkXCIsIHRydWUpO1xyXG5cclxuXHJcbiAgY29udGFpbmVyLmFwcGVuZChzaWduVXBGb3JtLmZvcm0pO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kKGNvbnRhaW5lcik7XHJcbn0oKSk7XHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=