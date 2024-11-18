/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/the-new-css-reset/css/reset.css":
/*!******************************************************!*\
  !*** ./node_modules/the-new-css-reset/css/reset.css ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/main/shared/sprite/404.svg":
/*!****************************************!*\
  !*** ./src/main/shared/sprite/404.svg ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "404-usage",
      viewBox: "0 0 975 415",
      url: "/assets/" + "sprite.svg#404-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/main/shared/sprite/banner.svg":
/*!*******************************************!*\
  !*** ./src/main/shared/sprite/banner.svg ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "banner-usage",
      viewBox: "0 0 878 769",
      url: "/assets/" + "sprite.svg#banner-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/main/shared/sprite/icon-ball.svg":
/*!**********************************************!*\
  !*** ./src/main/shared/sprite/icon-ball.svg ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "icon-ball-usage",
      viewBox: "0 0 27 27",
      url: "/assets/" + "sprite.svg#icon-ball-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/js/app/app.ts":
/*!***************************!*\
  !*** ./src/js/app/app.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   App: function() { return /* binding */ App; }
/* harmony export */ });
var App = /** @class */ (function () {
    function App() {
        this.init = function () {
            console.log('App Inited');
        };
        this.init();
    }
    return App;
}());



/***/ }),

/***/ "./src/main/shared/libs/index.ts":
/*!***************************************!*\
  !*** ./src/main/shared/libs/index.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var the_new_css_reset_css_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! the-new-css-reset/css/reset.css */ "./node_modules/the-new-css-reset/css/reset.css");



/***/ }),

/***/ "./src/main/shared/sprite/index.ts":
/*!*****************************************!*\
  !*** ./src/main/shared/sprite/index.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _icon_ball_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon-ball.svg */ "./src/main/shared/sprite/icon-ball.svg");
/* harmony import */ var _404_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./404.svg */ "./src/main/shared/sprite/404.svg");
/* harmony import */ var _banner_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./banner.svg */ "./src/main/shared/sprite/banner.svg");





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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_app_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/app/app */ "./src/js/app/app.ts");
/* harmony import */ var _main_shared_libs___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main/shared/libs/ */ "./src/main/shared/libs/index.ts");
/* harmony import */ var _main_shared_sprite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/shared/sprite */ "./src/main/shared/sprite/index.ts");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");




document.addEventListener('DOMContentLoaded', function () {
    new _js_app_app__WEBPACK_IMPORTED_MODULE_0__.App();
});

}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmZmMWMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBLCtEQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDUEEsK0RBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNQQSwrREFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ2M7Ozs7Ozs7Ozs7Ozs7QUNUMEI7Ozs7Ozs7Ozs7Ozs7OztBQ0FoQjtBQUNOO0FBQ0c7Ozs7Ozs7VUNGdEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQSw4Q0FBOEM7Ozs7O1dDQTlDO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTm1DO0FBQ047QUFDQztBQUNSO0FBQ3RCO0FBQ0EsUUFBUSw0Q0FBRztBQUNYLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb2xvc2F0aWsvLi9ub2RlX21vZHVsZXMvdGhlLW5ldy1jc3MtcmVzZXQvY3NzL3Jlc2V0LmNzcz8xZjk0Iiwid2VicGFjazovL3BvbG9zYXRpay8uL3NyYy9zdHlsZS5zY3NzPzRmM2MiLCJ3ZWJwYWNrOi8vcG9sb3NhdGlrLy4vc3JjL21haW4vc2hhcmVkL3Nwcml0ZS80MDQuc3ZnIiwid2VicGFjazovL3BvbG9zYXRpay8uL3NyYy9tYWluL3NoYXJlZC9zcHJpdGUvYmFubmVyLnN2ZyIsIndlYnBhY2s6Ly9wb2xvc2F0aWsvLi9zcmMvbWFpbi9zaGFyZWQvc3ByaXRlL2ljb24tYmFsbC5zdmciLCJ3ZWJwYWNrOi8vcG9sb3NhdGlrLy4vc3JjL2pzL2FwcC9hcHAudHMiLCJ3ZWJwYWNrOi8vcG9sb3NhdGlrLy4vc3JjL21haW4vc2hhcmVkL2xpYnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vcG9sb3NhdGlrLy4vc3JjL21haW4vc2hhcmVkL3Nwcml0ZS9pbmRleC50cyIsIndlYnBhY2s6Ly9wb2xvc2F0aWsvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcG9sb3NhdGlrL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wb2xvc2F0aWsvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wb2xvc2F0aWsvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wb2xvc2F0aWsvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiZXhwb3J0IGRlZmF1bHQge1xuICAgICAgaWQ6IFwiNDA0LXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCA5NzUgNDE1XCIsXG4gICAgICB1cmw6IFwiL2Fzc2V0cy9cIiArIFwic3ByaXRlLnN2ZyM0MDQtdXNhZ2VcIixcbiAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVybDtcbiAgICAgIH1cbiAgICB9IiwiZXhwb3J0IGRlZmF1bHQge1xuICAgICAgaWQ6IFwiYmFubmVyLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCA4NzggNzY5XCIsXG4gICAgICB1cmw6IFwiL2Fzc2V0cy9cIiArIFwic3ByaXRlLnN2ZyNiYW5uZXItdXNhZ2VcIixcbiAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVybDtcbiAgICAgIH1cbiAgICB9IiwiZXhwb3J0IGRlZmF1bHQge1xuICAgICAgaWQ6IFwiaWNvbi1iYWxsLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAyNyAyN1wiLFxuICAgICAgdXJsOiBcIi9hc3NldHMvXCIgKyBcInNwcml0ZS5zdmcjaWNvbi1iYWxsLXVzYWdlXCIsXG4gICAgICB0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51cmw7XG4gICAgICB9XG4gICAgfSIsInZhciBBcHAgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBBcHAoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQXBwIEluaXRlZCcpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gQXBwO1xyXG59KCkpO1xyXG5leHBvcnQgeyBBcHAgfTtcclxuIiwiaW1wb3J0IFwidGhlLW5ldy1jc3MtcmVzZXQvY3NzL3Jlc2V0LmNzc1wiO1xyXG4iLCJpbXBvcnQgJy4vaWNvbi1iYWxsLnN2Zyc7XHJcbmltcG9ydCAnLi80MDQuc3ZnJztcclxuaW1wb3J0ICcuL2Jhbm5lci5zdmcnO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBBcHAgfSBmcm9tIFwiLi9qcy9hcHAvYXBwXCI7XHJcbmltcG9ydCBcIi4vbWFpbi9zaGFyZWQvbGlicy9cIjtcclxuaW1wb3J0IFwiLi9tYWluL3NoYXJlZC9zcHJpdGVcIjtcclxuaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBuZXcgQXBwKCk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=