/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Component/Examplebutton.js":
/*!****************************************!*\
  !*** ./src/Component/Examplebutton.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Examplebutton_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Examplebutton.scss */ "./src/Component/Examplebutton.scss");
/* harmony import */ var _Examplebutton_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Examplebutton_scss__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var Examplebutton = /*#__PURE__*/function () {
  function Examplebutton() {
    _classCallCheck(this, Examplebutton);
  }
  _createClass(Examplebutton, [{
    key: "render",
    value: function render() {
      var button = document.createElement("button");
      button.innerHTML = "Press Me";
      button.classList.add("green-button");
      var body = document.querySelector("body");
      body.append(button);
    }
  }]);
  return Examplebutton;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Examplebutton);

/***/ }),

/***/ "./src/addingimages.js":
/*!*****************************!*\
  !*** ./src/addingimages.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apple_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apple.jpg */ "./src/apple.jpg");
/* harmony import */ var _apple_jpg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apple_jpg__WEBPACK_IMPORTED_MODULE_0__);

function addimages() {
  var img = document.createElement("img");
  img.src = (_apple_jpg__WEBPACK_IMPORTED_MODULE_0___default());
  var body = document.querySelector("body");
  body.append(img);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addimages);

/***/ }),

/***/ "./src/barbarian.js":
/*!**************************!*\
  !*** ./src/barbarian.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "barbarian": () => (/* binding */ barbarian)
/* harmony export */ });
var barbarian = "barbarian";

/***/ }),

/***/ "./src/getClasses.js":
/*!***************************!*\
  !*** ./src/getClasses.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wizard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wizard */ "./src/wizard.js");
/* harmony import */ var _barbarian__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./barbarian */ "./src/barbarian.js");


function getClasses() {
  console.log("get classes was called");
  console.log("Check for live loading");
  console.log(_wizard__WEBPACK_IMPORTED_MODULE_0__.wizard);
  console.log(_barbarian__WEBPACK_IMPORTED_MODULE_1__.barbarian);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getClasses);

/***/ }),

/***/ "./src/helloworld.js":
/*!***************************!*\
  !*** ./src/helloworld.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function displayHelloWorld() {
  console.log("Hello world!");
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayHelloWorld);

/***/ }),

/***/ "./src/wizard.js":
/*!***********************!*\
  !*** ./src/wizard.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wizard": () => (/* binding */ wizard)
/* harmony export */ });
var wizard = "Malayalam";

/***/ }),

/***/ "./src/Component/Examplebutton.scss":
/*!******************************************!*\
  !*** ./src/Component/Examplebutton.scss ***!
  \******************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:9)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> $bg-color: red;\n| $text-color: yellow;\n| ");

/***/ }),

/***/ "./src/apple.jpg":
/*!***********************!*\
  !*** ./src/apple.jpg ***!
  \***********************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

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
/* harmony import */ var _helloworld__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helloworld */ "./src/helloworld.js");
/* harmony import */ var _getClasses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getClasses */ "./src/getClasses.js");
/* harmony import */ var _addingimages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addingimages */ "./src/addingimages.js");
/* harmony import */ var _Component_Examplebutton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Component/Examplebutton */ "./src/Component/Examplebutton.js");




(0,_helloworld__WEBPACK_IMPORTED_MODULE_0__["default"])();
/* getClasses(); */
(0,_addingimages__WEBPACK_IMPORTED_MODULE_2__["default"])();
var examplebutton = new _Component_Examplebutton__WEBPACK_IMPORTED_MODULE_3__["default"]();
examplebutton.render();
var multiply = function multiply(a, b, c) {
  var d = a * b * c;
  console.log("Multiplication of ".concat(a, " ,").concat(b, " and ").concat(c, " is ").concat(d));
};
multiply(1, 2, 3);
/* const obj = { a: "alpha", b: "bravo" };
const newobj = { ...obj, c: "charlie" };
console.log(newobj);
console.log(["a", "b", "c"].includes("b")); */
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map